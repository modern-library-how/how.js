/**
 * 여러 개의 함수를 순차적으로 실행해주는 함수
 * @param FunctionArray
 * @returns {any}
 */

export function pipe(...funcs: any[]): any {
  return function (thisArg: any, ...args: any[]) {
    return funcs.reduce((acc, fn) => fn.apply(thisArg, [acc]), args[0]);
  };
}
