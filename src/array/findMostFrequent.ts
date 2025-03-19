/**
 * 배열에서 가장 많이 등장한 원소를 반환하는 함수
 *
 * @remarks
 * 이 함수는 주어진 배열에서 각 원소의 등장 빈도를 계산한 후, 가장 많이 등장한 원소를 반환합니다.
 * 배열이 비어 있을 경우에는 undefined를 반환합니다.
 *
 * @param arr - 검색 대상 배열 (예: [1, 2, 3, 2, 4, 2])
 * @returns 가장 많이 등장한 원소 (예: 2)
 *
 * @example
 * ```ts
 * findMostFrequent([1, 2, 3, 2, 4, 2]); // => 2
 * ```
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
