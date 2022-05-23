/**
 * Returns year for date
 * @param {Date} dateFrom
 * @return number
 */
import { DateTime } from "luxon";
export var year = function (dateFrom) {
    return DateTime.fromJSDate(dateFrom).year;
};
//# sourceMappingURL=year.js.map