/**
 * Returns a Date from its parts
 * @param {Date} targetDate
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @return Date
 */
import { EMPTY_DATE_VALUE } from "./core";
export var set = function (targetDate, year, month, day) {
    targetDate.setFullYear(year);
    targetDate.setMonth(month - 1);
    targetDate.setDate(day);
    if (targetDate.getFullYear() !== year || (targetDate.getMonth() !== month - 1) && targetDate.getDate() !== day) {
        targetDate.setTime(EMPTY_DATE_VALUE.getTime());
    }
    return targetDate;
};
//# sourceMappingURL=set.js.map