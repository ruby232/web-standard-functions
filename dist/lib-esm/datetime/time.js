/**
 * To return the time in the 'hh:mm:ss' format.
 * @return String
 */
export var time_format;
(function (time_format) {
    time_format[time_format["format_12"] = 12] = "format_12";
    time_format[time_format["format_24"] = 24] = "format_24";
})(time_format || (time_format = {}));
export var timeImpl = function (tf, date) {
    var format = tf === time_format.format_12 ? "en-US" : "en-GB";
    return (date || new Date()).toLocaleTimeString(format);
};
export var time = function () {
    // TODO get timeformat from app  preferences
    return timeImpl(time_format.format_12, new Date());
};
//# sourceMappingURL=time.js.map