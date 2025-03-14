/**
 * 문자열을 원하는 크기만큼 구분자로 나눠주는 함수
 *
 * @param {string} str
 * @param {number} splitNum
 * @param {string} separator
 * @returns
 */

export function chunkString(str: string, splitNum: number, separator: string) {
  if (splitNum <= 0) return str;
  if (!isFinite(splitNum)) return str;
  if (str.length <= splitNum) return str;

  const result: string[] = [];

  for (let i = 0; i < str.length; i += splitNum) {
    result.push(str.slice(i, i + splitNum));
  }

  return result.join(separator);
}
