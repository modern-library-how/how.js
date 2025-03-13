export function addPercentage(numberToCalc: number, percentToApply: number): number {
  if (!isFinite(numberToCalc) || !isFinite(percentToApply)) return NaN;
  const percentageFactor = percentToApply / 100;
  return numberToCalc + numberToCalc * percentageFactor;
}
