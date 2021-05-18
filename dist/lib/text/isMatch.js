"use strict";
/**
 * Test a string against regexp
 * @param {string} target
 * @param {string} regExp
 * @return boolean
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMatch = void 0;
exports.isMatch = function(target, regExp) {
  var rex = typeof regExp === "string" ? new RegExp(regExp) : regExp;
  return rex.exec(target) !== null;
};
//# sourceMappingURL=isMatch.js.map
