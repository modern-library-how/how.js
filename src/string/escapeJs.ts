// JavaScript 문자열을 escape 처리하는 함수

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
