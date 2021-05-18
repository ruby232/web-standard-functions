"use strict";
/**
 * Returns the last date of the month of the given date.
 * @param {Date} dateFrom
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.endOfMonth = void 0;
var luxon_1 = require("luxon");
exports.endOfMonth = function(dateFrom) {
  return new Date(
    dateFrom.getFullYear(),
    dateFrom.getMonth(),
    luxon_1.DateTime.fromJSDate(dateFrom).daysInMonth
  );
};
//# sourceMappingURL=endOfMonth.js.map
