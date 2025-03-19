/**
 * 배열에서 찾고자 하는 원소의 N번째 위치의 인덱스를 반환하는 함수
 *
 * @remarks
 * 이 함수는 배열 내에서 지정된 원소가 등장하는 순서를 기준으로,
 * N번째 등장하는 원소의 인덱스를 반환합니다.
 * 만약 searchIdx가 0 이하이거나, 배열 내에 해당 원소가 N번 등장하지 않으면 NaN을 반환합니다.
 *
 * @param arr - 검색 대상 배열 (예: ['a', 'b', 'a', 'c', 'a'])
 * @param searchElement - 찾고자 하는 원소 (예: 'a')
 * @param searchIdx - 몇 번째로 등장한 원소의 인덱스를 반환할지 결정 (예: 2)
 * @returns 조건을 만족하는 원소의 인덱스 (예: 2) 또는 해당 원소가 충분히 등장하지 않으면 NaN
 *
 * @example
 * ```ts
 * findNth(['a', 'b', 'a', 'c', 'a'], 'a', 2); // => 2
 * ```
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
