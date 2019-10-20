"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const jwt = __importStar(require("jsonwebtoken"));
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
function jwtHandler(req, res, next) {
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
    const token = jwt.verify(fixedToken, config_1.signingSecret);
    console.log(token);
}
exports.jwtMiddleware = jwtHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lm13LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsibWlkZGxld2FyZXMvand0Lm13LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLHNDQUEwQztBQUUxQyxrREFBb0M7QUFFcEMsb0VBQW9FO0FBQ3BFLE1BQU0sTUFBTSxHQUFHO0lBQ1gsUUFBUTtJQUNSLFNBQVM7SUFDVCxRQUFRO0lBQ1IsTUFBTTtDQUNULENBQUM7QUFFRjs7OztHQUlHO0FBQ0gsU0FBUyxVQUFVLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjtJQUMvRCwrQ0FBK0M7SUFDL0MsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ2hELElBQUksRUFBRSxDQUFDO1FBQ1AsT0FBTztLQUNWO0lBRUQsNkRBQTZEO0lBQzdELE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0UsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLENBQUMsQ0FBQztLQUM5RDtJQUVELDhEQUE4RDtJQUM5RCxNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0RCxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxzQkFBYSxDQUFDLENBQUM7SUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2QixDQUFDO0FBRVksUUFBQSxhQUFhLEdBQUcsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgc2lnbmluZ1NlY3JldCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmltcG9ydCAqIGFzIGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuXG4vLyBFbmRwb2ludHMgdGhhdCBhcmUgcGVybWl0dGVkIHRvIGJlIGFjY2Vzc2VkIHdpdGhvdXQgYXV0aG9yaXphdGlvblxuY29uc3Qgbm9BdXRoID0gW1xuICAgICcvbG9naW4nLFxuICAgICcvc2lnbnVwJyxcbiAgICAnL2Jvb2tzJyxcbiAgICAnL3NyYydcbl07XG5cbi8qKlxuICogSGFuZGxlcyB0aGUgcGFyc2luZyBvZiBhIEpTT04gd2ViIHRva2VuIGZyb20gdGhlIGNsaWVudC4gVG9rZW5zIGNhbiBiZSBwcmVzZW50ZWQgaW4gXG4gKiBlaXRoZXIgdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyIG9yIGlmIHRoaXMgaXMgbm90IHByZXNlbnQgdGhlIGVuZHBvaW50IHdpbGwgY2hlY2sgdGhlIFxuICogYnJvd3NlcnMgY29va2llcyBmb3IgXCJhdXRoLXRva2VuXCIuXG4gKi9cbmZ1bmN0aW9uIGp3dEhhbmRsZXIocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcbiAgICAvLyBDaGVjayBpZiBwYXRoIGRvZXMgbm90IHJlcXVpcmUgYXV0aG9yaXphdGlvblxuICAgIGlmIChub0F1dGguc29tZSgoaXRlbSkgPT4gcmVxLnBhdGguaW5jbHVkZXMoaXRlbSkpKSB7XG4gICAgICAgIG5leHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHRoZSB0b2tlbiBpcyBwcmVzZW50IGluIHRoZSBoZWFkZXIgb3IgaW4gYSBjb29raWVcbiAgICBjb25zdCB0b2tlblN0cmluZyA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24gfHwgcmVxLmNvb2tpZXNbJ2F1dGgtdG9rZW4nXTtcbiAgICBpZiAoIXRva2VuU3RyaW5nKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ05vIEF1dGggdG9rZW4gcHJlc2VudCcgfSk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGJlYXJlciBpbiB0aGUgY2FzZSB0aGF0IHRoZSB0b2tlbiB3YXMgc2VudCBpbiBoZWFkZXJcbiAgICBjb25zdCBmaXhlZFRva2VuID0gdG9rZW5TdHJpbmcucmVwbGFjZSgnQmVhcmVyICcsICcnKTtcbiAgICBjb25zdCB0b2tlbiA9IGp3dC52ZXJpZnkoZml4ZWRUb2tlbiwgc2lnbmluZ1NlY3JldCk7XG4gICAgY29uc29sZS5sb2codG9rZW4pO1xufVxuXG5leHBvcnQgY29uc3Qgand0TWlkZGxld2FyZSA9IGp3dEhhbmRsZXI7XG4iXX0=