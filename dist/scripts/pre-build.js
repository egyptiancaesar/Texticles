"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
function getTypescriptFiles(root) {
    let files = new Array();
    let items;
    try {
        items = fs.readdirSync(root);
    }
    catch (e) {
        return files;
    }
    for (let item of items) {
        if (item.endsWith(".ts")) {
            files.push(root + "/" + item);
        }
        else {
            const subs = getTypescriptFiles(root + "/" + item);
            for (let sub of subs) {
                files.push(sub);
            }
        }
    }
    return files;
}
function sweep(file) {
    let ret = new Array();
    let f = fs.readFileSync(file).toString();
    let col = '';
    let found = false;
    for (let line of f.split(/\r?\n/)) {
        if (found) {
            line = line.replace("export ", "");
            col += line + "\n";
            if (line == '}') {
                found = false;
                ret.push(col);
                col = '';
            }
        }
        else {
            if (line == '//@shared') {
                found = true;
            }
        }
    }
    return ret;
}
function go() {
    if (process.argv.length != 3) {
        console.log("Please specify a directory to operate on");
        return;
    }
    const outpath = "./src/client/src/definitions.ts";
    const files = getTypescriptFiles(process.argv[2]);
    let outputData = '//ATTENTION! This is auto generated code, it gets overwritten when the project is built!\n';
    outputData += '//If you wish to change anything here you will need to find the relevant defintion in the server code!\n';
    for (let f of files) {
        let gets = sweep(f);
        if (gets.length > 0) {
            for (let get of gets) {
                outputData += get + '\n';
            }
        }
    }
    fs.writeFileSync(outpath, outputData);
}
go();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlLWJ1aWxkLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsic2NyaXB0cy9wcmUtYnVpbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUNBQXlCO0FBRXpCLFNBQVMsa0JBQWtCLENBQUMsSUFBWTtJQUN2QyxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO0lBQ2hDLElBQUksS0FBZSxDQUFDO0lBQ3BCLElBQUk7UUFDSCxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUM1QjtJQUFBLE9BQU8sQ0FBQyxFQUFDO1FBQ1QsT0FBTyxLQUFLLENBQUM7S0FDYjtJQUNELEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFO1FBQ3ZCLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBQztZQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7YUFBSTtZQUNKLE1BQU0sSUFBSSxHQUFHLGtCQUFrQixDQUFDLElBQUksR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0MsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUM7Z0JBQ3BCLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDaEI7U0FDRDtLQUNEO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZCxDQUFDO0FBRUQsU0FBUyxLQUFLLENBQUMsSUFBWTtJQUMxQixJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO0lBRTlCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFekMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBRWIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ2xCLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBQztRQUNqQyxJQUFJLEtBQUssRUFBQztZQUNULElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNuQyxHQUFHLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQztZQUNqQixJQUFJLElBQUksSUFBSSxHQUFHLEVBQUM7Z0JBQ2YsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDZCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLEdBQUcsR0FBRyxFQUFFLENBQUM7YUFDVDtTQUNEO2FBQUk7WUFDSixJQUFHLElBQUksSUFBSSxXQUFXLEVBQUM7Z0JBQ3RCLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDYjtTQUNEO0tBQ0Q7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNaLENBQUM7QUFFRCxTQUFTLEVBQUU7SUFDVixJQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7UUFDeEQsT0FBTztLQUNQO0lBQ0QsTUFBTSxPQUFPLEdBQUcsaUNBQWlDLENBQUE7SUFDakQsTUFBTSxLQUFLLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWxELElBQUksVUFBVSxHQUFHLDRGQUE0RixDQUFDO0lBQzlHLFVBQVUsSUFBSSwwR0FBMEcsQ0FBQztJQUV6SCxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBQztRQUNuQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQztZQUNsQixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksRUFBQztnQkFDcEIsVUFBVSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUM7YUFDekI7U0FDRDtLQUNEO0lBQ0QsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUNELEVBQUUsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuXG5mdW5jdGlvbiBnZXRUeXBlc2NyaXB0RmlsZXMocm9vdDogc3RyaW5nKTogc3RyaW5nW10ge1xuXHRsZXQgZmlsZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuXHRsZXQgaXRlbXM6IHN0cmluZ1tdO1x0XG5cdHRyeSB7XHRcblx0XHRpdGVtcyA9IGZzLnJlYWRkaXJTeW5jKHJvb3QpXG5cdH1jYXRjaCAoZSl7XG5cdFx0cmV0dXJuIGZpbGVzO1xuXHR9XG5cdGZvciAobGV0IGl0ZW0gb2YgaXRlbXMpIHtcblx0XHRpZihpdGVtLmVuZHNXaXRoKFwiLnRzXCIpKXtcblx0XHRcdGZpbGVzLnB1c2gocm9vdCtcIi9cIitpdGVtKTtcblx0XHR9ZWxzZXtcblx0XHRcdGNvbnN0IHN1YnMgPSBnZXRUeXBlc2NyaXB0RmlsZXMocm9vdCtcIi9cIitpdGVtKTtcblx0XHRcdGZvciAobGV0IHN1YiBvZiBzdWJzKXtcblx0XHRcdFx0ZmlsZXMucHVzaChzdWIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmaWxlcztcbn1cblxuZnVuY3Rpb24gc3dlZXAoZmlsZTogc3RyaW5nKTogc3RyaW5nW117XG5cdGxldCByZXQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1x0XG5cblx0bGV0IGYgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZSkudG9TdHJpbmcoKTtcblxuXHRsZXQgY29sID0gJyc7XG5cblx0bGV0IGZvdW5kID0gZmFsc2U7XG5cdGZvciAobGV0IGxpbmUgb2YgZi5zcGxpdCgvXFxyP1xcbi8pKXtcblx0XHRpZiAoZm91bmQpe1xuXHRcdFx0bGluZSA9IGxpbmUucmVwbGFjZShcImV4cG9ydCBcIiwgXCJcIik7XG5cdFx0XHRjb2wgKz0gbGluZStcIlxcblwiO1xuXHRcdFx0aWYgKGxpbmUgPT0gJ30nKXtcblx0XHRcdFx0Zm91bmQgPSBmYWxzZTtcblx0XHRcdFx0cmV0LnB1c2goY29sKTtcblx0XHRcdFx0Y29sID0gJyc7XG5cdFx0XHR9XHRcblx0XHR9ZWxzZXtcblx0XHRcdGlmKGxpbmUgPT0gJy8vQHNoYXJlZCcpe1xuXHRcdFx0XHRmb3VuZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGdvKCl7XG5cdGlmKHByb2Nlc3MuYXJndi5sZW5ndGggIT0gMyl7XG5cdFx0Y29uc29sZS5sb2coXCJQbGVhc2Ugc3BlY2lmeSBhIGRpcmVjdG9yeSB0byBvcGVyYXRlIG9uXCIpO1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBvdXRwYXRoID0gXCIuL3NyYy9jbGllbnQvc3JjL2RlZmluaXRpb25zLnRzXCJcblx0Y29uc3QgZmlsZXMgPSBnZXRUeXBlc2NyaXB0RmlsZXMocHJvY2Vzcy5hcmd2WzJdKTtcdFxuXG5cdGxldCBvdXRwdXREYXRhID0gJy8vQVRURU5USU9OISBUaGlzIGlzIGF1dG8gZ2VuZXJhdGVkIGNvZGUsIGl0IGdldHMgb3ZlcndyaXR0ZW4gd2hlbiB0aGUgcHJvamVjdCBpcyBidWlsdCFcXG4nO1xuXHRvdXRwdXREYXRhICs9ICcvL0lmIHlvdSB3aXNoIHRvIGNoYW5nZSBhbnl0aGluZyBoZXJlIHlvdSB3aWxsIG5lZWQgdG8gZmluZCB0aGUgcmVsZXZhbnQgZGVmaW50aW9uIGluIHRoZSBzZXJ2ZXIgY29kZSFcXG4nO1xuXG5cdGZvciAobGV0IGYgb2YgZmlsZXMpe1xuXHRcdGxldCBnZXRzID0gc3dlZXAoZik7XG5cdFx0aWYoZ2V0cy5sZW5ndGggPiAwKXtcblx0XHRcdGZvciAobGV0IGdldCBvZiBnZXRzKXtcblx0XHRcdFx0b3V0cHV0RGF0YSArPSBnZXQgKyAnXFxuJztcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnMud3JpdGVGaWxlU3luYyhvdXRwYXRoLCBvdXRwdXREYXRhKTtcbn1cbmdvKCk7XG4iXX0=