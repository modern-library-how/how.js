// 문자열을 지정된 횟수만큼 반복 ('abc'.repeat(3) → 'abcabcabc')

export function repeat(str: string, count: number): string {
  let repeated = '';
  for (let i = 0; i < count; i++) {
    repeated += str;
  }
  return repeated;
}
