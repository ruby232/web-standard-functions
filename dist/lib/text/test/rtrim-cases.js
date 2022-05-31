"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCases = void 0;
// String test cases
exports.testCases = [
    ["texto", "texto"],
    [" texto", " texto"],
    ["texto ", "texto"],
    [" texto ", " texto"],
    ["  texto", "  texto"],
    ["texto  ", "texto"],
    ["  texto  ", "  texto"],
    ["  te xto  ", "  te xto"],
    ["  \tte xto  ", "  \tte xto"],
    ["  \nte xto  ", "  \nte xto"],
    ["  \rte xto  ", "  \rte xto"],
    ["  \tte xto\t\n\r  ", "  \tte xto\t\n\r"],
    ["  🧉😀\tte xto\t\r\n  ", "  🧉😀\tte xto\t\r\n"]
];
//# sourceMappingURL=rtrim-cases.js.map