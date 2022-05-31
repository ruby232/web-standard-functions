"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCases = void 0;
// contains test cases
exports.testCases = [
    ["Peñarol Campeón del Siglo XX", "Peñarol", true],
    ["Peñarol Campeón del Siglo XX 😀", " del", true],
    ["Peñarol Campeón del Siglo XX 😀", "del", true],
    ["Peñarol Campeón del Siglo XX 😀", "XX 😀", true],
    ["Peñarol Campeón del Siglo XX 😀", "Decano", false],
    ["Peñarol Campeón del Siglo XX", "Fuga", false]
];
//# sourceMappingURL=contains-cases.js.map