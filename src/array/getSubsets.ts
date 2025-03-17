/**
 * 배열의 모든 부분집합을 반환하는 함수
 *
 * @param arr - 주어진 배열
 * @returns 배열의 부분집합
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
