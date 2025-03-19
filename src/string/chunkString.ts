/**
 * 문자열을 원하는 크기만큼 구분자로 나눠주는 함수
 *
 * @remarks
 * 이 함수는 입력된 문자열을 지정된 길이(splitNum)로 나눈 후, 각 조각을 주어진 구분자(separator)로 연결하여 반환합니다.
 * splitNum이 0 이하이거나 유효한 정수가 아니면 원본 문자열을 그대로 반환합니다.
 * 문자열 길이가 splitNum보다 작거나 같다면 원본 문자열을 반환합니다.
 *
 * @param str - 입력 문자열 (예: "abcdefghij")
 * @param splitNum - 문자열을 나눌 크기 (예: 3)
 * @param separator - 각 부분을 연결할 구분자 (예: "-")
 * @returns 나눠진 결과 문자열 (예: "abc-def-ghi-j")
 *
 * @example
 * ```ts
 * chunkString("abcdefghij", 3, "-");
 * // => "abc-def-ghi-j"
 * ```
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
