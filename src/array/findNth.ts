/**
 * 배열에서 찾고자 하는 원소의 N번째 위치의 index를 반환하는 함수
 *
 * @param arr - 주어진 배열
 * @param searchElement - 찾고자 하는 원소
 * @param searchIdx - 원소의 index (몇번째로 등장하는 원소의 index가 알고 싶은지)
 * @returns 조건을 만족하는 원소의 index
 */

export function findNth<T>(arr: Array<T>, searchElement: T, searchIdx: number = 1): number {
  if (searchIdx <= 0) {
    return NaN;
  }

  let count: number = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement) {
      count++;
    }

    if (count === searchIdx) {
      return i;
    }
  }

  return NaN;
}
