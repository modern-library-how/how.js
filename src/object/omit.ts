/**
 * 원하는 key를 제외한 Object를 보여주는 함수
 *
 * @template T - 객체의 타입
 * @template K - 객체 내 키의 타입
 * @param obj - 특정 키를 제외할 대상 객체
 * ```ts
 * (예: { a: 2, b: 3, c: 5 })
 * ```
 * @param keys - 제거할 키들의 배열 (예: ["b", "c"])
 * @returns 지정한 키들이 제거된 새로운 객체
 * ```ts
 * (예: { a: 2 })
 * ```
 *
 * @example
 * ```ts
 * const object = { a: 2, b: 3, c: 5 };
 * const omittedObject = omit(object, ["b", "c"]);
 * // omittedObject = { a: 2 }
 * ```
 */

export const omit = <T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  if (!obj || typeof obj !== 'object') return {} as Omit<T, K>;
  const keySet = new Set<keyof T>(keys);
  const entries = Object.entries(obj) as [keyof T, any][];
  return Object.fromEntries(entries.filter(([key]) => !keySet.has(key))) as Omit<T, K>;
};
