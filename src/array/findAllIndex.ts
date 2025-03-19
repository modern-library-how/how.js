/**
 * 배열에서 주어진 값과 엄격하게(===) 일치하는 모든 요소의 인덱스를 반환하는 함수
 *
 * @remarks
 * 이 함수는 배열 내에서 주어진 값과 동일한 모든 요소의 인덱스를 찾아 반환합니다.
 * 만약 찾고자 하는 값이 NaN인 경우, 비교가 불가능하여 빈 배열을 반환합니다.
 *
 * @param arr - 검색 대상 배열 (예: [1, 2, 3, 2, 4])
 * @param equalValue - 찾고자 하는 값 (예: 2)
 * @returns 값과 일치하는 모든 요소의 인덱스를 담은 배열 (예: [1, 3])
 *
 * @example
 * ```ts
 * findAllIndex([1, 2, 3, 2, 4], 2); // => [1, 3]
 * ```
 */

export function findAllIndex<T>(arr: Array<T>, equalValue: T): number[] {
  if (Number.isNaN(equalValue)) {
    return [];
  }

  const indexArr: number[] = arr.map((value, idx) => (value === equalValue ? idx : -1)).filter((idx) => idx !== -1);
  return indexArr;
}
