"use strict";
/**
 * Test Date for emptiness
 * @param {Date} target
 * @return boolean
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
var core_1 = require("./core");
var isEmpty = function (target) {
    return target.getTime() === core_1.EMPTY_DATE_VALUE.getTime();
};
exports.isEmpty = isEmpty;
//# sourceMappingURL=isEmpty.js.map