/**
 * To add hours to a datetime.
 * @param {Date} dateFrom
 * @param {number} hours
 * @return Date
 */
import { hoursToMilliseconds } from "./core";
export var addHours = function (dateFrom, hours) {
    return new Date(dateFrom.getTime() + hoursToMilliseconds(hours));
};
//# sourceMappingURL=addHours.js.map