"use strict";
/**
 * Returns day for date
 * @param {Date} dateFrom
 * @return number
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.day = void 0;
var luxon_1 = require("luxon");
var core_1 = require("../date/core");
var day = function (dateFrom) {
    return dateFrom.getTime() === core_1.EMPTY_DATE_VALUE.getTime()
        ? 0
        : luxon_1.DateTime.fromJSDate(dateFrom).day;
};
exports.day = day;
//# sourceMappingURL=day.js.map