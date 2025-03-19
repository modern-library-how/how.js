/**
 *
 * @param {Array} arr
 * @returns {boolean}
 */

export function isSorted<T extends number | string>(arr: T[] & (number[] | string[])): boolean {
  let isAscending = true;
  let isDescending = true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) isAscending = false;
    if (arr[i - 1] > arr[i]) isDescending = false;

    if (!isAscending && !isDescending) return false;
  }
  return true;
}
