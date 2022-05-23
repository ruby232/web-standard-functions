"use strict";
/**
 * This method converts a DateTime value from one timezone, to another.
 * The first one is passed as a parameter of the method, while the second one is the current timezone of the process executing the method.
 * @Param Date
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromTimezone = void 0;
var luxon_1 = require("luxon");
var getTimezone_1 = require("./getTimezone");
var core_1 = require("./core");
var fromTimezone = function (fromDate, timezoneFrom) {
    var offsetFrom = luxon_1.DateTime.fromJSDate(fromDate).setZone(timezoneFrom).offset;
    var offsetTo = luxon_1.DateTime.fromJSDate(fromDate).setZone(getTimezone_1.getTimezone()).offset;
    return new Date(fromDate.getTime() + core_1.minutesToMilliseconds(offsetTo - offsetFrom));
};
exports.fromTimezone = fromTimezone;
//# sourceMappingURL=fromTimezone.js.map