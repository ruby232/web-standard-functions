/**
 * Returns year for date
 * @param {Date} dateFrom
 * @return number
 */
import { DateTime } from "luxon";
import { EMPTY_DATE_VALUE } from "../date/core";
export var year = function (dateFrom) {
    return dateFrom.getTime() === EMPTY_DATE_VALUE.getTime()
        ? 0
        : DateTime.fromJSDate(dateFrom).year;
};
//# sourceMappingURL=year.js.map