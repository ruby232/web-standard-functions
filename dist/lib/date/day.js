"use strict";
/**
 * Returns day for date
 * @param {Date} dateFrom
 * @return number
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.day = void 0;
var luxon_1 = require("luxon");
exports.day = function(dateFrom) {
  return luxon_1.DateTime.fromJSDate(dateFrom).day;
};
//# sourceMappingURL=day.js.map
