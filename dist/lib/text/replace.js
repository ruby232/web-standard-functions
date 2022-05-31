"use strict";
/**
 * @param Returns a string resulting from replacing all the occurrences of substr in target by repstr
 * @param replaceString
 * @return string
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.replace = void 0;
var replace = function (target, substr, repstr) {
    return target.replace(new RegExp(substr, "g"), repstr);
};
exports.replace = replace;
//# sourceMappingURL=replace.js.map