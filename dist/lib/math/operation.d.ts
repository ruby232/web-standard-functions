/**
 * Returns a new binary operation called `operationName` with operands `operand1` and `operand2`
 * @param operationName Name of the BigNumber mathematical binary operation
 */
export declare function defineBinaryOperation(operationName: string): (operand1: string | number, operand2: string | number) => string | number;
/**
 * Returns a new unary operation called `operationName` with one operand called `operand`
 * @param operationName Name of the BigNumber mathematical unary operation
 */
export declare function defineUnaryOperation(operationName: string): (operand: string | number) => string | number;
