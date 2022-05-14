/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(integer: number): number {
  const sign: number = Math.sign(integer);
  const reversedString: string = integer
    .toString()
    .split("")
    .reverse()
    .join("");
  return parseInt(reversedString) * sign;
}

export { reverse };
