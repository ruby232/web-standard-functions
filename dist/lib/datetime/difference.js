"use strict";
/**
 * Returns the seconds elapsed between two DateTime data type values.
 * @param {Date} dateFrom
 * @return number
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.difference = void 0;
var difference = function (dateTo, dateFrom) {
  return (dateFrom.getTime() - dateTo.getTime()) / 1000;
};
exports.difference = difference;
//# sourceMappingURL=difference.js.map
