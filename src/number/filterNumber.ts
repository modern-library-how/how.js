/**
 * 주어진 문자열에서 숫자만 필터링하여 반환하는 함수입니다.
 *
 * @remarks
 * 이 함수는 문자열에서 숫자가 아닌 모든 문자를 제거한 후,
 * 숫자로 변환하여 반환합니다. 만약 숫자가 하나도 없다면 'NaN'을 반환합니다.
 *
 * @param value - 숫자를 추출할 문자열.
 * @returns 숫자로 변환된 값. 유효한 숫자가 없으면 'NaN'.
 *
 * @example
 * ```ts
 * console.log(filterNumber("abc123def")); // 123
 * console.log(filterNumber("no numbers")); // NaN
 * ```
 */

export function filterNumber(value: string): number {
  let regex: RegExp = /[^0-9]/g;

  const removedStrValue = value.replace(regex, '');

  return removedStrValue.length === 0 ? NaN : Number(removedStrValue);
}
