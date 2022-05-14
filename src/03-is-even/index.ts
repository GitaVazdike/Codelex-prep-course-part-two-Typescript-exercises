/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

const evenNumbers: string[] = ["0", "2", "4", "6", "8"];

function isEven(number: number): boolean {
  const lastDigit: string = number.toString().split(".")[0].slice(-1);
  return evenNumbers.includes(lastDigit);
}

export { isEven };
