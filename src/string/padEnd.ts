// 문자열의 끝에 특정 문자를 추가해 길이를 맞춤 ('abc'.padEnd(5, '.') → 'abc..')
export function padEnd(str: string, length: number, chars = ' '): string {
  let padded = str;
  while (padded.length < length) {
    for (let i = 0; i < chars.length && padded.length < length; i++) {
      padded += chars[i];
    }
  }
  return padded;
}
