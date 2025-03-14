// 문자열의 시작에 특정 문자를 추가해 길이를 맞춤 ('abc'.padStart(5, '.') → '..abc')

type pad = {
  str: string;
  length: number;
  char: string;
};

export function padStart({ str, length, char = ' ' }: pad): string {
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

//"Example"
padStart({ str: 'abc', length: 6, char: 'aaa' }); // "aaaabc"
