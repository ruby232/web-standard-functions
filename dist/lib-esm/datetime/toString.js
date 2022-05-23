import { isEmpty } from "../date/isEmpty";
import { padLeft } from "../text/padLeft";
import { toString as str } from "../numeric/toString";
/**
 * Returns a string represantation of a date-time. dd[/]mm[/]yyyy HH:mm:ss
 * @return Date
 */
export var toString = function (targetDate) {
    if (isEmpty(targetDate)) {
        return "";
    }
    else {
        var datePart = targetDate.getDate() + "/" + (targetDate.getMonth() + 1) + "/" + targetDate.getFullYear();
        var timePart = padLeft(str(targetDate.getHours()), 2, "0") + ":" + padLeft(str(targetDate.getMinutes()), 2, "0") + ":" + padLeft(str(targetDate.getSeconds()), 2, "0");
        return datePart + " " + timePart;
    }
};
//# sourceMappingURL=toString.js.map