/**
 * 배열에서 가장 많이 등장한 원소를 반환
 *
 * @param arr - 주어진 배열
 * @returns 가장 많이 등장한 원소
 */

export function findMostFrequent<T extends string | number>(arr: Array<T>) {
  if (arr.length === 0) {
    return undefined;
  }

  const groupedObj: { [key: string | number]: number } = {};

  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    groupedObj[key] = (groupedObj[key] ?? 0) + 1;
  }

  const frequentValue = Object.keys(groupedObj).reduce((acc, cur) => {
    if (groupedObj[acc] >= groupedObj[cur]) {
      return acc;
    } else {
      return cur;
    }
  });

  return isNaN(Number(frequentValue)) ? frequentValue : Number(frequentValue);
}
