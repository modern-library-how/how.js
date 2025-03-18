/**
 * 배열에서 주어진 값과 가장 근접한 값을 반환하는 함수
 * diff가 똑같을 경우 더 앞서 주어진 원소가 반환된다.
 *
 * @param arr - 주어진 배열
 * @param value - 주어진 값
 * @returns 주어진 값과 가장 근접한 배열의 값
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
