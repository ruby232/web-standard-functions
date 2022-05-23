/**
 * Returns a Date from its parts
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @return Date
 */
import { EMPTY_DATE_VALUE } from "./core";
export var newInstance = function (year, month, day) {
    var ret = new Date(year, month - 1, day, 0, 0, 0, 0);
    return ret.getFullYear() === year &&
        ret.getMonth() === month - 1 &&
        ret.getDate() === day
        ? ret
        : EMPTY_DATE_VALUE;
};
//# sourceMappingURL=newInstance.js.map