/**
 * This method applies to DateTime data type data, allowing you to convert its value to Coordinated Universal Time (UTC).
 * @Param Date
 * @return Date
 */
import { DateTime } from "luxon";
import { getTimezone } from "./getTimezone";
import { minutesToMilliseconds } from "./core";
export var toUniversalTime = function (fromDate) {
    var offset = DateTime.fromJSDate(fromDate).setZone(getTimezone()).offset;
    var ret = new Date();
    ret.setTime(fromDate.getTime() - minutesToMilliseconds(offset));
    return ret;
};
//# sourceMappingURL=toUniversalTime.js.map