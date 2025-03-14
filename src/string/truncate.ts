// 문자열을 특정 길이에서 잘라서 끝에 ... 같은 표시 추가 ('abcdefg'.truncate(4) → 'abcd...')

export const truncate = (str: string, length: number, truncation: string = '...'): string => {
  return str.length > length ? str.slice(0, length - truncation.length) + truncation : str.toString();
};
