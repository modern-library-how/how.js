/**
 * 특정 key만 포함하는 Object를 반환하는 함수
 * @template T - The type of object
 * @template K - The type of Keys in object
 * @param {T} obj - The object to pick keys from
 * @param {K[]} keys - An array of keys to be picked from the object
 * @returns {Pick<T, K>} A new object with only the specified keys
 *
 * @example
 * const object = {a: 2, b: 3, c: 5};
 * const pickedObject = pick(object, ["a", "c"]);
 * // pickedObject = {a: 2, c: 5};
 */
export const pick = <T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
  if (!obj || typeof obj !== 'object') return {} as Pick<T, K>;
  const keySet = new Set<keyof T>(keys);
  const entries = Object.entries(obj) as [keyof T, any][];
  return Object.fromEntries(entries.filter(([key]) => keySet.has(key))) as Pick<T, K>;
};
