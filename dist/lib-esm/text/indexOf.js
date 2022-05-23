import { length } from "./length";
/**
 * Return position for first pattern occurence.
 * @param {string} target
 * @param {string} pattern
 * @param {number} from
 * @return number
 */
export var indexOf = function (target, pattern, from) {
    if (from === void 0) { from = 1; }
    if (from < 1 || from > length(target))
        return 0;
    return target.indexOf(pattern, from - 1) + 1;
};
//# sourceMappingURL=indexOf.js.map