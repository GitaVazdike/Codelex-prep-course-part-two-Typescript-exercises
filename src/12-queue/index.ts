/**
 * Queue
 *
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */

class Queue {
  numbers: number[] = [];

  add(n: number): void {
    this.numbers.push(n);
  }

  remove(): number | undefined {
    return this.numbers.shift();
  }
}

export { Queue };
