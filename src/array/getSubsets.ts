/**
 * 배열의 모든 부분집합을 반환하는 함수
 *
 * @remarks
 * 이 함수는 주어진 배열의 모든 가능한 부분집합을 생성합니다.
 * 생성되는 부분집합은 빈 배열부터 시작하여 전체 배열을 포함하는 배열까지 모두 포함됩니다.
 *
 * @param arr - 부분집합을 생성할 대상 배열 (예: [1, 2, 3])
 * @returns 주어진 배열의 모든 부분집합을 포함하는 배열 (예: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])
 *
 * @example
 * ```ts
 * getSubsets([1, 2, 3]);
 * // => [ [], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3] ]
 * ```
 */

export function getSubsets<T>(arr: T[]): T[][] {
  const N: number = arr.length;
  const subsetArr: T[][] = [];
  for (let i = 0; i < 1 << N; i++) {
    const subset: T[] = [];
    for (let j = 0; j < N; j++) {
      if (i & (1 << j)) {
        subset.push(arr[j]);
      }
    }
    subsetArr.push(subset);
  }
  return subsetArr;
}
