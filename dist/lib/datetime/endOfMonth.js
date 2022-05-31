"use strict";
/**
 * Returns the last date of the month of the given date.
 * @param {Date} dateFrom
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.endOfMonth = void 0;
var luxon_1 = require("luxon");
var core_1 = require("../date/core");
var endOfMonth = function (dateFrom) {
    return dateFrom.getTime() === core_1.EMPTY_DATE_VALUE.getTime()
        ? core_1.EMPTY_DATE_VALUE
        : new Date(dateFrom.getFullYear(), dateFrom.getMonth(), luxon_1.DateTime.fromJSDate(dateFrom).daysInMonth, dateFrom.getHours(), dateFrom.getMinutes(), dateFrom.getSeconds(), dateFrom.getMilliseconds());
};
exports.endOfMonth = endOfMonth;
//# sourceMappingURL=endOfMonth.js.map