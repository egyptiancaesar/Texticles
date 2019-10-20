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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../database/client");
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client_1.dbClient.setup();
    process.env.MODE = 'test';
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJ0ZXN0LXNldHVwL3NldHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBRTlDLGtCQUFlLEdBQVMsRUFBRTtJQUN0QixNQUFNLGlCQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBQzlCLENBQUMsQ0FBQSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGJDbGllbnQgfSBmcm9tICcuLi9kYXRhYmFzZS9jbGllbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZGJDbGllbnQuc2V0dXAoKTtcbiAgICBwcm9jZXNzLmVudi5NT0RFID0gJ3Rlc3QnO1xufVxuIl19