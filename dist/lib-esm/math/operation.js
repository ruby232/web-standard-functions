import BigNumber from "bignumber.js";
/**
 * Returns a new binary operation called `operationName` with operands `operand1` and `operand2`
 * @param operationName Name of the BigNumber mathematical binary operation
 */
export function defineBinaryOperation(operationName) {
    return function (operand1, operand2) { return binaryOperation(operationName, operand1, operand2); };
}
/**
 * Returns a new unary operation called `operationName` with one operand called `operand`
 * @param operationName Name of the BigNumber mathematical unary operation
 */
export function defineUnaryOperation(operationName) {
    return function (operand) {
        return unaryOperation(operationName, operand);
    };
}
/**
 * Performs a BigNumber's binary operation called `operationName` on operands `operand1` and `operand2`
 * @param operationName Name of the BigNumber mathematical operation
 * @param operand1 First operand
 * @param operand2 Second operand
 */
function binaryOperation(operationName, operand1, operand2) {
    intiBigNumberConfig();
    var operand1BigN = new BigNumber(operand1);
    var operand2BigN = new BigNumber(operand2);
    return operand1BigN[operationName](operand2BigN).toFormat();
}
/**
 * Performs a BigNumber's unary operation called `operationName` on operand `operand`
 * @param operationName Name of the BigNumber mathematical operation
 * @param operand Operation operand
 */
function unaryOperation(operationName, operand) {
    intiBigNumberConfig();
    var operandBigN = new BigNumber(operand);
    return operandBigN[operationName]().toFormat();
}
function intiBigNumberConfig() {
    BigNumber.config({
        FORMAT: {
            decimalSeparator: ".",
            groupSeparator: ","
        }
    });
}
//# sourceMappingURL=operation.js.map