export function isEven(numberToCheck: number): boolean {
  if (!Number.isInteger(numberToCheck) || !Number.isFinite(numberToCheck)) return false;
  return numberToCheck % 2 === 0;
}
