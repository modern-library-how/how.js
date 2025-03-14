// 문자열에서 HTML 엔티티로 변환 (<div> → &lt;div&gt;)
export function escapeHtml(str: string): string {
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
