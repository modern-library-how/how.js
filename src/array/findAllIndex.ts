/**
 * 배열에서 주어진 값과 똑같은 모든 값의 인덱스를 반환하는 함수
 *
 * @param arr - 주어진 배열
 * @param equalValue - 찾기 원하는 값
 * @returns 인덱스가 담긴 배열
 */

export function findAllIndex<T>(arr: Array<T>, equalValue: T): number[] {
  if (Number.isNaN(equalValue)) {
    return [];
  }

  const indexArr: number[] = arr.map((value, idx) => (value === equalValue ? idx : -1)).filter((idx) => idx !== -1);
  return indexArr;
}
