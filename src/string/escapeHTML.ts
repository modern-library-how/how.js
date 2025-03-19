/**
 * 문자열에서 HTML 엔티티로 변환합니다.
 * 예: "<div>" → "&lt;div&gt;"
 *
 * @param str 변환할 문자열
 * @returns HTML 엔티티로 변환된 문자열
 */
export function escapeHTML(str: string): string {
  let escaped = '';
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '&':
        escaped += '&amp;';
        break;
      case '<':
        escaped += '&lt;';
        break;
      case '>':
        escaped += '&gt;';
        break;
      case '"':
        escaped += '&quot;';
        break;
      case "'":
        escaped += '&#39;';
        break;
      default:
        escaped += str[i];
    }
  }
  return escaped;
}
