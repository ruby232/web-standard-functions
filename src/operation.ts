import BigNumber from "bignumber.js";

function operation(
  operationName: string,
  operand1: string,
  operand2: string
): string {
  BigNumber.config({
    FORMAT: {
      decimalSeparator: ".",
      groupSeparator: ","
    }
  });

  const operand1BigN = new BigNumber(operand1);
  const operand2BigN = new BigNumber(operand2);

  return operand1BigN[operationName](operand2BigN).toFormat();
}

export function defineOperation(
  operationName: string
): (operand1: string, operand2: string) => string {
  return (operand1: string, operand2: string): string =>
    operation(operationName, operand1, operand2);
}
