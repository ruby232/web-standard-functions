import { rtrim } from "../rtrim";
import { testCases } from "./rtrim-cases";

describe("rtrim operation", () => {
  for (const t of testCases) {
    it(`should rtrim "${t[0]}" to equal "${t[1]}"`, () => {
      expect(rtrim(t[0])).toBe(t[1]);
    });
  }
});
