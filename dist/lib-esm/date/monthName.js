/**
 * Returns the name of the month for the given date in the selected language.
 * @param {Date} dateFrom
 * @param {string} language
 * @return string
 */
import { DateTime } from "luxon";
import { gxToLibLangMapping } from "./core";
export var monthName = function (dateFrom, language) {
    return DateTime.fromJSDate(dateFrom)
        .setLocale(gxToLibLangMapping(language))
        .toFormat("LLLL");
};
//# sourceMappingURL=monthName.js.map