/**
 *
 * @param {Array} arr
 * @returns {boolean}
 */

export default function isSorted<T>(arr: T[]): boolean {
  const ascending = arr.every((_, i) => i === 0 || arr[i - 1] <= arr[i]);
  const descending = arr.every((_, i) => i === 0 || arr[i - 1] >= arr[i]);

  return ascending || descending;
}
