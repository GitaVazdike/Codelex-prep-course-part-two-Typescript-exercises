/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(string: string): string {
  let maxCount: number = 0;
  let maxCharacter: string = "";
  let stringAsArray: string[] = string.split("");
  stringAsArray.forEach((character) => {
    if (string.split(character).length > maxCount) {
      maxCount = string.split(character).length;
      maxCharacter = character;
    }
  });
  return maxCharacter;
}

export { maxChar };
