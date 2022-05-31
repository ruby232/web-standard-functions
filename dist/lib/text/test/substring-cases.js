"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCases = void 0;
exports.testCases = [
    ["Textoáéíóú", 2, 1, "e"],
    ["😀áéí😀óú😀", 1, 2, "😀á"],
    ["Textoáéíóú", 2, undefined, "extoáéíóú"],
    ["Textoáéíóú", 50, undefined, ""]
];
//# sourceMappingURL=substring-cases.js.map