import { addMinutes } from "../addMinutes";

export const testCases: Array<[Date, number, Date]> = [
  [new Date(2019, 8, 28, 2, 1, 1, 0), 1, new Date(2019, 8, 28, 2, 2, 1, 0)],
  [new Date(2019, 8, 28, 2, 1, 1, 0), 10, new Date(2019, 8, 28, 2, 11, 1, 0)],
  [new Date(2019, 8, 28, 2, 1, 1, 0), 6, new Date(2019, 8, 28, 2, 7, 1, 0)],
  [new Date(2019, 8, 28, 2, 1, 1, 0), 1440, new Date(2019, 8, 29, 2, 1, 1, 0)],
];

describe("addMinutes operation", () => {
  for (const t of testCases) {
    it(`addMinutes for ${t[0]} add ${t[1]} should be equal to ${t[2]}`, () => {
      expect(addMinutes(t[0], t[1])).toEqual(t[2]);
    });
  }
});
