"use strict";
// import * as User from './user.model';
// import { dbClient } from '../database/client';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// beforeAll(async (done) => {
//     await dbClient.setup();
//     done();
// });
// afterAll(async (done) => {
//     await dbClient.close();
//     done();
// });
it('Test User Creation', () => {
});
it('Test Get User By Email', () => __awaiter(void 0, void 0, void 0, function* () {
    // const user = await User.getUserByEmail('curt_white@hotmail.ca');
    // console.log(user);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC50ZXN0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsibW9kZWxzL3VzZXIubW9kZWwudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsd0NBQXdDO0FBQ3hDLGlEQUFpRDs7Ozs7Ozs7OztBQUVqRCw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLGNBQWM7QUFDZCxNQUFNO0FBRU4sNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5QixjQUFjO0FBQ2QsTUFBTTtBQUVOLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUU7QUFFOUIsQ0FBQyxDQUFDLENBQUM7QUFFSCxFQUFFLENBQUMsd0JBQXdCLEVBQUUsR0FBUyxFQUFFO0lBQ3BDLG1FQUFtRTtJQUNuRSxxQkFBcUI7QUFDekIsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAqIGFzIFVzZXIgZnJvbSAnLi91c2VyLm1vZGVsJztcbi8vIGltcG9ydCB7IGRiQ2xpZW50IH0gZnJvbSAnLi4vZGF0YWJhc2UvY2xpZW50JztcblxuLy8gYmVmb3JlQWxsKGFzeW5jIChkb25lKSA9PiB7XG4vLyAgICAgYXdhaXQgZGJDbGllbnQuc2V0dXAoKTtcbi8vICAgICBkb25lKCk7XG4vLyB9KTtcblxuLy8gYWZ0ZXJBbGwoYXN5bmMgKGRvbmUpID0+IHtcbi8vICAgICBhd2FpdCBkYkNsaWVudC5jbG9zZSgpO1xuLy8gICAgIGRvbmUoKTtcbi8vIH0pO1xuXG5pdCgnVGVzdCBVc2VyIENyZWF0aW9uJywgKCkgPT4ge1xuXG59KTtcblxuaXQoJ1Rlc3QgR2V0IFVzZXIgQnkgRW1haWwnLCBhc3luYyAoKSA9PiB7XG4gICAgLy8gY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZ2V0VXNlckJ5RW1haWwoJ2N1cnRfd2hpdGVAaG90bWFpbC5jYScpO1xuICAgIC8vIGNvbnNvbGUubG9nKHVzZXIpO1xufSk7Il19