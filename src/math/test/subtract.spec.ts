import { subtract } from "../subtract";
import { testCases } from "./add-subtract-cases";

describe("add operation", () => {
  for (const t of testCases) {
    it(`should subtract ${t[2]} - ${t[0]} to equal ${t[1]}`, () => {
      expect(subtract(t[2], t[0])).toBe(t[1]);
    });
  }
});
