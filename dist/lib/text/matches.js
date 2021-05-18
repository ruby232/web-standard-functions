"use strict";
/**
 * Return matches against regexp
 * @param {string} target
 * @param {string} regExp
 * @return Array
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.matches = void 0;
exports.matches = function(target, rex) {
  return new RegExp(rex).exec(target) || [];
};
//# sourceMappingURL=matches.js.map
