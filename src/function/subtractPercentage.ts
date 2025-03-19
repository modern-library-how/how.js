/**
 * 주어진 숫자에 지정된 퍼센트를 적용하여 감소시키는 함수
 *
 * @remarks
 * 이 함수는 가격 할인, 세금 계산 등의 목적으로 활용할 수 있습니다.
 * 퍼센트 값은 100을 기준으로 나눈 후 적용됩니다.
 *
 * @param numberToCalc - 퍼센트를 적용할 기본 숫자
 * @param percentToApply - 적용할 퍼센트 값 ( ex : 10이면 10% )
 * @returns 퍼센트가 적용될 결과
 *
 * @example
 * ```ts
 * //1000원의 10%를 뺌
 * const result = subtractPercentage(1000,10); // 900 반환
 * ```
 */
export function subtractPercentage(numberToCalc: number, percentToApply: number): number {
  if (!isFinite(numberToCalc) || !isFinite(percentToApply)) return NaN;
  const percentageFactor = percentToApply / 100;
  return numberToCalc * (1 - percentageFactor);
}
