"use strict";
/**
 * To return a Date data type corresponding to a given DateTime data type.
 * @param {Date} dateFrom
 * @return Date
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDate = void 0;
var toDate = function (dateFrom) {
  return new Date(
    dateFrom.getFullYear(),
    dateFrom.getMonth(),
    dateFrom.getDate()
  );
};
exports.toDate = toDate;
//# sourceMappingURL=toDate.js.map
