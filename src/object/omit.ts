/**
 * 원하는 key를 제외한 Object를 보여주는 함수
 * @template T - The type of object
 * @template K - The type of Keys in object
 * @param {T} obj - The object to omit keys from
 * @param {K[]} keys - An array of keys to be omitted from the object
 * @returns {Omit <T, K>} A new object with the specified keys omitted
 *
 * @example
 * const object = {a: 2, b: 3, c: 5};
 * const omittedObject = omit(object, ["b", "c"]);
 * // omittedObject = {a: 1};
 */

export const omit = <T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  if (!obj || typeof obj !== 'object') return {} as Omit<T, K>;
  const keySet = new Set<keyof T>(keys);
  const entries = Object.entries(obj) as [keyof T, any][];
  return Object.fromEntries(entries.filter(([key]) => !keySet.has(key))) as Omit<T, K>;
};
