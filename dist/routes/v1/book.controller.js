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
const express_1 = require("express");
const book_model_1 = require("../../models/book.model");
const router = express_1.Router();
router.get('/:bookID', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let book = yield book_model_1.getBookByID(req.params["bookID"]);
    if (book == null) {
        res.status(404);
        res.send('Not Found');
    }
    else {
        res.send(book);
    }
    next();
}));
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params, res.status, next.name);
    let books = yield book_model_1.getBooks();
    res.send(books);
    next();
}));
exports.BooksController = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsicm91dGVzL3YxL2Jvb2suY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQUFtRDtBQUVuRCx3REFBZ0U7QUFFaEUsTUFBTSxNQUFNLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO0FBRXhCLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFnQixFQUFFO0lBRTlGLElBQUksSUFBSSxHQUFHLE1BQU0sd0JBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbkQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFDO1FBQ2hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUN0QjtTQUFNO1FBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmO0lBRUQsSUFBSSxFQUFFLENBQUM7QUFDUixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQWdCLEVBQUU7SUFDdkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRS9DLElBQUksS0FBSyxHQUFHLE1BQU0scUJBQVEsRUFBRSxDQUFDO0lBQzdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFaEIsSUFBSSxFQUFFLENBQUM7QUFDUixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRVUsUUFBQSxlQUFlLEdBQUcsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIFJvdXRlcn0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBOZXh0RnVuY3Rpb24gfSBmcm9tICdjb25uZWN0JztcbmltcG9ydCB7IGdldEJvb2tCeUlELCBnZXRCb29rcyB9IGZyb20gJy4uLy4uL21vZGVscy9ib29rLm1vZGVsJztcblxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJy86Ym9va0lEJywgYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+ID0+IHtcblxuXHRsZXQgYm9vayA9IGF3YWl0IGdldEJvb2tCeUlEKHJlcS5wYXJhbXNbXCJib29rSURcIl0pO1xuXHRpZiAoYm9vayA9PSBudWxsKXtcblx0XHRyZXMuc3RhdHVzKDQwNCk7XG5cdFx0cmVzLnNlbmQoJ05vdCBGb3VuZCcpO1xuXHR9IGVsc2Uge1xuXHRcdHJlcy5zZW5kKGJvb2spO1xuXHR9XG5cblx0bmV4dCgpO1xufSk7XG5cbnJvdXRlci5nZXQoJy8nLCBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pOiBQcm9taXNlPGFueT4gPT4ge1xuXHRjb25zb2xlLmxvZyhyZXEucGFyYW1zLCByZXMuc3RhdHVzLCBuZXh0Lm5hbWUpO1x0XG5cblx0bGV0IGJvb2tzID0gYXdhaXQgZ2V0Qm9va3MoKTtcblx0cmVzLnNlbmQoYm9va3MpO1xuXG5cdG5leHQoKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgQm9va3NDb250cm9sbGVyID0gcm91dGVyO1xuIl19