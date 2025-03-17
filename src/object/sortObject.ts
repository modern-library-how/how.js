/**
 * 주어진 키를 기준으로 배열 안 객체를 정렬하는 함수
 *
 * @param arr - 객체가 포함된 배열
 * @param key - 정렬을 진행할 기준 key
 * @param ascending - 오름차순 여부(false일 경우 내림차순 정렬)
 * @returns 정렬이 된 배열
 */

export function sortObject<T extends Record<string, string | number>>(
  arr: T[],
  key: keyof T,
  ascending: boolean = true
): T[] {
  if (arr.length === 0) {
    return [];
  }

  return arr.sort((a, b) => {
    if (typeof a[key] === 'string' && typeof b[key] === 'string') {
      return ascending ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]);
    }

    return ascending ? (a[key] > b[key] ? 1 : -1) : b[key] > a[key] ? 1 : -1;
  });
}
