/**
 * 선택한 요소의 마지막 index 찾기
 *
 * @remarks
 * 배열이 정렬되어 있으면 이진 탐색을 사용하여 효율적으로 마지막 인덱스를 찾고,
 * 그렇지 않으면 기본 배열 메서드인 lastIndexOf를 사용합니다.
 *
 * @param arr - 검색 대상 배열 (예: [1, 2, 2, 3])
 * @param i - 찾고자 하는 요소 (예: 2)
 * @returns 요소의 마지막 인덱스 (예: 2) 또는 배열에 해당 요소가 없으면 -1을 반환합니다.
 *
 * @example
 * ```ts
 * sortedLastIndexOf([1, 2, 2, 3], 2); // => 2
 * ```
 */

import { isSorted } from './isSorted';

export function sortedLastIndexOf<T extends number | string>(arr: T[], i: T) {
  const sorted = isSorted<T>(arr as T[] & (number[] | string[]));
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
