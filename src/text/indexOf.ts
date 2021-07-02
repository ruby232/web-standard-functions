import { length } from "./length";

/**
 * Return position for first pattern occurence.
 * @param {string} target
 * @param {string} pattern
 * @param {number} from
 * @return number
 */

export const indexOf = (
  target: string,
  pattern: string,
  from: number = 1
): number => {
  if (from < 1 || from > length(target)) return 0;
  return target.indexOf(pattern, from - 1) + 1;
};
