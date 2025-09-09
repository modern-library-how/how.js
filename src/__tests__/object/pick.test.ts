import { describe, expect, test } from 'vitest';
import { pick } from '../../object/pick';

describe('pick 테스트', () => {
  test('pick: 특정 키만 선택', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    expect(pick(obj, ['b'])).toEqual({ b: 2 });
    expect(pick(obj, [])).toEqual({});
  });

  test('pick: 존재하지 않는 키를 선택', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, ['c'])).toEqual({});
  });
});
