"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyValue = void 0;
var setEmpty_1 = require("../datetime/setEmpty");
var setEmpty_2 = require("../text/setEmpty");
var setEmpty_3 = require("../numeric/setEmpty");
var setEmpty_4 = require("../bool/setEmpty");
/**
 * @param value
 * @return any
 */
exports.emptyValue = function(value) {
  if (value instanceof Date) {
    return setEmpty_1.setEmpty(value);
  } else if (typeof value === "string") {
    return setEmpty_2.setEmpty(value);
  } else if (typeof value === "number") {
    return setEmpty_3.setEmpty(value);
  } else if (typeof value === "boolean") {
    return setEmpty_4.setEmpty(value);
  }
  return null;
};
//# sourceMappingURL=emptyValue.js.map
