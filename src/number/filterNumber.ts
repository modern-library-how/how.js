/**
 * 문자열에서 숫자만 필터링하여 반환하는 함수
 *
 * @param {string} value
 * @returns {number}
 */

export default function filterNumber(value: string): number {
  let regex: RegExp = /[^0-9]/g;

  const removedStrValue = value.replace(regex, '');

  if (removedStrValue.length === 0) {
    return NaN;
  }

  const filteredNumber = Number(removedStrValue);
  return filteredNumber;
}
