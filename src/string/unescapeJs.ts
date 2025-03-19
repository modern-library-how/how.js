/**
 * 이스케이프된 JavaScript 문자열을 원래 문자열로 복원합니다.
 * 예: unescapeJs('\\n') → '\n'
 *
 * 정규 표현식을 사용하여 각 escape 시퀀스를 대응하는 문자로 변환합니다.
 * (주의: 정규 표현식은 매우 긴 문자열 처리 시 약간의 성능 이슈가 있을 수 있습니다.)
 *
 * @param str 복원할 문자열
 * @returns 복원된 문자열
 */
export function unescapeJs(str: string): string {
  return str
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\`/g, '`')
    .replace(/\\\$/g, '$')
    .replace(/\\n/g, '\n')
    .replace(/\\r/g, '\r')
    .replace(/\\\\/g, '\\');
}
