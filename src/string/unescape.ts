// 이스케이프된 HTML 엔티티를 원래 문자열로 복원 (&lt;div&gt; → <div>)
export function unescapeHtml(str: string): string {
  const map: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };
  return str.replace(/&(amp|lt|gt|quot|#39);/g, (match) => map[match]);
}

// 정규 표현식에서 사용되는 특수 문자를 /&(amp|lt|gt|quot|#39);/g 로 찾아서 각 문자에 해당하는 값을 map 객체에서 찾아서 변환
// &amp; → &

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

// 정규 표현식을 사용하여 이스케이프된 문자열을 원래 문자열로 변환
// \\ → \ 로 변환
