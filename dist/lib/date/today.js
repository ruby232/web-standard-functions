"use strict";
/**
 * Returns the current date.
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.today = void 0;
var today = function () {
  var todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  return todayDate;
};
exports.today = today;
//# sourceMappingURL=today.js.map
