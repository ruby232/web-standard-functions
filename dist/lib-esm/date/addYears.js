/**
 * Add years to a date
 * @param {Date} date
 * @param {number} years
 * @return Date
 */
import { DateTime } from "luxon";
export var addYears = function (date, years) {
    return DateTime.fromJSDate(date)
        .plus({ years: Math.trunc(years) })
        .toJSDate();
};
//# sourceMappingURL=addYears.js.map