"use strict";
// test[0] ^ test[1] = test[2]
// test[2].sqrt(test[1]) = test[0]
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCases = void 0;
// pow and sqrt test cases
exports.testCases = [
  ["1", "2", "1"],
  ["1.1", "2", "1.21"],
  ["0.0001", "3", "0.000000000001"],
  ["-2", "2", "4"],
  ["2", "0", "1"],
  ["10000000000000000000", "2", "100000000000000000000000000000000000000"],
  ["2", "-1", "0.5"],
  ["1000", "-5", "0.000000000000001"],
];
//# sourceMappingURL=pow-sqrt-cases.js.map
