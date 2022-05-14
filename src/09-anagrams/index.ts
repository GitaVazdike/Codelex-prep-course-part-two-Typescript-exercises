/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of each other.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */
function tidyUpString(string: string): string {
  return string
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split("")
    .sort()
    .join("");
}
function anagrams(stringA: string, stringB: string): boolean {
  return tidyUpString(stringA) === tidyUpString(stringB);
}

export { anagrams };
