// test[0] div test[1] = test[2] + test[3]
// test[0] mod test[1] = test[3]

// idiv and mod test cases
export const testCases = [
  ["3", "2", "1", "1"],
  ["1", "2", "0", "1"],
  ["5", "5", "1", "0"],
  ["1000000000000000000000001", "10", "100000000000000000000000", "1"],
  ["-123456789", "123", "-1003713", "-90"],
  ["-123456789", "-123", "1003713", "-90"]
];
