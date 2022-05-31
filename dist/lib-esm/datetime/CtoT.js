/**
 * Returns a Date from string value format espected format dd[/]mm[/]yyyy
 * @param {string} dateFrom
 * @return Date
 */
import { EMPTY_DATE_VALUE } from "../date/core";
import { newInstance } from "./newInstance";
export var fromString = function (dateFrom, dateFormat, timeFormat) {
    if (!dateFormat) {
        dateFormat = "MDY";
    }
    if (!timeFormat) {
        timeFormat = 12;
    }
    // Date Format   dateFormat = “MDY”   dateFormat = “DMY”   dateFormat = “YMD”  o Y4
    var y = dateFormat.indexOf("Y");
    var m = dateFormat.indexOf("M");
    var d = dateFormat.indexOf("D");
    var dateParts = dateFrom.split(" ")[0].split("/");
    if (dateFormat.indexOf("Y4") === 0) {
        m = m - 1;
        d = d - 1;
    }
    var timeParts = dateFrom.match(/ ([0-9]?[0-9]):([0-9]?[0-9])\:?([0-9][0-9])?\.?([0-9]?[0-9]?[0-9])?/);
    if (dateParts &&
        timeParts &&
        dateParts.length !== 1 &&
        timeParts.length !== 1 &&
        timeParts[1] &&
        Number(timeParts[1]) !== 24) {
        var year_1 = Number(dateParts[y]);
        var month = Number(dateParts[m]);
        var day = Number(dateParts[d]);
        var hour = 0;
        var minutes = 0;
        if (timeParts[1] && timeParts[2]) {
            hour = Number(timeParts[1]);
            minutes = Number(timeParts[2]);
        }
        var seconds = 0;
        if (timeParts[3]) {
            seconds = Number(timeParts[3]);
        }
        var milliseconds = 0;
        if (timeParts[4]) {
            milliseconds = Number(timeParts[4]);
        }
        if (timeFormat === 12) {
            if (Number(hour) <= 12) {
                if (dateFrom.indexOf("PM") !== -1) {
                    if (hour < 12) {
                        hour = hour + 12;
                    }
                    else {
                        hour = 0;
                    }
                }
            }
        }
        return newInstance(year_1, month, day, hour, minutes, seconds, milliseconds);
    }
    else {
        return EMPTY_DATE_VALUE;
    }
};
//# sourceMappingURL=CtoT.js.map