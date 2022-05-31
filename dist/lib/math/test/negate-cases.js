"use strict";
// negate(test[0]) = test[1]
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCases = void 0;
// Negate test cases
exports.testCases = [
    ["1", "-1"],
    ["1.1", "-1.1"],
    ["0.0001", "-0.0001"],
    ["0.00000001", "-0.00000001"],
    ["0.00000000000001", "-0.00000000000001"],
    ["-1000", "1000"],
    ["-10000000000000000000", "10000000000000000000"],
    ["-1", "1"]
];
//# sourceMappingURL=negate-cases.js.map