/**
 * 주어진 값이 비어있는지 확인합니다.
 * @remark
 *  * 다음 경우 값을 비어있는 것으로 간주합니다:
 * - `null` 또는 `undefined`인 경우.
 * - `NaN`인 경우.
 * - 빈 문자열(`''`) 또는 빈 배열(`[]`)인 경우.
 * - 빈 `Map` 또는 `Set`인 경우.
 * - 속성이 없는 빈 객체(`{}`)인 경우.
 *
 * @param value - 검사할 값
 * @returns 값이 비어있다면 'true', 그렇지 않으면 'false'
 *
 * @example
 * ```ts
 * isEmpty([1,2,3]); // false
 * isEmpty([]); // true
 * ```
 */
export function isEmpty(value: any): boolean {
  if (value === null || value === undefined) return true;
  if (Number.isNaN(value)) return true;
  if (Array.isArray(value) || typeof value === 'string') return value.length === 0;
  if (value instanceof Map || value instanceof Set) return value.size === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}
