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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Not the best idea to user require but refuses to work with import
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express_1 = __importDefault(require("express"));
const v1_1 = require("./routes/v1");
const jwt_mw_1 = require("./middlewares/jwt.mw");
const error_mw_1 = require("./middlewares/error.mw");
const config_1 = require("./config");
const client_1 = require("./database/client");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    yield client_1.dbClient.setup();
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(jwt_mw_1.jwtMiddleware);
    // Add sub-routers
    app.use('/v1', v1_1.v1Controller);
    // Add middlewares, error handler must be last to be 'used'
    app.use(error_mw_1.errorHandler);
    // Server the static client components
    app.use(express_1.default.static('dist/client'));
    // Listen and serve the applications
    console.log('Serving at: ' + config_1.SysConfig.serverHost + ':' + config_1.SysConfig.serverPort);
    app.listen(config_1.SysConfig.serverPort, config_1.SysConfig.serverHost);
}))();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQW9FO0FBQ3BFLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQTtBQUM3QyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7QUFFekMsc0RBQThCO0FBRTlCLG9DQUEyQztBQUUzQyxpREFBcUQ7QUFDckQscURBQXNEO0FBRXRELHFDQUFxQztBQUNyQyw4Q0FBNkM7QUFFN0MsQ0FBQyxHQUFTLEVBQUU7SUFDUixNQUFNLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7SUFDdEIsTUFBTSxpQkFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQWEsQ0FBQyxDQUFDO0lBRXZCLGtCQUFrQjtJQUNsQixHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxpQkFBWSxDQUFDLENBQUM7SUFFN0IsMkRBQTJEO0lBQzNELEdBQUcsQ0FBQyxHQUFHLENBQUMsdUJBQVksQ0FBQyxDQUFDO0lBRXRCLHNDQUFzQztJQUN0QyxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFFdkMsb0NBQW9DO0lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLGtCQUFTLENBQUMsVUFBVSxHQUFDLEdBQUcsR0FBQyxrQkFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQVMsQ0FBQyxVQUFVLEVBQUUsa0JBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMzRCxDQUFDLENBQUEsQ0FBQyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOb3QgdGhlIGJlc3QgaWRlYSB0byB1c2VyIHJlcXVpcmUgYnV0IHJlZnVzZXMgdG8gd29yayB3aXRoIGltcG9ydFxuY29uc3QgY29va2llUGFyc2VyID0gcmVxdWlyZSgnY29va2llLXBhcnNlcicpXG5jb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKVxuXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuaW1wb3J0IHsgdjFDb250cm9sbGVyIH0gZnJvbSAnLi9yb3V0ZXMvdjEnO1xuXG5pbXBvcnQgeyBqd3RNaWRkbGV3YXJlIH0gZnJvbSAnLi9taWRkbGV3YXJlcy9qd3QubXcnO1xuaW1wb3J0IHsgZXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9taWRkbGV3YXJlcy9lcnJvci5tdyc7XG5cbmltcG9ydCB7IFN5c0NvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IGRiQ2xpZW50IH0gZnJvbSAnLi9kYXRhYmFzZS9jbGllbnQnO1xuXG4oYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbiAgICBhd2FpdCBkYkNsaWVudC5zZXR1cCgpO1xuXG4gICAgYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG4gICAgYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gICAgYXBwLnVzZShqd3RNaWRkbGV3YXJlKTtcblxuICAgIC8vIEFkZCBzdWItcm91dGVyc1xuICAgIGFwcC51c2UoJy92MScsIHYxQ29udHJvbGxlcik7XG5cbiAgICAvLyBBZGQgbWlkZGxld2FyZXMsIGVycm9yIGhhbmRsZXIgbXVzdCBiZSBsYXN0IHRvIGJlICd1c2VkJ1xuICAgIGFwcC51c2UoZXJyb3JIYW5kbGVyKTtcblxuICAgIC8vIFNlcnZlciB0aGUgc3RhdGljIGNsaWVudCBjb21wb25lbnRzXG4gICAgYXBwLnVzZShleHByZXNzLnN0YXRpYygnZGlzdC9jbGllbnQnKSk7XG5cbiAgICAvLyBMaXN0ZW4gYW5kIHNlcnZlIHRoZSBhcHBsaWNhdGlvbnNcbiAgICBjb25zb2xlLmxvZygnU2VydmluZyBhdDogJytTeXNDb25maWcuc2VydmVySG9zdCsnOicrU3lzQ29uZmlnLnNlcnZlclBvcnQpO1xuICAgIGFwcC5saXN0ZW4oU3lzQ29uZmlnLnNlcnZlclBvcnQsIFN5c0NvbmZpZy5zZXJ2ZXJIb3N0KTtcbn0pKCk7XG4iXX0=