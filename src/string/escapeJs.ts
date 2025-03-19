/**
 * JavaScript 문자열을 escape 처리하는 함수입니다.
 *
 * 다음 문자를 escape 처리합니다:
 * - 역슬래시 (\) → \\\\
 * - 작은따옴표 (') → \\\'
 * - 큰따옴표 (") → \\"
 * - 백틱 (`) → \\`
 * - 달러 기호 ($) → \\$
 * - 줄바꿈 (\n) → \\n
 * - 캐리지 리턴 (\r) → \\r
 *
 * @param str 변환할 문자열
 * @returns escape 처리된 문자열
 */
export function escapeJs(str: string): string {
  let escaped = '';
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '\\':
        escaped += '\\\\';
        break;
      case "'":
        escaped += "\\'";
        break;
      case '"':
        escaped += '\\"';
        break;
      case '`':
        escaped += '\\`';
        break;
      case '$':
        escaped += '\\$';
        break;
      case '\n':
        escaped += '\\n';
        break;
      case '\r':
        escaped += '\\r';
        break;
      default:
        escaped += str[i];
    }
  }
  return escaped;
}
