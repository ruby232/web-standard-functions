"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCases = void 0;
exports.testCases = [
    ["123.45", ".", 123.45],
    ["123.45", undefined, 123.45],
    ["123.45.67", ".", 123.45],
    ["123.45,67", ".", 123.45],
    ["123.45,67", ",", 123],
    ["123,45,67", ",", 123.45],
    ["123.45,67", "*", 0],
    ["1891Peñarol", "", 0],
    ["1891Peñarol", ".", 1891],
    ["1891Peñarol", ",", 1891],
    ["Peñarol1891", "", 0],
    ["Peñarol1891", ".", 0],
    ["Peñarol1891", ",", 0]
];
//# sourceMappingURL=tonumeric-cases.js.map