import isSorted from './isSorted';

/**
 * 선택한 요소의 마지막 index찾기
 * @param {Array} arr
 * @param {string}i
 * @returns {number}
 */

export default function sortedLastIndexOf<T>(arr: T[], i: T) {
  const sorted = isSorted(arr);
  if (sorted) {
    let start: number = 0;
    let end: number = arr.length - 1;
    let lastIndex: number = -1;

    while (start <= end) {
      let mid: number = Math.floor((start + end) / 2);

      if (i === arr[mid]) {
        lastIndex = mid;
        start = mid + 1;
      } else if (i < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return lastIndex;
  }
  return arr.lastIndexOf(i);
}
