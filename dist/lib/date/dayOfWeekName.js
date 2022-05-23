"use strict";
/**
 * Returns the weekday for a given date in the selected language.
 * @param {Date} dateFrom
 * @param {string} language
 * @return string
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayOfWeekName = void 0;
var luxon_1 = require("luxon");
var core_1 = require("./core");
var dayOfWeekName = function (dateFrom, language) {
    return luxon_1.DateTime.fromJSDate(dateFrom)
        .setLocale(core_1.gxToLibLangMapping(language))
        .toFormat("cccc");
};
exports.dayOfWeekName = dayOfWeekName;
//# sourceMappingURL=dayOfWeekName.js.map