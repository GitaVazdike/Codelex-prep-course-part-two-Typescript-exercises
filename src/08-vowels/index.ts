/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */
const VOWELS: string[] = ["a", "e", "i", "o", "u"];

function vowels(string: string): number {
  const stringAsArray: string[] = string.toLowerCase().split("");
  let counter: number = 0;
  stringAsArray.forEach((letter) => {
    if (VOWELS.includes(letter)) {
      counter++;
    }
  });
  return counter;
}

export { vowels };
