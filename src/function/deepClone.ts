type Primitive = string | number | boolean | null | undefined;
type CloneableObject = { [key: string]: CloneableValue } | CloneableValue[];
type CloneableValue = Primitive | CloneableObject;

/**
 * 객체나 배열을 깊은 복사(deep clone)합니다.
 *
 * @remark
 * 이 함수는 기본형 타입(string, number, boolean, null, undefined)과
 * 중첩된 객체 및 배열을 포함한 객체 구조를 깊은 복사합니다.
 *
 * 순환 참조(circular reference)를 처리하지 않으므로, 순환 참조가 있는 객체에는
 * 사용하지 않도록 주의해야 합니다.
 *
 * @typeparam T - 복사할 값의 타입 (기본형 값, 복사 가능한 객체 또는 배열)
 * @param source - 복사할 원본 값
 * @returns 원본 값의 깊은 복사본
 *
 *
 * @example
 * ```ts
 * const obj = {
 *   name: 'Dana',
 *   age: 20,
 *   address: { city: 'Seoul', country: 'Korea' },
 *   hobbies: ['reading', 'coding']
 * };
 *
 * const cloned = deepClone(obj);
 * // 원본 객체를 수정해도 복사본에 영향을 주지 않습니다
 * obj.address.city = 'Busan';
 * console.log(cloned.address.city); // 'Seoul'
 * ```
 */
export function deepClone<T extends CloneableValue>(source: T): T {
  if (source === null || typeof source !== 'object') return source;

  if (Array.isArray(source)) {
    return source.map((item) => deepClone(item)) as T;
  }

  let clonedSource: Record<string, any> = {};
  for (const key in source) {
    clonedSource[key] = deepClone(source[key]);
  }
  return clonedSource as T;
}
