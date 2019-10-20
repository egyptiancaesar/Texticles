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
const mongodb_1 = require("mongodb");
const config_1 = require("../config");
function makeBook(isbn, name, authors, edition, published) {
    return {
        isbn: isbn,
        name: name,
        authors: authors,
        edition: edition,
        published: published
    };
}
let books = [
    makeBook("978-0-470-67107-8", "A Guide to Old English", ["Bruce Mitchell", "Fred C. Robinson"], 8, 2012)
];
(function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const options = { useNewUrlParser: true, useUnifiedTopology: true };
        var mongoclient = new mongodb_1.MongoClient(config_1.SysConfig.mongoURL, options);
        try {
            yield mongoclient.connect();
        }
        catch (_a) {
            console.log("Ugh oh, coulnd't connect to the database, is it running?");
            process.exit(1);
        }
        var db = mongoclient.db(config_1.SysConfig.dbName);
        db.createCollection("books", (err) => {
            if (err) {
                console.log("Failed tp create the books collection");
                console.log(err);
            }
        });
        for (let b of books) {
            var cur = yield db.collection("books").find({ isbn: b.isbn });
            let n = yield cur.next();
            if (n == null) {
                db.collection("books").insertOne(b);
            }
            else {
                console.log(JSON.stringify(b) + "Already in the database! Yay");
            }
        }
        mongoclient.close();
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2LXNldHVwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsic2NyaXB0cy9kZXYtc2V0dXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBcUM7QUFDckMsc0NBQXNDO0FBRXRDLFNBQVMsUUFBUSxDQUFDLElBQVksRUFBRSxJQUFZLEVBQUUsT0FBaUIsRUFBRSxPQUFlLEVBQUUsU0FBaUI7SUFDbEcsT0FBTztRQUNOLElBQUksRUFBRSxJQUFJO1FBQ1YsSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsT0FBTztRQUNoQixPQUFPLEVBQUUsT0FBTztRQUNoQixTQUFTLEVBQUUsU0FBUztLQUNwQixDQUFDO0FBQ0gsQ0FBQztBQUVELElBQUksS0FBSyxHQUFHO0lBQ1gsUUFBUSxDQUFDLG1CQUFtQixFQUFFLHdCQUF3QixFQUFFLENBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDO0NBQ3hHLENBQUM7QUFFRixDQUFDLFNBQWUsSUFBSTs7UUFDbkIsTUFBTSxPQUFPLEdBQUcsRUFBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBQyxDQUFDO1FBQ2xFLElBQUksV0FBVyxHQUFHLElBQUkscUJBQVcsQ0FBQyxrQkFBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMvRCxJQUFHO1lBQ0YsTUFBTSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDNUI7UUFBQSxXQUFLO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1lBQ3hFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEI7UUFDRCxJQUFJLEVBQUUsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDLGtCQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQVUsRUFBRSxFQUFFO1lBQzNDLElBQUcsR0FBRyxFQUFDO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztnQkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNqQjtRQUNGLENBQUMsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUM7WUFDbkIsSUFBSSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6QixJQUFHLENBQUMsSUFBSSxJQUFJLEVBQUM7Z0JBQ1osRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEM7aUJBQUk7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLDhCQUE4QixDQUFDLENBQUM7YUFDaEU7U0FDRDtRQUVELFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDO0NBQUEsQ0FBQyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudH0gZnJvbSAnbW9uZ29kYic7XG5pbXBvcnQgeyBTeXNDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuXG5mdW5jdGlvbiBtYWtlQm9vayhpc2JuOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgYXV0aG9yczogc3RyaW5nW10sIGVkaXRpb246IG51bWJlciwgcHVibGlzaGVkOiBudW1iZXIpOiBhbnl7XG5cdHJldHVybiB7XG5cdFx0aXNibjogaXNibixcblx0XHRuYW1lOiBuYW1lLFxuXHRcdGF1dGhvcnM6IGF1dGhvcnMsXG5cdFx0ZWRpdGlvbjogZWRpdGlvbixcblx0XHRwdWJsaXNoZWQ6IHB1Ymxpc2hlZFxuXHR9O1xufVxuXG5sZXQgYm9va3MgPSBbXG5cdG1ha2VCb29rKFwiOTc4LTAtNDcwLTY3MTA3LThcIiwgXCJBIEd1aWRlIHRvIE9sZCBFbmdsaXNoXCIsIFtcIkJydWNlIE1pdGNoZWxsXCIsIFwiRnJlZCBDLiBSb2JpbnNvblwiXSwgOCwgMjAxMilcbl07XG5cbihhc3luYyBmdW5jdGlvbiB0ZXN0KCl7XG5cdGNvbnN0IG9wdGlvbnMgPSB7dXNlTmV3VXJsUGFyc2VyOiB0cnVlLCB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWV9O1xuXHR2YXIgbW9uZ29jbGllbnQgPSBuZXcgTW9uZ29DbGllbnQoU3lzQ29uZmlnLm1vbmdvVVJMLCBvcHRpb25zKTtcblx0dHJ5e1xuXHRcdGF3YWl0IG1vbmdvY2xpZW50LmNvbm5lY3QoKTtcblx0fWNhdGNoe1xuXHRcdGNvbnNvbGUubG9nKFwiVWdoIG9oLCBjb3VsbmQndCBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZSwgaXMgaXQgcnVubmluZz9cIik7XG5cdFx0cHJvY2Vzcy5leGl0KDEpO1xuXHR9XG5cdHZhciBkYiA9IG1vbmdvY2xpZW50LmRiKFN5c0NvbmZpZy5kYk5hbWUpO1xuXG5cdGRiLmNyZWF0ZUNvbGxlY3Rpb24oXCJib29rc1wiLCAoZXJyOiBFcnJvcikgPT57XG5cdFx0aWYoZXJyKXtcblx0XHRcdGNvbnNvbGUubG9nKFwiRmFpbGVkIHRwIGNyZWF0ZSB0aGUgYm9va3MgY29sbGVjdGlvblwiKTtcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0fVxuXHR9KTtcblx0Zm9yIChsZXQgYiBvZiBib29rcyl7XG5cdFx0dmFyIGN1ciA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJib29rc1wiKS5maW5kKHtpc2JuOiBiLmlzYm59KTtcblx0XHRsZXQgbiA9IGF3YWl0IGN1ci5uZXh0KCk7XG5cdFx0aWYobiA9PSBudWxsKXtcblx0XHRcdGRiLmNvbGxlY3Rpb24oXCJib29rc1wiKS5pbnNlcnRPbmUoYik7XG5cdFx0fWVsc2V7XG5cdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShiKSArIFwiQWxyZWFkeSBpbiB0aGUgZGF0YWJhc2UhIFlheVwiKTtcblx0XHR9XG5cdH1cblxuXHRtb25nb2NsaWVudC5jbG9zZSgpO1xufSkoKTtcblxuXG4iXX0=