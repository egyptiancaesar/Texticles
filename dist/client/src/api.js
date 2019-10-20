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
const host = 'localhost:8090/';
function apiRequest(method, endpoint) {
    return new Promise((resolve, reject) => {
        if (!["GET", "POST", "PUT", "DELETE"].includes(method)) {
            reject(new Error(method + " is not a valid http method"));
        }
        const req = new XMLHttpRequest();
        const url = "http://" + host + endpoint;
        req.open(method, url);
        req.onload = () => {
            resolve(req.responseText);
        };
        req.onerror = () => {
            reject(new Error("HTTP get request failed: " + url));
        };
        req.send();
    });
}
function apiGetRequest(endpoint) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield apiRequest("GET", endpoint);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiY2xpZW50L3NyYy9hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE1BQU0sSUFBSSxHQUFHLGlCQUFpQixDQUFDO0FBRS9CLFNBQVMsVUFBVSxDQUFDLE1BQWMsRUFBRSxRQUFnQjtJQUNuRCxPQUFPLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQzlDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQztZQUN0RCxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLDZCQUE2QixDQUFDLENBQUMsQ0FBQztTQUMxRDtRQUNELE1BQU0sR0FBRyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDakMsTUFBTSxHQUFHLEdBQUcsU0FBUyxHQUFDLElBQUksR0FBQyxRQUFRLENBQUM7UUFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUM7UUFDRixHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNsQixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsMkJBQTJCLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUM7UUFDRixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDWixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFlLGFBQWEsQ0FBQyxRQUFnQjs7UUFDNUMsT0FBTyxNQUFNLFVBQVUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaG9zdCA9ICdsb2NhbGhvc3Q6ODA5MC8nO1xuXG5mdW5jdGlvbiBhcGlSZXF1ZXN0KG1ldGhvZDogc3RyaW5nLCBlbmRwb2ludDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGlmICghW1wiR0VUXCIsIFwiUE9TVFwiLCBcIlBVVFwiLCBcIkRFTEVURVwiXS5pbmNsdWRlcyhtZXRob2QpKXtcblx0XHRcdHJlamVjdChuZXcgRXJyb3IobWV0aG9kICsgXCIgaXMgbm90IGEgdmFsaWQgaHR0cCBtZXRob2RcIikpO1xuXHRcdH1cblx0XHRjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHRjb25zdCB1cmwgPSBcImh0dHA6Ly9cIitob3N0K2VuZHBvaW50O1xuXHRcdHJlcS5vcGVuKG1ldGhvZCwgdXJsKTtcblx0XHRyZXEub25sb2FkID0gKCkgPT57XG5cdFx0XHRyZXNvbHZlKHJlcS5yZXNwb25zZVRleHQpO1xuXHRcdH07XG5cdFx0cmVxLm9uZXJyb3IgPSAoKSA9PiB7XG5cdFx0XHRyZWplY3QobmV3IEVycm9yKFwiSFRUUCBnZXQgcmVxdWVzdCBmYWlsZWQ6IFwiICsgdXJsKSk7XG5cdFx0fTtcblx0XHRyZXEuc2VuZCgpO1xuXHR9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gYXBpR2V0UmVxdWVzdChlbmRwb2ludDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0cmV0dXJuIGF3YWl0IGFwaVJlcXVlc3QoXCJHRVRcIiwgZW5kcG9pbnQpO1x0XG59XG4iXX0=