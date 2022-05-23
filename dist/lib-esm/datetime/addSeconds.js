/**
 * Returns a datetime value corresponding to adding seconds to a datetime value.
 * @param {Date} dateFrom
 * @param {number} seconds
 * @return Date
 */
import { secondsToMilliseconds } from "./core";
export var addSeconds = function (dateFrom, seconds) {
    return new Date(dateFrom.getTime() + secondsToMilliseconds(seconds));
};
//# sourceMappingURL=addSeconds.js.map