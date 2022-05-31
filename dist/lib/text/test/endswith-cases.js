"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCases = void 0;
// startsWith test cases
exports.testCases = [
    ["Peñarol Campeón del Siglo XX", "XX", true],
    ["Peñarol Campeón del Siglo XX 😀", "😀", true],
    ["Peñarol Campeón del Siglo XX 😀", "XX 😀", true],
    ["😀Peñarol Campeón del Siglo XX 😀", "😀P", false],
    ["Peñarol Campeón del Siglo XX", "Campeón del Siglo XX", true],
    ["Peñarol Campeón del Siglo XX", "Fuga", false]
];
//# sourceMappingURL=endswith-cases.js.map