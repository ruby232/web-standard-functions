/**
 * Returns a datetime value corresponding to adding seconds to a datetime value.
 * @param {Date} dateFrom
 * @param {number} seconds
 * @return Date
 */
import { secondsToMilliseconds } from "./core";
import { EMPTY_DATE_VALUE } from "../date/core";
export var addSeconds = function (dateFrom, seconds) {
    return dateFrom.getTime() === EMPTY_DATE_VALUE.getTime()
        ? EMPTY_DATE_VALUE
        : new Date(dateFrom.getTime() + secondsToMilliseconds(seconds));
};
//# sourceMappingURL=addSeconds.js.map