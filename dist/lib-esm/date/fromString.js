/**
 * Returns a Date from string value format espected format dd[/]mm[/]yyyy
 * @param {string} dateFrom
 * @return Date
 */
import { EMPTY_DATE_VALUE } from "./core";
export var fromString = function (target, dateFrom) {
    var dateParts = dateFrom.match(/([0-9]?[0-9])\/?([0-9]?[0-9])\/?([0-9][0-9][0-9][0-9])/);
    return dateParts && dateParts.length > 2
        ? new Date(Number(dateParts[3]), Number(dateParts[2]) - 1, Number(dateParts[1]), 0, 0, 0, 0)
        : EMPTY_DATE_VALUE;
};
//# sourceMappingURL=fromString.js.map