"use strict";
/**
 * Returns a DateTime value corresponding to adding milliseconds to a DateTime data type value.
 * @param {Date} dateFrom
 * @param {number} millisecconds
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMilliseconds = void 0;
var addMilliseconds = function (dateFrom, milliseconds) {
  var ret = new Date();
  ret.setTime(dateFrom.getTime() + milliseconds);
  return ret;
};
exports.addMilliseconds = addMilliseconds;
//# sourceMappingURL=addMilliseconds.js.map
