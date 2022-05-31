/**
 * Returns the last date of the month of the given date.
 * @param {Date} dateFrom
 * @return Date
 */
import { DateTime } from "luxon";
import { EMPTY_DATE_VALUE } from "../date/core";
export var endOfMonth = function (dateFrom) {
    return dateFrom.getTime() === EMPTY_DATE_VALUE.getTime()
        ? EMPTY_DATE_VALUE
        : new Date(dateFrom.getFullYear(), dateFrom.getMonth(), DateTime.fromJSDate(dateFrom).daysInMonth);
};
//# sourceMappingURL=endOfMonth.js.map