"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Severity levels of the associated error
var Severity;
(function (Severity) {
    Severity[Severity["Info"] = 0] = "Info";
    Severity[Severity["Warning"] = 1] = "Warning";
    Severity[Severity["Error"] = 2] = "Error";
    Severity[Severity["Fatal"] = 3] = "Fatal";
})(Severity = exports.Severity || (exports.Severity = {}));
var ErrCodes;
(function (ErrCodes) {
    ErrCodes[ErrCodes["DBConnectionErr"] = 0] = "DBConnectionErr";
})(ErrCodes = exports.ErrCodes || (exports.ErrCodes = {}));
// Custom error for internal logging
class InternalError extends Error {
    constructor(code, message, severity) {
        super(message);
        this.code = code;
        this.severity = severity;
    }
}
exports.InternalError = InternalError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJlcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUEwQztBQUMxQyxJQUFZLFFBS1g7QUFMRCxXQUFZLFFBQVE7SUFDaEIsdUNBQUksQ0FBQTtJQUNKLDZDQUFPLENBQUE7SUFDUCx5Q0FBSyxDQUFBO0lBQ0wseUNBQUssQ0FBQTtBQUNULENBQUMsRUFMVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUtuQjtBQUVELElBQVksUUFFWDtBQUZELFdBQVksUUFBUTtJQUNoQiw2REFBZSxDQUFBO0FBQ25CLENBQUMsRUFGVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUVuQjtBQUVELG9DQUFvQztBQUNwQyxNQUFhLGFBQWMsU0FBUSxLQUFLO0lBSXBDLFlBQVksSUFBdUIsRUFBRSxPQUFlLEVBQUUsUUFBa0I7UUFDcEUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztDQUNKO0FBVEQsc0NBU0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTZXZlcml0eSBsZXZlbHMgb2YgdGhlIGFzc29jaWF0ZWQgZXJyb3JcbmV4cG9ydCBlbnVtIFNldmVyaXR5IHtcbiAgICBJbmZvLFxuICAgIFdhcm5pbmcsXG4gICAgRXJyb3IsXG4gICAgRmF0YWwsXG59XG5cbmV4cG9ydCBlbnVtIEVyckNvZGVzIHtcbiAgICBEQkNvbm5lY3Rpb25FcnIsXG59XG5cbi8vIEN1c3RvbSBlcnJvciBmb3IgaW50ZXJuYWwgbG9nZ2luZ1xuZXhwb3J0IGNsYXNzIEludGVybmFsRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29kZTogbnVtYmVyO1xuICAgIHNldmVyaXR5OiBTZXZlcml0eTtcblxuICAgIGNvbnN0cnVjdG9yKGNvZGU6IG51bWJlciB8IEVyckNvZGVzLCBtZXNzYWdlOiBzdHJpbmcsIHNldmVyaXR5OiBTZXZlcml0eSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgdGhpcy5zZXZlcml0eSA9IHNldmVyaXR5O1xuICAgIH1cbn0iXX0=