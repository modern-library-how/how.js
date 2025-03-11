export function isEven(numberToCheck: number): boolean {
  if (!Number.isInteger(numberToCheck)) return false;
  if (numberToCheck === Infinity || numberToCheck === -Infinity) return false;
  return numberToCheck % 2 === 0;
}
