"use strict";
/**
 * Returns the name of the month for the given date in the selected language.
 * @param {Date} dateFrom
 * @param {string} language
 * @return string
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.monthName = void 0;
var luxon_1 = require("luxon");
var core_1 = require("./core");
var core_2 = require("../date/core");
var monthName = function (dateFrom, language) {
    var month = luxon_1.DateTime.fromJSDate(dateFrom)
        .setLocale(core_1.gxToLibLangMapping(language))
        .toFormat("LLLL");
    return dateFrom.getTime() === core_2.EMPTY_DATE_VALUE.getTime()
        ? ""
        : month
            .charAt(0)
            .toUpperCase()
            .concat(month.substring(1, month.length));
};
exports.monthName = monthName;
//# sourceMappingURL=monthName.js.map