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
const error_1 = require("../error");
var Collections;
(function (Collections) {
    Collections["Users"] = "users";
    Collections["Books"] = "books";
})(Collections = exports.Collections || (exports.Collections = {}));
class DatabaseClient {
    constructor() {
        this.db = null;
        const options = { useNewUrlParser: true, useUnifiedTopology: true };
        this.client = new mongodb_1.MongoClient(config_1.SysConfig.mongoURL, options);
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.db && this.db.databaseName === 'test') {
                yield this.db.dropDatabase();
            }
            yield this.client.close();
        });
    }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.client.connect();
                this.db = this.client.db(config_1.SysConfig.dbName);
                yield this.createCollections();
            }
            catch (e) {
                return new error_1.InternalError(error_1.ErrCodes.DBConnectionErr, e.message, error_1.Severity.Fatal);
            }
            return null;
        });
    }
    createCollections() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.db) {
                // Users collection
                const users = yield this.db.createCollection(Collections.Users);
                users.createIndex({ "email": 1 }, { unique: true });
                users.createIndex({ "id": 1 }, { unique: true });
                // Books collection
                const books = yield this.db.createCollection(Collections.Books);
                books.createIndex({ "isbn": 1 }, { unique: true });
                books.createIndex({ "id": 1 }, { unique: true });
                // Create other collections make sure to add to Collections enum
            }
        });
    }
    /**
     * Fetches a collection from the database based in the name
     * that is passed in the name arg
     * @param name - The name of the collection to fetch
     */
    getCollection(name) {
        if (this.db) {
            return this.db.collection(name.toString());
        }
        // Process will exit here but TS does not like not
        // having a return statement so we throw an error
        process.exit(1);
        throw new Error('There is no Database Connected');
    }
}
exports.dbClient = new DatabaseClient();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZGF0YWJhc2UvY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBQXNEO0FBQ3RELHNDQUFzQztBQUN0QyxvQ0FBNkQ7QUFFN0QsSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ3RCLDhCQUFlLENBQUE7SUFDZiw4QkFBZSxDQUFBO0FBQ2hCLENBQUMsRUFIVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUd0QjtBQUVELE1BQU0sY0FBYztJQUloQjtRQUZRLE9BQUUsR0FBYyxJQUFJLENBQUM7UUFHekIsTUFBTSxPQUFPLEdBQUcsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxxQkFBVyxDQUFDLGtCQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFWSxLQUFLOztZQUNkLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksS0FBSyxNQUFNLEVBQUU7Z0JBQzVDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNoQztZQUVELE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixDQUFDO0tBQUE7SUFFWSxLQUFLOztZQUNkLElBQUk7Z0JBQ0EsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGtCQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDbEM7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixPQUFPLElBQUkscUJBQWEsQ0FBQyxnQkFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLGdCQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakY7WUFFRCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO0tBQUE7SUFFSyxpQkFBaUI7O1lBQ25CLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDVCxtQkFBbUI7Z0JBQ25CLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hFLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDcEQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUV4RCxtQkFBbUI7Z0JBQ25CLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hFLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDbkQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO2dCQUNoRCxnRUFBZ0U7YUFDbkU7UUFDRSxDQUFDO0tBQUE7SUFFRDs7OztPQUlHO0lBQ0ksYUFBYSxDQUFDLElBQWlCO1FBQ2xDLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNULE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDOUM7UUFFRCxrREFBa0Q7UUFDbEQsaURBQWlEO1FBQ2pELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FFSjtBQUVZLFFBQUEsUUFBUSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCwgRGIsIENvbGxlY3Rpb24gfSBmcm9tICdtb25nb2RiJztcbmltcG9ydCB7IFN5c0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBJbnRlcm5hbEVycm9yLCBFcnJDb2RlcywgU2V2ZXJpdHkgfSBmcm9tICcuLi9lcnJvcic7XG5cbmV4cG9ydCBlbnVtIENvbGxlY3Rpb25zIHtcblx0VXNlcnMgPSAndXNlcnMnLFxuXHRCb29rcyA9ICdib29rcycsXG59XG5cbmNsYXNzIERhdGFiYXNlQ2xpZW50IHtcbiAgICBwcml2YXRlIGNsaWVudDogTW9uZ29DbGllbnQ7XG4gICAgcHJpdmF0ZSBkYjogRGIgfCBudWxsID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0geyB1c2VOZXdVcmxQYXJzZXI6IHRydWUsIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSB9O1xuICAgICAgICB0aGlzLmNsaWVudCA9IG5ldyBNb25nb0NsaWVudChTeXNDb25maWcubW9uZ29VUkwsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGIgJiYgdGhpcy5kYi5kYXRhYmFzZU5hbWUgPT09ICd0ZXN0Jykge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5kYi5kcm9wRGF0YWJhc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRoaXMuY2xpZW50LmNsb3NlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHNldHVwKCk6IFByb21pc2U8SW50ZXJuYWxFcnJvcnxudWxsPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNsaWVudC5jb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLmRiID0gdGhpcy5jbGllbnQuZGIoU3lzQ29uZmlnLmRiTmFtZSk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZUNvbGxlY3Rpb25zKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW50ZXJuYWxFcnJvcihFcnJDb2Rlcy5EQkNvbm5lY3Rpb25FcnIsIGUubWVzc2FnZSwgU2V2ZXJpdHkuRmF0YWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlQ29sbGVjdGlvbnMoKSB7XG4gICAgICAgIGlmICh0aGlzLmRiKSB7XG4gICAgICAgICAgICAvLyBVc2VycyBjb2xsZWN0aW9uXG4gICAgICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IHRoaXMuZGIuY3JlYXRlQ29sbGVjdGlvbihDb2xsZWN0aW9ucy5Vc2Vycyk7XG4gICAgICAgICAgICB1c2Vycy5jcmVhdGVJbmRleCh7IFwiZW1haWxcIjogMSB9LCB7IHVuaXF1ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHVzZXJzLmNyZWF0ZUluZGV4KHsgXCJpZFwiOiAxIH0sIHsgdW5pcXVlOiB0cnVlIH0pO1xuXHQgICAgXG5cdCAgICAvLyBCb29rcyBjb2xsZWN0aW9uXG5cdCAgICBjb25zdCBib29rcyA9IGF3YWl0IHRoaXMuZGIuY3JlYXRlQ29sbGVjdGlvbihDb2xsZWN0aW9ucy5Cb29rcyk7XG5cdCAgICBib29rcy5jcmVhdGVJbmRleCh7IFwiaXNiblwiOiAxIH0sIHsgdW5pcXVlOiB0cnVlIH0pO1xuXHQgICAgYm9va3MuY3JlYXRlSW5kZXgoeyBcImlkXCI6IDEgfSwgeyB1bmlxdWU6IHRydWV9KTsgICBcblx0ICAgIC8vIENyZWF0ZSBvdGhlciBjb2xsZWN0aW9ucyBtYWtlIHN1cmUgdG8gYWRkIHRvIENvbGxlY3Rpb25zIGVudW1cblx0fVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoZXMgYSBjb2xsZWN0aW9uIGZyb20gdGhlIGRhdGFiYXNlIGJhc2VkIGluIHRoZSBuYW1lXG4gICAgICogdGhhdCBpcyBwYXNzZWQgaW4gdGhlIG5hbWUgYXJnXG4gICAgICogQHBhcmFtIG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgY29sbGVjdGlvbiB0byBmZXRjaFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDb2xsZWN0aW9uKG5hbWU6IENvbGxlY3Rpb25zKTogQ29sbGVjdGlvbiB7XG4gICAgICAgIGlmICh0aGlzLmRiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYi5jb2xsZWN0aW9uKG5hbWUudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcm9jZXNzIHdpbGwgZXhpdCBoZXJlIGJ1dCBUUyBkb2VzIG5vdCBsaWtlIG5vdFxuICAgICAgICAvLyBoYXZpbmcgYSByZXR1cm4gc3RhdGVtZW50IHNvIHdlIHRocm93IGFuIGVycm9yXG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBpcyBubyBEYXRhYmFzZSBDb25uZWN0ZWQnKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IGRiQ2xpZW50ID0gbmV3IERhdGFiYXNlQ2xpZW50KCk7XG4iXX0=