export default function filterNumber(value: string): number {
  let regex: RegExp = /[^0-9]/g;

  const removedStrValue = value.replace(regex, '');

  if (removedStrValue.length === 0) {
    return NaN;
  }

  const filteredNumber = Number(removedStrValue);
  return filteredNumber;
}
