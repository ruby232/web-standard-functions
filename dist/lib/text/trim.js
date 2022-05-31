"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trim = void 0;
var regExp = /^ +| +$/g;
var trim = function (s) {
    return s.replace(regExp, '');
};
exports.trim = trim;
//# sourceMappingURL=trim.js.map