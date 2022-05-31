/**
 * Returns the name of the month for the given date in the selected language.
 * @param {Date} dateFrom
 * @param {string} language
 * @return string
 */
import { DateTime } from "luxon";
import { gxToLibLangMapping } from "./core";
import { EMPTY_DATE_VALUE } from "../date/core";
export var monthName = function (dateFrom, language) {
    var month = DateTime.fromJSDate(dateFrom)
        .setLocale(gxToLibLangMapping(language))
        .toFormat("LLLL");
    return dateFrom.getTime() === EMPTY_DATE_VALUE.getTime()
        ? ""
        : month
            .charAt(0)
            .toUpperCase()
            .concat(month.substring(1, month.length));
};
//# sourceMappingURL=monthName.js.map