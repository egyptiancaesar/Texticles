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
const error_1 = require("../error");
const client_2 = require("../database/client");
const mongodb_1 = require("mongodb");
function getBookByID(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let col = yield client_1.dbClient.getCollection(client_2.Collections.Books);
            let book = yield col.findOne({ _id: new mongodb_1.ObjectId(id) });
            console.log(book);
            return book;
        }
        catch (e) {
            return new error_1.InternalError(0, "Failed to get book by id", error_1.Severity.Error);
        }
    });
}
exports.getBookByID = getBookByID;
function getBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let col = yield client_1.dbClient.getCollection(client_2.Collections.Books);
            let books = yield col.find().toArray();
            return books;
        }
        catch (e) {
            return new error_1.InternalError(0, "Failed to get books", error_1.Severity.Error);
        }
    });
}
exports.getBooks = getBooks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbIm1vZGVscy9ib29rLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLG9DQUFtRDtBQUNuRCwrQ0FBaUQ7QUFDakQscUNBQW1DO0FBWW5DLFNBQXNCLFdBQVcsQ0FBQyxFQUFVOztRQUMzQyxJQUFJO1lBQ0gsSUFBSSxHQUFHLEdBQUcsTUFBTSxpQkFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFELElBQUksSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLGtCQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXhELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFbEIsT0FBTyxJQUFZLENBQUM7U0FDcEI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNYLE9BQU8sSUFBSSxxQkFBYSxDQUFDLENBQUMsRUFBRSwwQkFBMEIsRUFBRSxnQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hFO0lBQ0YsQ0FBQztDQUFBO0FBWEQsa0NBV0M7QUFDRCxTQUFzQixRQUFROztRQUM3QixJQUFHO1lBQ0YsSUFBSSxHQUFHLEdBQUcsTUFBTSxpQkFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFELElBQUksS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBR3ZDLE9BQU8sS0FBZSxDQUFDO1NBQ3ZCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDWCxPQUFPLElBQUkscUJBQWEsQ0FBQyxDQUFDLEVBQUUscUJBQXFCLEVBQUUsZ0JBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuRTtJQUNGLENBQUM7Q0FBQTtBQVZELDRCQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGJDbGllbnQgfSBmcm9tICcuLi9kYXRhYmFzZS9jbGllbnQnO1xuaW1wb3J0IHsgSW50ZXJuYWxFcnJvciwgU2V2ZXJpdHkgfSBmcm9tICcuLi9lcnJvcic7XG5pbXBvcnQgeyBDb2xsZWN0aW9ucyB9IGZyb20gJy4uL2RhdGFiYXNlL2NsaWVudCc7XG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xuXG5cbi8vQHNoYXJlZFxuZXhwb3J0IGludGVyZmFjZSBCb29rIHtcblx0cmVhZG9ubHkgaXNibjogc3RyaW5nO1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGF1dGhvcnM6IHN0cmluZ1tdO1xuXHRyZWFkb25seSBlZGl0aW9uOiBudW1iZXI7XG5cdHJlYWRvbmx5IHB1Ymxpc2hlZDogbnVtYmVyO1xufVxuXHRcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCb29rQnlJRChpZDogc3RyaW5nKTogUHJvbWlzZTxCb29rIHwgSW50ZXJuYWxFcnJvcj57XHRcblx0dHJ5IHtcblx0XHRsZXQgY29sID0gYXdhaXQgZGJDbGllbnQuZ2V0Q29sbGVjdGlvbihDb2xsZWN0aW9ucy5Cb29rcyk7XG5cdFx0bGV0IGJvb2sgPSBhd2FpdCBjb2wuZmluZE9uZSh7IF9pZDogbmV3IE9iamVjdElkKGlkKSB9KTtcblxuXHRcdGNvbnNvbGUubG9nKGJvb2spO1xuXG5cdFx0cmV0dXJuIGJvb2sgYXMgQm9vaztcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBuZXcgSW50ZXJuYWxFcnJvcigwLCBcIkZhaWxlZCB0byBnZXQgYm9vayBieSBpZFwiLCBTZXZlcml0eS5FcnJvcik7XG5cdH1cbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCb29rcygpOiBQcm9taXNlPEJvb2tbXSB8IEludGVybmFsRXJyb3I+IHtcblx0dHJ5e1xuXHRcdGxldCBjb2wgPSBhd2FpdCBkYkNsaWVudC5nZXRDb2xsZWN0aW9uKENvbGxlY3Rpb25zLkJvb2tzKTtcblx0XHRsZXQgYm9va3MgPSBhd2FpdCBjb2wuZmluZCgpLnRvQXJyYXkoKTtcblxuXG5cdFx0cmV0dXJuIGJvb2tzIGFzIEJvb2tbXTtcdFxuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIG5ldyBJbnRlcm5hbEVycm9yKDAsIFwiRmFpbGVkIHRvIGdldCBib29rc1wiLCBTZXZlcml0eS5FcnJvcik7XG5cdH1cbn1cbiJdfQ==