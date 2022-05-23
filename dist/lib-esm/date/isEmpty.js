/**
 * Test Date for emptiness
 * @param {Date} target
 * @return boolean
 */
import { EMPTY_DATE_VALUE } from "./core";
export var isEmpty = function (target) {
    return target.getTime() === EMPTY_DATE_VALUE.getTime();
};
//# sourceMappingURL=isEmpty.js.map