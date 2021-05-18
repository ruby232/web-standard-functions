"use strict";
/**
 * Add months to a date
 * @param {Date} date
 * @param {number} months
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMonths = void 0;
var luxon_1 = require("luxon");
exports.addMonths = function(date, months) {
  return luxon_1.DateTime.fromJSDate(date)
    .plus({ months: Math.trunc(months) })
    .toJSDate();
};
//# sourceMappingURL=addMonths.js.map
