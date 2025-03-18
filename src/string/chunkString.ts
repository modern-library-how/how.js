/**
 * 문자열을 원하는 크기만큼 구분자로 나눠주는 함수
 *
 * @param str - 입력 문자열
 * @param splitNum - 글자를 나눌 단위 숫자
 * @param separator - 구분자 문자열
 * @returns 나눠진 결과 문자열
 */

export function chunkString(str: string, splitNum: number, separator: string): string {
  const strLength = str.length;

  if (splitNum <= 0) return str;
  if (!isFinite(splitNum) || !Number.isInteger(splitNum)) return str;
  if (strLength <= splitNum) return str;

  const result: string[] = [];

  for (let i = 0; i < strLength; i += splitNum) {
    result.push(str.slice(i, i + splitNum));
  }

  return result.join(separator);
}
