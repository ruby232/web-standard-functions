"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trim = void 0;
var regExp = /^ +| +$/g;
exports.trim = function(s) {
  return s.replace(regExp, "");
};
//# sourceMappingURL=trim.js.map
