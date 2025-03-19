/**
 * 배열이 정렬되어 있는지 확인하는 함수
 *
 * @remarks
 * 이 함수는 주어진 배열이 오름차순 또는 내림차순으로 정렬되어 있는지를 검사합니다.
 * 배열이 비어있거나 하나의 요소만 포함되어 있을 경우, 정렬된 것으로 간주됩니다.
 *
 * @param arr - 정렬 여부를 확인할 배열 (예: [1, 2, 3] 또는 [3, 2, 1])
 * @returns 배열이 정렬되어 있다면 true, 정렬되어 있지 않다면 false
 *
 * @example
 * ```ts
 * isSorted([1, 2, 3]); // => true (오름차순)
 * isSorted([3, 2, 1]); // => true (내림차순)
 * isSorted([1, 3, 2]); // => false
 * ```
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
