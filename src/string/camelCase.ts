// 문자열을 camelCase 형식으로 변환 (example text → exampleText)
export function camelCase(str: string): string {
  return str
    .trim()
    .split(/\s+/)
    .map((word, i) => (i === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase()))
    .join('');
}

//첫번째 단어는 소문자로 변환하고, 나머지 단어는 첫 글자를 대문자로 변환
//예시 example text → exampleText
