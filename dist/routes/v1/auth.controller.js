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
const express_1 = require("express");
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = require("../../config");
const User = __importStar(require("../../models/user.model"));
const error_1 = require("../../error");
const router = express_1.Router();
router.post('/signup', (req, res) => {
    // Parse new user data and create a user
    const reqBody = req.body;
    try {
        const user = User.createUsers(reqBody.email, reqBody.password, User.Role.Standard);
        const token = jwt.sign(User.createAuthToken(user), config_1.signingSecret);
        console.log(token);
    }
    catch (e) {
        console.log(e);
    }
    res.status(200).send();
});
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqBody = req.body;
    const user = yield User.getUserByEmail(reqBody.email);
    if (user instanceof error_1.InternalError) {
        res.status(400).send({ message: 'No Account Exists With This Email' });
        return;
    }
    // check if password matches
    // if fail then increase max login count
    // else
    console.log(user);
    const token = User.createAuthToken(user);
    res.cookie('auth-token', token);
    res.send();
}));
exports.AuthController = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsicm91dGVzL3YxL2F1dGguY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBb0Q7QUFDcEQsa0RBQW9DO0FBQ3BDLHlDQUE2QztBQUU3Qyw4REFBZ0Q7QUFDaEQsdUNBQTRDO0FBRTVDLE1BQU0sTUFBTSxHQUFHLGdCQUFNLEVBQUUsQ0FBQztBQUV4QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQU8sRUFBRTtJQUN4RCx3Q0FBd0M7SUFDeEMsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztJQUN6QixJQUFJO1FBQ0EsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsc0JBQWEsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEI7SUFBQyxPQUFNLENBQUMsRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEI7SUFFRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDeEQsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztJQUN6QixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELElBQUksSUFBSSxZQUFZLHFCQUFhLEVBQUU7UUFDL0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU87S0FDVjtJQUNELDRCQUE0QjtJQUM1Qix3Q0FBd0M7SUFDeEMsT0FBTztJQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDZixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRVUsUUFBQSxjQUFjLEdBQUcsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgeyBzaWduaW5nU2VjcmV0IH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0ICogYXMgVXNlciBmcm9tICcuLi8uLi9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBJbnRlcm5hbEVycm9yIH0gZnJvbSAnLi4vLi4vZXJyb3InO1xuXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcbiBcbnJvdXRlci5wb3N0KCcvc2lnbnVwJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSk6IGFueSA9PiB7XG4gICAgLy8gUGFyc2UgbmV3IHVzZXIgZGF0YSBhbmQgY3JlYXRlIGEgdXNlclxuICAgIGNvbnN0IHJlcUJvZHkgPSByZXEuYm9keTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VyID0gVXNlci5jcmVhdGVVc2VycyhyZXFCb2R5LmVtYWlsLCByZXFCb2R5LnBhc3N3b3JkLCBVc2VyLlJvbGUuU3RhbmRhcmQpO1xuICAgICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKFVzZXIuY3JlYXRlQXV0aFRva2VuKHVzZXIpLCBzaWduaW5nU2VjcmV0KTtcbiAgICAgICAgY29uc29sZS5sb2codG9rZW4pO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCgpO1xufSk7XG5cbnJvdXRlci5wb3N0KCcvbG9naW4nLCBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgcmVxQm9keSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmdldFVzZXJCeUVtYWlsKHJlcUJvZHkuZW1haWwpO1xuICAgIGlmICh1c2VyIGluc3RhbmNlb2YgSW50ZXJuYWxFcnJvcikge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6ICdObyBBY2NvdW50IEV4aXN0cyBXaXRoIFRoaXMgRW1haWwnIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGNoZWNrIGlmIHBhc3N3b3JkIG1hdGNoZXNcbiAgICAvLyBpZiBmYWlsIHRoZW4gaW5jcmVhc2UgbWF4IGxvZ2luIGNvdW50XG4gICAgLy8gZWxzZVxuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgIGNvbnN0IHRva2VuID0gVXNlci5jcmVhdGVBdXRoVG9rZW4odXNlcik7XG4gICAgcmVzLmNvb2tpZSgnYXV0aC10b2tlbicsIHRva2VuKTtcbiAgICByZXMuc2VuZCgpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udHJvbGxlciA9IHJvdXRlcjsiXX0=