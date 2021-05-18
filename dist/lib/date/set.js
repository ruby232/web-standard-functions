"use strict";
/**
 * Returns a Date from its parts
 * @param {Date} targetDate
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = void 0;
var core_1 = require("./core");
exports.set = function(targetDate, year, month, day) {
  targetDate.setFullYear(year);
  targetDate.setMonth(month - 1);
  targetDate.setDate(day);
  if (
    targetDate.getFullYear() !== year ||
    (targetDate.getMonth() !== month - 1 && targetDate.getDate() !== day)
  ) {
    targetDate.setTime(core_1.EMPTY_DATE_VALUE.getTime());
  }
  return targetDate;
};
//# sourceMappingURL=set.js.map
