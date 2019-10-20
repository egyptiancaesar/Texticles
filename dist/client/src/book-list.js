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
function renderBook(bookData) {
    const div = document.createElement('div');
    let str = `<p> Title: ${bookData.name} </p>`;
    str += `<p> ISBN: ${bookData.isbn}</p>`;
    div.innerHTML = str;
    return div;
}
function test_function() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield apiGetRequest('v1/books');
        console.log(res);
        const element = document.getElementById("content");
        if (element != null) {
            element.appendChild(renderBook(JSON.parse(res)[0]));
        }
    });
}
window.onload = test_function;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay1saXN0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiY2xpZW50L3NyYy9ib29rLWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLFNBQVMsVUFBVSxDQUFDLFFBQWM7SUFDakMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxJQUFJLEdBQUcsR0FBRyxjQUFjLFFBQVEsQ0FBQyxJQUFJLE9BQU8sQ0FBQztJQUM3QyxHQUFHLElBQUksYUFBYSxRQUFRLENBQUMsSUFBSSxNQUFNLENBQUM7SUFFeEMsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFFcEIsT0FBTyxHQUFHLENBQUM7QUFDWixDQUFDO0FBRUQsU0FBZSxhQUFhOztRQUMzQixNQUFNLEdBQUcsR0FBRyxNQUFNLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkQsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFDO1lBQ25CLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFTLENBQUMsQ0FBQyxDQUFDO1NBQzVEO0lBQ0YsQ0FBQztDQUFBO0FBRUQsTUFBTSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIHJlbmRlckJvb2soYm9va0RhdGE6IEJvb2spOiBIVE1MRWxlbWVudCB7XG5cdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRsZXQgc3RyID0gYDxwPiBUaXRsZTogJHtib29rRGF0YS5uYW1lfSA8L3A+YDtcblx0c3RyICs9IGA8cD4gSVNCTjogJHtib29rRGF0YS5pc2JufTwvcD5gO1xuXG5cdGRpdi5pbm5lckhUTUwgPSBzdHI7XG5cblx0cmV0dXJuIGRpdjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdGVzdF9mdW5jdGlvbigpe1xuXHRjb25zdCByZXMgPSBhd2FpdCBhcGlHZXRSZXF1ZXN0KCd2MS9ib29rcycpO1xuXHRjb25zb2xlLmxvZyhyZXMpO1xuXG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cdGlmIChlbGVtZW50ICE9IG51bGwpe1xuXHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQocmVuZGVyQm9vayhKU09OLnBhcnNlKHJlcylbMF0gYXMgQm9vaykpO1xuXHR9XG59XG5cbndpbmRvdy5vbmxvYWQgPSB0ZXN0X2Z1bmN0aW9uO1xuIl19