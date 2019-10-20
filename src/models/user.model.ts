import * as crypto from 'crypto';
import * as MUUID from 'uuid-mongodb';

import { InternalError, Severity } from '../error';
import { dbClient, Collections } from '../database/client';

const saltLength = 16;

// The different roles that a user can be assigned
//@shared
export enum Role {
    Admin,
    Standard
}

// An auth AuthToken for the user to use to authorize
export interface AuthToken {
    readonly id: string,
    readonly email: string,
    readonly expires: number,
    readonly role: Role,
}

// A users data.. Full Mongo DB entry format (Schema for Users)
//@shared
export interface User {
    readonly id: string,
    readonly email: string,
    readonly passwordSalt: string,
    readonly passwordHash: string,
    readonly dateCreated: number,
    readonly failedLoginAttempts: number,
    readonly role: Role;
}

/**
 * Create a new user
 * @param email - The email for the new account
 * @param password - The password for the new account
 * @param role - The role to set the new account with (Defaults to Standard User Role)
 */
export function createUsers(email: string, password: string, role: Role = Role.Standard): User {
    const passwordSalt = crypto.randomBytes(saltLength).toString('hex');
    return {
        id: MUUID.v4.toString(),
        email,
        passwordSalt,
        passwordHash: hashPassword(password, passwordSalt),
        dateCreated: new Date().valueOf(),
        failedLoginAttempts: 0,
        role,
    };
}

export async function getUserByEmail(email: string): Promise<User | InternalError> {
    try {
        const userData = await dbClient.getCollection(Collections.Users).findOne({ email });
        return userData as User;
    } catch (e) {
        return new InternalError(0, 'Failed to Get User', Severity.Error);
    }
}

export function createAuthToken(user: User): AuthToken {
    return {
        id: user.id,
        email: user.email,
        expires: new Date().valueOf() + 18000000,
        role: user.role,
    }
}

export async function addFailedLoginAttempt(user: User): Promise<User | InternalError> {
    return modifyLoginAttempts(user, user.failedLoginAttempts + 1);
}

export async function resetFailedLoginAttempt(user: User): Promise<User | InternalError> {
    return modifyLoginAttempts(user, 0);
}

async function modifyLoginAttempts(user: User, value: number): Promise<User | InternalError> {
    const updatedUser = {
        ...user,
        failedLoginAttempts: value,
    };

    try {
        await dbClient.getCollection(Collections.Users).updateOne(
            { id: user.id },
            { $set: { failedLoginAttempts: value }},
        );
    } catch(e) {
        if(e instanceof Error) {
            return new InternalError(0, 'Failed to Increment Login Attempts', Severity.Error);
        }
    }

    return updatedUser;
}

function hashPassword(password: string, salt: string): string {
    const hash = crypto.createHmac('sha256', salt);
    hash.update(password);
    return hash.digest('hex');
}
