// startsWith test cases
export var testCases = [
    ["Peñarol Campeón del Siglo XX", "Peñarol", true],
    ["Peñarol Campeón del Siglo XX 😀", " del", false],
    ["Peñarol Campeón del Siglo XX 😀", "XX 😀", false],
    ["😀Peñarol Campeón del Siglo XX 😀", "😀P", true],
    ["Peñarol Campeón del Siglo XX", "Campeón del Siglo XX", false],
    ["Peñarol Campeón del Siglo XX", "Fuga", false]
];
//# sourceMappingURL=startswith-cases.js.map