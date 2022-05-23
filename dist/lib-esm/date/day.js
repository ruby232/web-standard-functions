/**
 * Returns day for date
 * @param {Date} dateFrom
 * @return number
 */
import { DateTime } from "luxon";
export var day = function (dateFrom) {
    return DateTime.fromJSDate(dateFrom).day;
};
//# sourceMappingURL=day.js.map