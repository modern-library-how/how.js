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
  let minDiff = Math.abs(arr[0] - value);

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

console.log(findNearest([10, 20, 30, 40], 25));
console.log(findNearest([-10, -5, 0, 5, 10], -3));
console.log(findNearest([42], 10));
console.log(findNearest([1.2, 3.5, 7.8], 5.0));
