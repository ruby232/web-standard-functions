/**
 * Returns a string represantation of a date. dd[/]mm[/]yyyy
 * @return Date
 */
import { isEmpty } from "./isEmpty";
export var toString = function (targetDate) {
  return isEmpty(targetDate)
    ? ""
    : targetDate.getDate() +
        "/" +
        (targetDate.getMonth() + 1) +
        "/" +
        targetDate.getFullYear();
};
//# sourceMappingURL=toString.js.map
