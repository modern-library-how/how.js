/**
 * 주어진 숫자가 짝수인지 확인하는 함수입니다.
 *
 * @remarks
 * 이 함수는 정수이며 유한한 숫자만 유효한 입력으로 처리합니다.
 * 실수 또는 무한대 값이 입력되면 `false`를 반환합니다.
 *
 * @param numberToCheck - 짝수 여부를 확인할 숫자.
 * @returns 짝수이면 `true`, 그렇지 않으면 `false`.
 *
 * @example
 * ```ts
 * console.log(isEven(4)); // true
 * console.log(isEven(7)); // false
 * console.log(isEven(3.5)); // false
 * console.log(isEven(Infinity)); // false
 * ```
 */
export function isEven(numberToCheck: number): boolean {
  if (!Number.isInteger(numberToCheck) || !Number.isFinite(numberToCheck)) return false;
  return numberToCheck % 2 === 0;
}
