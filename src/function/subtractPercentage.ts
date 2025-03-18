export function subtractPercentage(numberToCalc: number, percentToApply: number): number {
  if (!isFinite(numberToCalc) || !isFinite(percentToApply)) return NaN;
  const percentageFactor = percentToApply / 100;
  return numberToCalc * (1 - percentageFactor);
}
