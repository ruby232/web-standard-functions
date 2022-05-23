/**
 * Returns a Date from its parts
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @param {number} hour
 * @param {number} minutes
 * @param {number} seconds
 * @return Date
 */
import { EMPTY_DATE_VALUE } from "../date/core";
export var newInstance = function (year, month, day, hour, minutes, seconds) {
    var ret = new Date(year, month - 1, day, hour, minutes, seconds, 0);
    return ret.getFullYear() === year &&
        ret.getMonth() === month - 1 &&
        ret.getDate() === day &&
        ret.getHours() === hour &&
        ret.getMinutes() === minutes &&
        ret.getSeconds() === seconds
        ? ret
        : EMPTY_DATE_VALUE;
};
//# sourceMappingURL=newInstance.js.map