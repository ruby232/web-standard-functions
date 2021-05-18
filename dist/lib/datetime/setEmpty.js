"use strict";
/**
 * Assigns the empty value
 * @param {Date} dateFrom
 * @return void
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setEmpty = void 0;
var core_1 = require("../date/core");
exports.setEmpty = function(date) {
  date.setTime(core_1.EMPTY_DATE_VALUE.getTime());
  return date;
};
//# sourceMappingURL=setEmpty.js.map
