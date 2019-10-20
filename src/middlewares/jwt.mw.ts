import { Request, Response, NextFunction } from 'express';
import { signingSecret } from '../config';

import * as jwt from 'jsonwebtoken';

// Endpoints that are permitted to be accessed without authorization
const noAuth = [
    '/login',
    '/signup',
    '/books',
    '/src'
];

/**
 * Handles the parsing of a JSON web token from the client. Tokens can be presented in 
 * either the Authorization header or if this is not present the endpoint will check the 
 * browsers cookies for "auth-token".
 */
function jwtHandler(req: Request, res: Response, next: NextFunction) {
    // Check if path does not require authorization
    if (noAuth.some((item) => req.path.includes(item))) {
        next();
        return;
    }

    // Check if the token is present in the header or in a cookie
    const tokenString = req.headers.authorization || req.cookies['auth-token'];
    if (!tokenString) {
        res.status(401).send({ message: 'No Auth token present' });
    }

    // Remove bearer in the case that the token was sent in header
    const fixedToken = tokenString.replace('Bearer ', '');
    const token = jwt.verify(fixedToken, signingSecret);
    console.log(token);
}

export const jwtMiddleware = jwtHandler;
