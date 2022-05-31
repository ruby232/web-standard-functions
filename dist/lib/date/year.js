"use strict";
/**
 * Returns year for date
 * @param {Date} dateFrom
 * @return number
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.year = void 0;
var luxon_1 = require("luxon");
var core_1 = require("../date/core");
var year = function (dateFrom) {
    return dateFrom.getTime() === core_1.EMPTY_DATE_VALUE.getTime()
        ? 0
        : luxon_1.DateTime.fromJSDate(dateFrom).year;
};
exports.year = year;
//# sourceMappingURL=year.js.map