/**
 * Add months to a date
 * @param {Date} date
 * @param {number} months
 * @return Date
 */
import { DateTime } from "luxon";
export var addMonths = function (date, months) {
    return DateTime.fromJSDate(date)
        .plus({ months: Math.trunc(months) })
        .toJSDate();
};
//# sourceMappingURL=addMonths.js.map