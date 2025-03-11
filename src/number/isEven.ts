export function isEven(numberToCheck: number): boolean {
  if (numberToCheck === Infinity || numberToCheck === -Infinity) return false;
  return numberToCheck % 2 === 0;
}
