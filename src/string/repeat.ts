/**
 * 문자열을 지정된 횟수만큼 반복합니다.
 * 예: repeat('abc', 3) → 'abcabcabc'
 *
 * @param str 반복할 문자열
 * @param count 반복 횟수
 * @returns 반복된 문자열
 */
export function repeat(str: string, count: number): string {
  let repeated = '';
  for (let i = 0; i < count; i++) {
    repeated += str;
  }
  return repeated;
}
