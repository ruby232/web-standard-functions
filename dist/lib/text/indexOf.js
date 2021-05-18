"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexOf = void 0;
var length_1 = require("./length");
/**
 * Return position for first pattern occurence.
 * @param {string} target
 * @param {string} pattern
 * @param {number} from
 * @return number
 */
exports.indexOf = function(target, pattern, from) {
  if (from === void 0) {
    from = 1;
  }
  if (from < 1 || from > length_1.length(target)) return 0;
  return target.indexOf(pattern, from - 1) + 1;
};
//# sourceMappingURL=indexOf.js.map
