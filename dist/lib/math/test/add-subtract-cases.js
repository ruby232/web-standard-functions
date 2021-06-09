"use strict";
// test[0] + test[1] = test[2]
// test[2] - test[0] = test[1]
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCases = void 0;
// Add and subtract test cases
exports.testCases = [
  ["1", "2", "3"],
  ["1.1", "2.2", "3.3"],
  ["0.0001", "0.0002", "0.0003"],
  ["0.00000001", "0.00000002", "0.00000003"],
  ["0.00000000001", "0.00000000002", "0.00000000003"],
  ["1000", "2000", "3000"],
  ["10000000000000000000", "1", "10000000000000000001"],
  ["0.999999999999999999999999", "0.000000000000000000000001", "1"],
  [
    "0.999999999999999999999999",
    "-0.000000000000000000000001",
    "0.999999999999999999999998",
  ],
  ["1", "-1", "0"],
  ["0.1", "-0.1", "0"],
  ["0.0000000000001", "-0.0000000000001", "0"],
];
//# sourceMappingURL=add-subtract-cases.js.map
