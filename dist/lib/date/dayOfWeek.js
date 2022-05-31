"use strict";
/**
 * Returns the number (1...7) of the day of the week. This number is associated with a day of the week (Sunday = 1).
 * @param {Date} dateFrom
 * @return number
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayOfWeek = void 0;
var luxon_1 = require("luxon");
var core_1 = require("../date/core");
var dayOfWeek = function (dateFrom) {
    return dateFrom.getTime() === core_1.EMPTY_DATE_VALUE.getTime()
        ? 0
        : (parseInt(luxon_1.DateTime.fromJSDate(dateFrom).toFormat("c"), 10) % 7) + 1;
};
exports.dayOfWeek = dayOfWeek;
//# sourceMappingURL=dayOfWeek.js.map