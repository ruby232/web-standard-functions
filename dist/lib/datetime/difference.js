"use strict";
/**
 * Returns the seconds elapsed between two DateTime data type values.
 * @param {Date} dateFrom
 * @return number
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.difference = void 0;
exports.difference = function(dateTo, dateFrom) {
  return (dateFrom.getTime() - dateTo.getTime()) / 1000;
};
//# sourceMappingURL=difference.js.map
