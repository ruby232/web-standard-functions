/**
 * To add minutes to a datetime.
 * @param {Date} dateFrom
 * @param {number} minutes
 * @return Date
 */
import { minutesToMilliseconds } from "./core";
export var addMinutes = function (dateFrom, minutes) {
    return new Date(dateFrom.getTime() + minutesToMilliseconds(minutes));
};
//# sourceMappingURL=addMinutes.js.map