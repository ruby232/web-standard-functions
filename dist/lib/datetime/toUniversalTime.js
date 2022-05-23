"use strict";
/**
 * This method applies to DateTime data type data, allowing you to convert its value to Coordinated Universal Time (UTC).
 * @Param Date
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUniversalTime = void 0;
var luxon_1 = require("luxon");
var getTimezone_1 = require("./getTimezone");
var core_1 = require("./core");
var toUniversalTime = function (fromDate) {
    var offset = luxon_1.DateTime.fromJSDate(fromDate).setZone(getTimezone_1.getTimezone()).offset;
    var ret = new Date();
    ret.setTime(fromDate.getTime() - core_1.minutesToMilliseconds(offset));
    return ret;
};
exports.toUniversalTime = toUniversalTime;
//# sourceMappingURL=toUniversalTime.js.map