/**
 * 주어진 인자가 홀수인지 판별하는 함수
 * @param numberToCheck
 * @returns {boolean}
 */
export function isOdd(numberToCheck: number): boolean {
  if (!Number.isInteger(numberToCheck)) return false;
  if (numberToCheck === Infinity || numberToCheck === -Infinity) return false;
  return numberToCheck % 2 !== 0;
}
