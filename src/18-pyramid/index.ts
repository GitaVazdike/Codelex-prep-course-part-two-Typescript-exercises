/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(number: number): void {
  for (let i = 1; i <= number; i++) {
    const spaces: string = " ".repeat(number - i);
    console.log(spaces + "#".repeat(i * 2 - 1) + spaces);
  }
}

export { pyramid };
