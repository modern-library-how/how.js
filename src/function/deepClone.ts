type Primitive = string | number | boolean | null | undefined;
type CloneableObject = { [key: string]: CloneableValue } | CloneableValue[];
type CloneableValue = Primitive | CloneableObject;

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
