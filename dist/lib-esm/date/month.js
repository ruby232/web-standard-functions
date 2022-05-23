/**
 * Returns month for date
 * @param {Date} dateFrom
 * @return number
 */
import { DateTime } from "luxon";
export var month = function (dateFrom) {
    return DateTime.fromJSDate(dateFrom).month;
};
//# sourceMappingURL=month.js.map