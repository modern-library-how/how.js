export function calculatePercent(numberToCalc: number, percentToApply: number) {
  const percentageFactor = percentToApply / 100;
  let calculatedValue = numberToCalc * percentageFactor;

  return calculatedValue;
}
