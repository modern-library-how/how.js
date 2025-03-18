export function clamp(number: number, min: number, max?: number) {
  if (max === undefined) return Math.max(number, min);

  const clampedMin = number <= min ? min : number;
  return Math.min(clampedMin, max);
}
