import { rtrim } from "./rtrim";
import { ltrim } from "./ltrim";

export const trim = (s: string): string => {
  return rtrim(ltrim(s));
};
