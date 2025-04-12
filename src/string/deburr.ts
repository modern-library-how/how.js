/**
 * 문자열에서 악센트나 특수 문자를 제거합니다.
 * NFD(Normalization Form Canonical Decomposition)를 사용하여 문자열을 분해한 후,
 * 결합된 악센트 문자를 제거합니다.
 *
 * 예: "déjà vu" → "deja vu"
 *
 * @param str 변환할 문자열
 * @returns 악센트와 특수 문자가 제거된 문자열
 */
export function deburr(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
