/**
 * 주어진 함수들을 순차적으로 실행하며, 각 함수의 반환 값을 다음 함수의 인자로 전달합니다.
 * @remark
 * `pipe` 함수는 첫 번째 함수의 반환값을 다음 함수로 넘겨주며, 최종적으로 마지막 함수의 반환값을 반환합니다.
 * @param funcs - 실행할 함수들의 배열
 * @returns {any}
 *
 * @example
 * ```ts
 * function add(x: number): number {
 *   return x + 1;
 * }
 *
 * function multiply(x: number): number {
 *   return x * 2;
 * }
 *
 * const pipedFunction = pipe(add, multiply);
 * console.log(pipedFunction(1, 2)); // (1 + 1) * 2 = 4
 * ```
 */

export function pipe(...funcs: any[]): any {
  return function (thisArg: any, ...args: any[]) {
    return funcs.reduce((acc, fn) => fn.apply(thisArg, [acc]), args[0]);
  };
}
