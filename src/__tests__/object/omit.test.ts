import { describe, expect, test } from 'vitest';
import { omit } from '../../object/omit';

describe('pipe 테스트', () => {
  test('omit: 특정 키를 제거', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['b', 'c'])).toEqual({ a: 1 });
    expect(omit(obj, ['a'])).toEqual({ b: 2, c: 3 });
    expect(omit(obj, [])).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('omit: 존재하지 않는 키를 제거', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, ['c'])).toEqual({ a: 1, b: 2 });
  });
});
