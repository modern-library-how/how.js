/**
 * 배열에서 주어진 값과 가장 근접한 값을 반환하는 함수
 *
 * @remarks
 * 이 함수는 주어진 배열에서 기준 값과의 차이가 가장 작은 값을 찾아 반환합니다.
 * 차이가 동일할 경우, 배열에서 더 앞쪽에 위치한 원소가 반환됩니다.
 *
 * @param arr - 검색 대상 배열 (예: [1, 5, 9, 15])
 * @param value - 기준 값 (예: 10)
 * @returns 주어진 값과 가장 근접한 배열의 값 (예: 9)
 *
 * @example
 * ```ts
 * findNearest([1, 5, 9, 15], 10); // => 9
 * ```
 */

export function findNearest(arr: number[], value: number): number | undefined {
  if (arr.length === 0) {
    return undefined;
  }

  let nearestNum = arr[0];
  let minDiff = Math.abs(nearestNum - value);

  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - value);
    if (diff < minDiff) {
      nearestNum = arr[i];
      minDiff = diff;
    }

    if (minDiff === 0) {
      return nearestNum;
    }
  }
  return nearestNum;
}
