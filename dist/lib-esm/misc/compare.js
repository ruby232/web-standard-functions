import { like } from "../text/like";
/**
 * Compares the two operands using the indicated operator
 * @param {any} left First operand
 * @param {string} op Operator
 * @param {any} right Second operand
 * @return true if the comparition succeds, false otherwise
 */
export var compare = function (left, op, right) {
    switch (op) {
        case "<":
            return left < right;
        case "<=":
            return left <= right;
        case ">":
            return left > right;
        case ">=":
            return left >= right;
        case "=":
            return left === right;
        case "<>":
            return left !== right;
        case "like":
            if (typeof left === "string" && typeof right === "string") {
                return like(left, right);
            }
            else {
                return false;
            }
        default:
            return false;
    }
};
//# sourceMappingURL=compare.js.map