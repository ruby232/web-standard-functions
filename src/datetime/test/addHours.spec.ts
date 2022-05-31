import { addHours } from "../addHours";

export const testCases: Array<[Date, number, Date]> = [
  [new Date(2019, 8, 28, 2, 1, 1, 0), 1, new Date(2019, 8, 28, 3, 1, 1, 0)],
  [new Date(2019, 8, 28, 2, 1, 1, 0), 10, new Date(2019, 8, 28, 12, 1, 1, 0)],
  [new Date(2019, 8, 28, 2, 1, 1, 0), 6, new Date(2019, 8, 28, 8, 1, 1, 0)],
  [new Date(2019, 8, 28, 2, 1, 1, 0), 24, new Date(2019, 8, 29, 2, 1, 1, 0)]
];

describe("addHours operation", () => {
  for (const t of testCases) {
    it(`addHours for ${t[0]} add ${t[1]} should be equal to ${t[2]}`, () => {
      expect(addHours(t[0], t[1])).toEqual(t[2]);
    });
  }
});
