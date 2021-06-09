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
var addYears = function (date, years) {
  return luxon_1.DateTime.fromJSDate(date)
    .plus({ years: Math.trunc(years) })
    .toJSDate();
};
exports.addYears = addYears;
//# sourceMappingURL=addYears.js.map
