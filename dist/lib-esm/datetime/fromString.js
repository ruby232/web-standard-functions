/**
 * Returns a Date from string value format espected format dd[/]mm[/]yyyy
 * @param {string} dateFrom
 * @return Date
 */
import { EMPTY_DATE_VALUE } from "../date/core";
import { newInstance } from "./newInstance";
export var fromString = function (target, dateFrom) {
    var dateParts = dateFrom.match(/([0-9]?[0-9])\/?([0-9]?[0-9])\/?([0-9][0-9][0-9][0-9])\ ([0-9]?[0-9]):([0-9]?[0-9])\:?([0-9][0-9])?\.?([0-9]?[0-9]?[0-9])?/);
    if (dateParts && dateParts.length > 5) {
        var year = Number(dateParts[3]);
        var month = Number(dateParts[2]);
        var day = Number(dateParts[1]);
        var hour = Number(dateParts[4]);
        var minutes = Number(dateParts[5]);
        var seconds = 0;
        if (dateParts.length > 6 && dateParts[6]) {
            seconds = Number(dateParts[6]);
        }
        var milliseconds = 0;
        if (dateParts.length > 7 && dateParts[7]) {
            milliseconds = Number(dateParts[7]);
        }
        return newInstance(year, month, day, hour, minutes, seconds, milliseconds);
    }
    return EMPTY_DATE_VALUE;
};
//# sourceMappingURL=fromString.js.map