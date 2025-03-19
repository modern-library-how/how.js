/**
 * 이스케이프된 HTML 엔티티를 원래 문자열로 복원합니다.
 * 예: unescapeHtml('&lt;div&gt;') → '<div>'
 *
 * 내부적으로 정규 표현식을 사용하여 /&(amp|lt|gt|quot|#39);/g 패턴에 맞는 부분을
 * 미리 정의한 map 객체의 값으로 변환합니다.
 *
 * @param str 복원할 문자열
 * @returns 복원된 문자열
 */
export function unescapeHTML(str: string): string {
  const map: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };
  return str.replace(/&(amp|lt|gt|quot|#39);/g, (match) => map[match]);
}
