/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(string: string): object {
    const counts = Object.create(null);
    const tidyUpArray: string[] = string
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ")
      .split(" ");

    tidyUpArray.forEach((word: string) => {
      if (counts[word]) {
        counts[word] += 1;
      } else {
        counts[word] = 1;
      }
    });

    return counts;
  }
}

export { Words };
