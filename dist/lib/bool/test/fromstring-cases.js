"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCases = void 0;
// Boolean::FromString test cases
exports.testCases = [
    ["true", true],
    ["false", false],
    ["True", true],
    ["False", false],
    ["TRUE", true],
    ["FALSE", false],
    ["0", false],
    ["1", false],
    ["X", false]
];
//# sourceMappingURL=fromstring-cases.js.map