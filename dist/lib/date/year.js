"use strict";
/**
 * Returns year for date
 * @param {Date} dateFrom
 * @return number
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.year = void 0;
var luxon_1 = require("luxon");
exports.year = function(dateFrom) {
  return luxon_1.DateTime.fromJSDate(dateFrom).year;
};
//# sourceMappingURL=year.js.map
