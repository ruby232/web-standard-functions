/**
 * Returns the number (1...7) of the day of the week. This number is associated with a day of the week (Sunday = 1).
 * @param {Date} dateFrom
 * @return number
 */
import { DateTime } from "luxon";
export var dayOfWeek = function (dateFrom) {
    return (parseInt(DateTime.fromJSDate(dateFrom).toFormat("c"), 10) % 7) + 1;
};
//# sourceMappingURL=dayOfWeek.js.map