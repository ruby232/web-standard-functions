"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.time = exports.timeImpl = exports.time_format = void 0;
/**
 * To return the time in the 'hh:mm:ss' format.
 * @return String
 */
var time_format;
(function (time_format) {
    time_format[time_format["format_12"] = 12] = "format_12";
    time_format[time_format["format_24"] = 24] = "format_24";
})(time_format = exports.time_format || (exports.time_format = {}));
var timeImpl = function (tf, date) {
    var format = tf === time_format.format_12 ? "en-US" : "en-GB";
    return (date || new Date()).toLocaleTimeString(format);
};
exports.timeImpl = timeImpl;
var time = function () {
    // TODO get timeformat from app  preferences
    return exports.timeImpl(time_format.format_12, new Date());
};
exports.time = time;
//# sourceMappingURL=time.js.map