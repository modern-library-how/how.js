/**
 * 주어진 숫자가 홀수인지 확인하는 함수입니다.
 *
 * @remarks
 * 이 함수는 정수이며 유한한 숫자만 유효한 입력으로 처리합니다.
 * 실수 또는 무한대 값이 입력되면 `false`를 반환합니다.
 *
 * @param numberToCheck - 홀수 여부를 확인할 숫자.
 * @returns 홀수이면 `true`, 그렇지 않으면 `false`.
 *
 * @example
 * ```ts
 * console.log(isOdd(5)); // true
 * console.log(isOdd(8)); // false
 * console.log(isOdd(3.5)); // false
 * console.log(isOdd(Infinity)); // false
 * ```
 */
export function isOdd(numberToCheck: number): boolean {
  if (!Number.isInteger(numberToCheck)) return false;
  if (!Number.isFinite(numberToCheck)) return false;
  return numberToCheck % 2 !== 0;
}
