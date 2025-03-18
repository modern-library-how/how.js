/**
 *
 * @param {string | number} thing 필터 원하는 값
 * @param {Array} array 구하고자 하는 배열
 * @param {string} key 배열 안에 객체일 경우 해당하는 key
 * @returns {Array}
 *
 * @example
 * const dummyData = [[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [1, 2, 3]]];
 * const result = hasThing(3, dummyData)
 *
 * const dummyData1 = [[{ id: 1, value: 'banana' }, { id: 2, value: 'orange' }], [{ id: 3, value: 'apple' }, { id: 4, value: 'pineapple' }], [{ id: 5, value: 'banana' }, { id: 6, value: 'apple' }]];
 * const result = hasThing('banana', dummyData1, 'value')
 */

export function hasThing<T, A, K extends keyof A>(thing: T, array: (A | T)[][], key?: K): (A | T)[] {
  if (
    key !== undefined &&
    array.flat(Infinity).every((item) => {
      typeof item === 'object' && item !== null && !(key in item);
    })
  ) {
    return [];
  }
  return array.flat(Infinity).filter((item): item is A | T => {
    if (typeof item === 'object' && item !== null && key !== undefined) {
      return key in item && (item as A)[key] === thing;
    }

    return item === thing;
  });
}
