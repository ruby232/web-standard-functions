import { isMatch } from "../isMatch";
import { testCases } from "./ismatch-cases";

describe("isMatch operation", () => {
  for (const t of testCases) {
    it(`"${t[0]}" matches with "${t[1]}" should be equal to "${t[2]}"`, () => {
      expect(isMatch(t[0], t[1])).toBe(t[2]);
    });
  }
});
