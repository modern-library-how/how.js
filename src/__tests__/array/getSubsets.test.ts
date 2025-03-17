import { expect } from 'vitest';
import { describe, test } from 'vitest';
import { getSubsets } from '../../array/getSubsets';

describe('getSubsets 테스트', () => {
  test('배열이 주어질 때 부분집합 반환', () => {
    expect(getSubsets([1, 2, 3])).toEqual([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
    expect(getSubsets(['a', 'b'])).toEqual([[], ['a'], ['b'], ['a', 'b']]);
  });

  test('빈 배열이 주어질 때 빈배열 반환', () => {
    expect(getSubsets([])).toEqual([[]]);
  });

  test('여러 타입이 섞인 배열이 주어질 때 부분집합 반환', () => {
    expect(getSubsets([1, 'a', true])).toEqual([
      [],
      [1],
      ['a'],
      [1, 'a'],
      [true],
      [1, true],
      ['a', true],
      [1, 'a', true]
    ]);
  });
});
