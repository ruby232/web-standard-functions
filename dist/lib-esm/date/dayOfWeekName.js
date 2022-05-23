/**
 * Returns the weekday for a given date in the selected language.
 * @param {Date} dateFrom
 * @param {string} language
 * @return string
 */
import { DateTime } from "luxon";
import { gxToLibLangMapping } from "./core";
export var dayOfWeekName = function (dateFrom, language) {
    return DateTime.fromJSDate(dateFrom)
        .setLocale(gxToLibLangMapping(language))
        .toFormat("cccc");
};
//# sourceMappingURL=dayOfWeekName.js.map