"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCases = void 0;
exports.testCases = [
    ["Peñarol Campeón del Siglo XX", "Siglo", true],
    ["Peñarol Campeón del Siglo XX", /Siglo/, true],
    ["Peñarol Campeón del Siglo XX", "$Peñarol", false],
    ["Peñarol Campeón del Siglo XX", /$Peñarol/, false],
    ["Peñarol Campeón del Siglo XX", "^Peñarol", true],
    ["Peñarol Campeón del Siglo XX", /^Peñarol/, true],
    ["Peñarol Campeón del Siglo XX", "Bolso", false],
    ["Peñarol Campeón del Siglo XX", /Bolso/, false]
];
//# sourceMappingURL=ismatch-cases.js.map