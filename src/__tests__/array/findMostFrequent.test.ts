import { expect } from 'vitest';
import { describe, test } from 'vitest';
import { findMostFrequent } from '../../array/findMostFrequent';

describe('findMostFrequent 테스트', () => {
  test('배열이 주어졌을 때 가장 많이 등장한 원소 반환', () => {
    expect(findMostFrequent([10, 10, 20, 20, 20])).toBe(20);
    expect(findMostFrequent([10, 'a', 20, 'a', 'b'])).toBe('a');
  });

  test('빈 배열이 주어질 때 undefined 반환', () => {
    expect(findMostFrequent([])).toBeUndefined();
  });

  test('배열에서 가장 많이 등장한 원소가 2개 이상일 경우 먼저 등장한 원소 반환', () => {
    expect(findMostFrequent([10, 20, 10, 20])).toBe(10);
    expect(findMostFrequent([10, 20, 10, 20, 30, 30])).toBe(10);
  });
});
