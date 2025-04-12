type Pad = {
  str: string;
  length: number;
  char?: string;
};

/**
 * 문자열의 시작에 특정 문자를 추가해 길이를 맞춥니다.
 * 예: padStart({ str: 'abc', length: 5, char: '.' }) → '..abc'
 *
 * @param param0 패딩에 필요한 정보 (원본 문자열, 목표 길이, 추가할 문자)
 * @returns 패딩이 추가된 문자열
 */
export function padStart({ str, length, char = ' ' }: Pad): string {
  if (str.length >= length || char === '') {
    return str;
  }

  let padStr: string = '';
  while (padStr.length < length - str.length) {
    padStr += char;
  }
  padStr = padStr.slice(0, length - str.length);

  return padStr + str;
}

// 예시 실행
// padStart({ str: 'abc', length: 6, char: 'aaa' }); // "aaaabc"
