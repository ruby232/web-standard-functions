import { add } from "../add";
import { testCases } from "./add-subtract-cases";

describe("add operation", () => {
  for (const t of testCases) {
    it(`should add ${t[0]} + ${t[1]} to equal ${t[2]}`, () => {
      expect(add(t[0], t[1])).toBe(t[2]);
    });
  }
});
