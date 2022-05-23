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
var monthName = function (dateFrom, language) {
    return luxon_1.DateTime.fromJSDate(dateFrom)
        .setLocale(core_1.gxToLibLangMapping(language))
        .toFormat("LLLL");
};
exports.monthName = monthName;
//# sourceMappingURL=monthName.js.map