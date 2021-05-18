"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
var isEmpty_1 = require("../date/isEmpty");
var isEmpty_2 = require("../text/isEmpty");
var isEmpty_3 = require("../numeric/isEmpty");
var isEmpty_4 = require("../bool/isEmpty");
/**
 * @param value
 * @return boolean
 */
exports.isEmpty = function(value) {
  if (value === null || value === undefined) {
    return true;
  }
  if (value instanceof Date) {
    return isEmpty_1.isEmpty(value);
  } else if (typeof value === "string") {
    return isEmpty_2.isEmpty(value);
  } else if (typeof value === "number") {
    return isEmpty_3.isEmpty(value);
  } else if (typeof value === "boolean") {
    return isEmpty_4.isEmpty(value);
  }
  return false;
};
//# sourceMappingURL=isEmpty.js.map
