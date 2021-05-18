"use strict";
/**
 * Returns the current date.
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.today = void 0;
exports.today = function() {
  var todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  return todayDate;
};
//# sourceMappingURL=today.js.map
