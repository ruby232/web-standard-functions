/**
 * Returns a string represantation of a date. dd[/]mm[/]yyyy
 * @return Date
 */
import { isEmpty } from "./isEmpty";
export var toString = function (targetDate, dateFormat) {
    if (!dateFormat) {
        dateFormat = "MDY";
    }
    // Date Format   dateFormat = “MDY”   dateFormat = “DMY”   dateFormat = “YMD”
    dateFormat =
        dateFormat.charAt(0) +
            "/" +
            dateFormat.charAt(1) +
            "/" +
            dateFormat.charAt(2);
    var year = String(targetDate.getFullYear());
    var month = String(targetDate.getMonth() + 1);
    var day = String(targetDate.getDate());
    if (day.toString().length === 1) {
        day = "0" + day;
    }
    if (month.toString().length === 1) {
        month = "0" + month;
    }
    var ret;
    if (isEmpty(targetDate)) {
        ret = "  /  /  ";
    }
    else {
        ret = dateFormat
            .replace("D", day)
            .replace("M", month)
            .replace("Y", year.substr(-2));
    }
    return ret;
};
//# sourceMappingURL=toString.js.map