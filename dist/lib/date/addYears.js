"use strict";
/**
 * Add years to a date
 * @param {Date} date
 * @param {number} years
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.addYears = void 0;
var luxon_1 = require("luxon");
var core_1 = require("../date/core");
var addYears = function (date, years) {
    return date.getTime() === core_1.EMPTY_DATE_VALUE.getTime()
        ? core_1.EMPTY_DATE_VALUE
        : luxon_1.DateTime.fromJSDate(date)
            .plus({ years: Math.trunc(years) })
            .toJSDate();
};
exports.addYears = addYears;
//# sourceMappingURL=addYears.js.map