/**
 * 주어진 키를 기준으로 배열 안 객체를 정렬하는 함수
 *
 * @remarks
 * 이 함수는 객체를 포함하는 배열을 특정 키 값을 기준으로 오름차순 또는 내림차순으로 정렬합니다.
 * 만약 배열이 비어 있다면 빈 배열을 반환합니다.
 *
 * @param arr - 정렬할 객체가 포함된 배열 (예: [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }])
 * @param key - 정렬 기준으로 사용할 객체의 키 (예: 'age')
 * @param isAscending - 오름차순 정렬 여부 (true이면 오름차순, false이면 내림차순; 기본값은 true)
 * @returns 정렬된 객체 배열
 *
 * @example
 * ```ts
 * const people = [
 *   { name: 'Alice', age: 30 },
 *   { name: 'Bob', age: 25 },
 *   { name: 'Charlie', age: 35 }
 * ];
 *
 * // 나이 기준 오름차순 정렬
 * sortObject(people, 'age', true);
 * // => [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 }]
 *
 * // 이름 기준 내림차순 정렬
 * sortObject(people, 'name', false);
 * // => [{ name: 'Charlie', age: 35 }, { name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }]
 * ```
 */
export function sortObject<T extends Record<string, string | number>>(
  arr: T[],
  key: keyof T,
  isAscending: boolean = true
): T[] {
  if (arr.length === 0) {
    return [];
  }

  return arr.sort((a, b) => {
    if (typeof a[key] === 'string' && typeof b[key] === 'string') {
      return isAscending ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]);
    }

    return isAscending ? (a[key] > b[key] ? 1 : -1) : b[key] > a[key] ? 1 : -1;
  });
}
