export function isEmpty(value: any): boolean {
  if (value === null || value === undefined) return true;
  if (Number.isNaN(value)) return true;
  if (Array.isArray(value) || typeof value === 'string') return value.length === 0;
  if (value instanceof Map || value instanceof Set) return value.size === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}
