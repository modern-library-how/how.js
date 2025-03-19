import { expect } from 'vitest';
import { describe, test } from 'vitest';
import { findAllIndex } from '../../array/findAllIndex';

describe('findAllIndex 테스트', () => {
  test('배열과 값이 주어질 때 값이 포함된 원소의 모든 인덱스 반환', () => {
    expect(findAllIndex([1, 2, 3, 1], 1)).toEqual([0, 3]);
    expect(findAllIndex(['a', 'b', 'a', 'a'], 'a')).toEqual([0, 2, 3]);
  });

  test('빈 배열이 주어질 때 빈 배열 반환', () => {
    expect(findAllIndex([], 1)).toEqual([]);
    expect(findAllIndex([], 'a')).toEqual([]);
  });

  test('배열에 없는 값이 주어질 때 빈 배열 반환', () => {
    expect(findAllIndex([1, 2, 3], 0)).toEqual([]);
    expect(findAllIndex(['a', 'b', 3], 10)).toEqual([]);
  });

  test('NaN이 주어졌을 때 빈 배열 반환', () => {
    expect(findAllIndex([1, 2, 3], NaN)).toEqual([]);
    expect(findAllIndex(['a', 2, 'b', 4, 5], NaN)).toEqual([]);
  });
});
