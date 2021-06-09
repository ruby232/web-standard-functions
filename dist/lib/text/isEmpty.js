"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
var trim_1 = require("./trim");
/**
 * Test string for emptiness or spaces only content
 * @param {string} target
 * @return boolean
 */
var isEmpty = function (target) {
  return trim_1.trim(target) === "";
};
exports.isEmpty = isEmpty;
//# sourceMappingURL=isEmpty.js.map
