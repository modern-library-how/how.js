/**
 * 주어진 문자열의 모든 공백 문자를 제거하는 함수입니다.
 * @remark 이 함수는 개행 문자, 탭, 공백 등을 포함한 모든 공백 문자를 제거합니다.
 * @param str - 공백을 제거할 문자열
 * @returns - 공백이 제거된 새로운 문자열.
 * @example
 * ```ts
 * console.log(removeWhitespace("  Hello  \nWorld! ")); // "HelloWorld!"
 * ```
 */
export function removeWhitespace(str: string): string {
  return str.replace(/\s+/g, '');
}
