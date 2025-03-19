/**
 * 문자열을 camelCase 형식으로 변환합니다.
 * 첫 번째 단어는 모두 소문자로 변환하고,
 * 이후 단어는 첫 글자만 대문자로 변환합니다.
 *
 * 예: "example text" → "exampleText"
 *
 * @param str 변환할 문자열
 * @returns camelCase로 변환된 문자열
 */
export function camelCase(str: string): string {
  return str
    .trim()
    .split(/\s+/)
    .map((word, i) => (i === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase()))
    .join('');
}
