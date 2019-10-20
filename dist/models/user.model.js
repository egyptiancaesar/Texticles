"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = __importStar(require("crypto"));
const MUUID = __importStar(require("uuid-mongodb"));
const error_1 = require("../error");
const client_1 = require("../database/client");
const saltLength = 16;
// The different roles that a user can be assigned
//@shared
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Standard"] = 1] = "Standard";
})(Role = exports.Role || (exports.Role = {}));
/**
 * Create a new user
 * @param email - The email for the new account
 * @param password - The password for the new account
 * @param role - The role to set the new account with (Defaults to Standard User Role)
 */
function createUsers(email, password, role = Role.Standard) {
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
exports.createUsers = createUsers;
function getUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userData = yield client_1.dbClient.getCollection(client_1.Collections.Users).findOne({ email });
            return userData;
        }
        catch (e) {
            return new error_1.InternalError(0, 'Failed to Get User', error_1.Severity.Error);
        }
    });
}
exports.getUserByEmail = getUserByEmail;
function createAuthToken(user) {
    return {
        id: user.id,
        email: user.email,
        expires: new Date().valueOf() + 18000000,
        role: user.role,
    };
}
exports.createAuthToken = createAuthToken;
function addFailedLoginAttempt(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return modifyLoginAttempts(user, user.failedLoginAttempts + 1);
    });
}
exports.addFailedLoginAttempt = addFailedLoginAttempt;
function resetFailedLoginAttempt(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return modifyLoginAttempts(user, 0);
    });
}
exports.resetFailedLoginAttempt = resetFailedLoginAttempt;
function modifyLoginAttempts(user, value) {
    return __awaiter(this, void 0, void 0, function* () {
        const updatedUser = Object.assign(Object.assign({}, user), { failedLoginAttempts: value });
        try {
            yield client_1.dbClient.getCollection(client_1.Collections.Users).updateOne({ id: user.id }, { $set: { failedLoginAttempts: value } });
        }
        catch (e) {
            if (e instanceof Error) {
                return new error_1.InternalError(0, 'Failed to Increment Login Attempts', error_1.Severity.Error);
            }
        }
        return updatedUser;
    });
}
function hashPassword(password, salt) {
    const hash = crypto.createHmac('sha256', salt);
    hash.update(password);
    return hash.digest('hex');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbIm1vZGVscy91c2VyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUFpQztBQUNqQyxvREFBc0M7QUFFdEMsb0NBQW1EO0FBQ25ELCtDQUEyRDtBQUUzRCxNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFFdEIsa0RBQWtEO0FBQ2xELFNBQVM7QUFDVCxJQUFZLElBR1g7QUFIRCxXQUFZLElBQUk7SUFDWixpQ0FBSyxDQUFBO0lBQ0wsdUNBQVEsQ0FBQTtBQUNaLENBQUMsRUFIVyxJQUFJLEdBQUosWUFBSSxLQUFKLFlBQUksUUFHZjtBQXNCRDs7Ozs7R0FLRztBQUNILFNBQWdCLFdBQVcsQ0FBQyxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxPQUFhLElBQUksQ0FBQyxRQUFRO0lBQ25GLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BFLE9BQU87UUFDSCxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDdkIsS0FBSztRQUNMLFlBQVk7UUFDWixZQUFZLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUM7UUFDbEQsV0FBVyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO1FBQ2pDLG1CQUFtQixFQUFFLENBQUM7UUFDdEIsSUFBSTtLQUNQLENBQUM7QUFDTixDQUFDO0FBWEQsa0NBV0M7QUFFRCxTQUFzQixjQUFjLENBQUMsS0FBYTs7UUFDOUMsSUFBSTtZQUNBLE1BQU0sUUFBUSxHQUFHLE1BQU0saUJBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3BGLE9BQU8sUUFBZ0IsQ0FBQztTQUMzQjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsT0FBTyxJQUFJLHFCQUFhLENBQUMsQ0FBQyxFQUFFLG9CQUFvQixFQUFFLGdCQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckU7SUFDTCxDQUFDO0NBQUE7QUFQRCx3Q0FPQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxJQUFVO0lBQ3RDLE9BQU87UUFDSCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7UUFDWCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDakIsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsUUFBUTtRQUN4QyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7S0FDbEIsQ0FBQTtBQUNMLENBQUM7QUFQRCwwQ0FPQztBQUVELFNBQXNCLHFCQUFxQixDQUFDLElBQVU7O1FBQ2xELE9BQU8sbUJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0NBQUE7QUFGRCxzREFFQztBQUVELFNBQXNCLHVCQUF1QixDQUFDLElBQVU7O1FBQ3BELE9BQU8sbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FBQTtBQUZELDBEQUVDO0FBRUQsU0FBZSxtQkFBbUIsQ0FBQyxJQUFVLEVBQUUsS0FBYTs7UUFDeEQsTUFBTSxXQUFXLG1DQUNWLElBQUksS0FDUCxtQkFBbUIsRUFBRSxLQUFLLEdBQzdCLENBQUM7UUFFRixJQUFJO1lBQ0EsTUFBTSxpQkFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FDckQsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUNmLEVBQUUsSUFBSSxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLEVBQUMsQ0FDMUMsQ0FBQztTQUNMO1FBQUMsT0FBTSxDQUFDLEVBQUU7WUFDUCxJQUFHLENBQUMsWUFBWSxLQUFLLEVBQUU7Z0JBQ25CLE9BQU8sSUFBSSxxQkFBYSxDQUFDLENBQUMsRUFBRSxvQ0FBb0MsRUFBRSxnQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3JGO1NBQ0o7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0NBQUE7QUFFRCxTQUFTLFlBQVksQ0FBQyxRQUFnQixFQUFFLElBQVk7SUFDaEQsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNyeXB0byBmcm9tICdjcnlwdG8nO1xuaW1wb3J0ICogYXMgTVVVSUQgZnJvbSAndXVpZC1tb25nb2RiJztcblxuaW1wb3J0IHsgSW50ZXJuYWxFcnJvciwgU2V2ZXJpdHkgfSBmcm9tICcuLi9lcnJvcic7XG5pbXBvcnQgeyBkYkNsaWVudCwgQ29sbGVjdGlvbnMgfSBmcm9tICcuLi9kYXRhYmFzZS9jbGllbnQnO1xuXG5jb25zdCBzYWx0TGVuZ3RoID0gMTY7XG5cbi8vIFRoZSBkaWZmZXJlbnQgcm9sZXMgdGhhdCBhIHVzZXIgY2FuIGJlIGFzc2lnbmVkXG4vL0BzaGFyZWRcbmV4cG9ydCBlbnVtIFJvbGUge1xuICAgIEFkbWluLFxuICAgIFN0YW5kYXJkXG59XG5cbi8vIEFuIGF1dGggQXV0aFRva2VuIGZvciB0aGUgdXNlciB0byB1c2UgdG8gYXV0aG9yaXplXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhUb2tlbiB7XG4gICAgcmVhZG9ubHkgaWQ6IHN0cmluZyxcbiAgICByZWFkb25seSBlbWFpbDogc3RyaW5nLFxuICAgIHJlYWRvbmx5IGV4cGlyZXM6IG51bWJlcixcbiAgICByZWFkb25seSByb2xlOiBSb2xlLFxufVxuXG4vLyBBIHVzZXJzIGRhdGEuLiBGdWxsIE1vbmdvIERCIGVudHJ5IGZvcm1hdCAoU2NoZW1hIGZvciBVc2Vycylcbi8vQHNoYXJlZFxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgICByZWFkb25seSBpZDogc3RyaW5nLFxuICAgIHJlYWRvbmx5IGVtYWlsOiBzdHJpbmcsXG4gICAgcmVhZG9ubHkgcGFzc3dvcmRTYWx0OiBzdHJpbmcsXG4gICAgcmVhZG9ubHkgcGFzc3dvcmRIYXNoOiBzdHJpbmcsXG4gICAgcmVhZG9ubHkgZGF0ZUNyZWF0ZWQ6IG51bWJlcixcbiAgICByZWFkb25seSBmYWlsZWRMb2dpbkF0dGVtcHRzOiBudW1iZXIsXG4gICAgcmVhZG9ubHkgcm9sZTogUm9sZTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgdXNlclxuICogQHBhcmFtIGVtYWlsIC0gVGhlIGVtYWlsIGZvciB0aGUgbmV3IGFjY291bnRcbiAqIEBwYXJhbSBwYXNzd29yZCAtIFRoZSBwYXNzd29yZCBmb3IgdGhlIG5ldyBhY2NvdW50XG4gKiBAcGFyYW0gcm9sZSAtIFRoZSByb2xlIHRvIHNldCB0aGUgbmV3IGFjY291bnQgd2l0aCAoRGVmYXVsdHMgdG8gU3RhbmRhcmQgVXNlciBSb2xlKVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXNlcnMoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgcm9sZTogUm9sZSA9IFJvbGUuU3RhbmRhcmQpOiBVc2VyIHtcbiAgICBjb25zdCBwYXNzd29yZFNhbHQgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoc2FsdExlbmd0aCkudG9TdHJpbmcoJ2hleCcpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBNVVVJRC52NC50b1N0cmluZygpLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRTYWx0LFxuICAgICAgICBwYXNzd29yZEhhc2g6IGhhc2hQYXNzd29yZChwYXNzd29yZCwgcGFzc3dvcmRTYWx0KSxcbiAgICAgICAgZGF0ZUNyZWF0ZWQ6IG5ldyBEYXRlKCkudmFsdWVPZigpLFxuICAgICAgICBmYWlsZWRMb2dpbkF0dGVtcHRzOiAwLFxuICAgICAgICByb2xlLFxuICAgIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyQnlFbWFpbChlbWFpbDogc3RyaW5nKTogUHJvbWlzZTxVc2VyIHwgSW50ZXJuYWxFcnJvcj4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgZGJDbGllbnQuZ2V0Q29sbGVjdGlvbihDb2xsZWN0aW9ucy5Vc2VycykuZmluZE9uZSh7IGVtYWlsIH0pO1xuICAgICAgICByZXR1cm4gdXNlckRhdGEgYXMgVXNlcjtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBuZXcgSW50ZXJuYWxFcnJvcigwLCAnRmFpbGVkIHRvIEdldCBVc2VyJywgU2V2ZXJpdHkuRXJyb3IpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUF1dGhUb2tlbih1c2VyOiBVc2VyKTogQXV0aFRva2VuIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgIGV4cGlyZXM6IG5ldyBEYXRlKCkudmFsdWVPZigpICsgMTgwMDAwMDAsXG4gICAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRGYWlsZWRMb2dpbkF0dGVtcHQodXNlcjogVXNlcik6IFByb21pc2U8VXNlciB8IEludGVybmFsRXJyb3I+IHtcbiAgICByZXR1cm4gbW9kaWZ5TG9naW5BdHRlbXB0cyh1c2VyLCB1c2VyLmZhaWxlZExvZ2luQXR0ZW1wdHMgKyAxKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc2V0RmFpbGVkTG9naW5BdHRlbXB0KHVzZXI6IFVzZXIpOiBQcm9taXNlPFVzZXIgfCBJbnRlcm5hbEVycm9yPiB7XG4gICAgcmV0dXJuIG1vZGlmeUxvZ2luQXR0ZW1wdHModXNlciwgMCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG1vZGlmeUxvZ2luQXR0ZW1wdHModXNlcjogVXNlciwgdmFsdWU6IG51bWJlcik6IFByb21pc2U8VXNlciB8IEludGVybmFsRXJyb3I+IHtcbiAgICBjb25zdCB1cGRhdGVkVXNlciA9IHtcbiAgICAgICAgLi4udXNlcixcbiAgICAgICAgZmFpbGVkTG9naW5BdHRlbXB0czogdmFsdWUsXG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRiQ2xpZW50LmdldENvbGxlY3Rpb24oQ29sbGVjdGlvbnMuVXNlcnMpLnVwZGF0ZU9uZShcbiAgICAgICAgICAgIHsgaWQ6IHVzZXIuaWQgfSxcbiAgICAgICAgICAgIHsgJHNldDogeyBmYWlsZWRMb2dpbkF0dGVtcHRzOiB2YWx1ZSB9fSxcbiAgICAgICAgKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgaWYoZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludGVybmFsRXJyb3IoMCwgJ0ZhaWxlZCB0byBJbmNyZW1lbnQgTG9naW4gQXR0ZW1wdHMnLCBTZXZlcml0eS5FcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdXBkYXRlZFVzZXI7XG59XG5cbmZ1bmN0aW9uIGhhc2hQYXNzd29yZChwYXNzd29yZDogc3RyaW5nLCBzYWx0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGhhc2ggPSBjcnlwdG8uY3JlYXRlSG1hYygnc2hhMjU2Jywgc2FsdCk7XG4gICAgaGFzaC51cGRhdGUocGFzc3dvcmQpO1xuICAgIHJldHVybiBoYXNoLmRpZ2VzdCgnaGV4Jyk7XG59XG4iXX0=