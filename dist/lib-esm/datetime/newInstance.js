/**
 * Returns a Date from its parts
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @param {number} hour
 * @param {number} minutes
 * @param {number} seconds
 * @param {number} milliseconds
 * @return Date
 */
import { EMPTY_DATE_VALUE } from "../date/core";
export var newInstance = function (year, month, day, hour, minutes, seconds, milliseconds) {
    if (!milliseconds || milliseconds === 0) {
        milliseconds = Number("000");
    }
    var ret;
    var yearAux = 0;
    var yearNow = Number(new Date()
        .getFullYear()
        .toString()
        .slice(-2));
    switch (year.toString().length) {
        case 2:
            if (year === 0) {
                yearAux = 2000;
            }
            if (0 < year && year < yearNow) {
                yearAux = Number("20" + year.toString());
            }
            if (yearNow <= year && year < 100) {
                yearAux = Number("19" + year.toString());
            }
            if (0 >= hour || hour > 23) {
                hour = 0;
                minutes = 0;
                seconds = 0;
                milliseconds = 0;
                ret = new Date(yearAux, month - 1, day, 0, 0, 0, 0);
            }
            else {
                ret = new Date(yearAux, month - 1, day, hour, minutes, seconds, milliseconds);
            }
            break;
        case 1:
            if (0 <= year && year <= yearNow) {
                yearAux = Number("200" + year.toString());
                if (0 >= hour || hour > 23) {
                    hour = 0;
                    minutes = 0;
                    seconds = 0;
                    milliseconds = 0;
                    ret = new Date(yearAux, month - 1, day, 0, 0, 0, 0);
                }
                else {
                    ret = new Date(yearAux, month - 1, day, hour, minutes, seconds, milliseconds);
                }
            }
            break;
        case 4:
            yearAux = year;
            if (0 > hour || hour > 23) {
                hour = 0;
                minutes = 0;
                seconds = 0;
                milliseconds = 0;
                ret = new Date(yearAux, month - 1, day, 0, 0, 0, 0);
            }
            else {
                ret = new Date(yearAux, month - 1, day, hour, minutes, seconds, milliseconds);
            }
            break;
        default:
            break;
    }
    return ret.getFullYear() === yearAux &&
        ret.getMonth() === month - 1 &&
        ret.getDate() === day &&
        ret.getHours() === hour &&
        ret.getMinutes() === minutes &&
        ret.getSeconds() === seconds &&
        ret.getMilliseconds() === milliseconds
        ? ret
        : EMPTY_DATE_VALUE;
};
//# sourceMappingURL=newInstance.js.map