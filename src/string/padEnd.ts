/**
 * 문자열의 끝에 특정 문자를 추가해 길이를 맞춥니다.
 * 예: 'abc'.padEnd(5, '.') → 'abc..'
 *
 * @param str 원본 문자열
 * @param length 최종 문자열의 길이
 * @param chars 추가할 문자열 (기본값: ' ')
 * @returns 패딩이 추가된 문자열
 */
export function padEnd(str: string, length: number, chars = ' '): string {
  let padded = str;
  while (padded.length < length) {
    for (let i = 0; i < chars.length && padded.length < length; i++) {
      padded += chars[i];
    }
  }
  return padded;
}
