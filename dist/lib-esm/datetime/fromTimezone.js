/**
 * This method converts a DateTime value from one timezone, to another.
 * The first one is passed as a parameter of the method, while the second one is the current timezone of the process executing the method.
 * @Param Date
 * @return Date
 */
import { DateTime } from "luxon";
import { getTimezone } from "./getTimezone";
import { minutesToMilliseconds } from "./core";
export var fromTimezone = function (fromDate, timezoneFrom) {
    var offsetFrom = DateTime.fromJSDate(fromDate).setZone(timezoneFrom).offset;
    var offsetTo = DateTime.fromJSDate(fromDate).setZone(getTimezone()).offset;
    return new Date(fromDate.getTime() + minutesToMilliseconds(offsetTo - offsetFrom));
};
//# sourceMappingURL=fromTimezone.js.map