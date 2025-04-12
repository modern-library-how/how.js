/**
 * 문자열을 특정 길이에서 잘라서 끝에 지정된 문자열(truncation)을 추가합니다.
 * 예: truncate('abcdefg', 4) → 'abcd...'
 *
 * @param str 원본 문자열
 * @param length 유지할 문자 수 (이후에 truncation을 추가)
 * @param truncation 잘린 뒤에 추가할 문자열 (기본값: '...')
 * @returns 잘린 문자열과 truncation이 결합된 결과 문자열
 */
export const truncate = (str: string, length: number, truncation: string = '...'): string => {
  return str.length > length ? str.slice(0, length) + truncation : str;
};
