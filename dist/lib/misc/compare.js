"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = void 0;
var like_1 = require("../text/like");
/**
 * Compares the two operands using the indicated operator
 * @param {any} left First operand
 * @param {string} op Operator
 * @param {any} right Second operand
 * @return true if the comparition succeds, false otherwise
 */
exports.compare = function(left, op, right) {
  switch (op) {
    case "<":
      return left < right;
    case "<=":
      return left <= right;
    case ">":
      return left > right;
    case ">=":
      return left >= right;
    case "=":
      return left === right;
    case "<>":
      return left !== right;
    case "like":
      if (typeof left === "string" && typeof right === "string") {
        return like_1.like(left, right);
      } else {
        return false;
      }
    default:
      return false;
  }
};
//# sourceMappingURL=compare.js.map
