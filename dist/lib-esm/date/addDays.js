/**
 * Add days to a date
 * @param {Date} date
 * @param {number} days
 * @return Date
 */
import { DateTime } from "luxon";
export var addDays = function (date, days) {
    return DateTime.fromJSDate(date)
        .plus({ days: Math.trunc(days) })
        .toJSDate();
};
//# sourceMappingURL=addDays.js.map