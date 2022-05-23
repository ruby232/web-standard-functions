/**
 * Assigns the empty value
 * @param {Date} dateFrom
 * @return void
 */
import { EMPTY_DATE_VALUE } from "../date/core";
export var setEmpty = function (date) {
    date.setTime(EMPTY_DATE_VALUE.getTime());
    return date;
};
//# sourceMappingURL=setEmpty.js.map