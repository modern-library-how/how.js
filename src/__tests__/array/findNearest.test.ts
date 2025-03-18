import { expect, describe, test } from 'vitest';
import { findNearest } from '../../array/findNearest';

describe('findNearest 테스트', () => {
  test('배열과 값이 주어졌을 때 가장 인접한 값을 반환', () => {
    expect(findNearest([10, 20, 30, 40, 50], 12)).toBe(10);
  });

  test('빈 배열이 주어질 때 undefined 반환', () => {
    expect(findNearest([], 1)).toBeUndefined();
  });

  test('배열에 주어진 값이 있는 경우 주어진 값을 반환', () => {
    expect(findNearest([10, 20, 30], 20)).toBe(20);
  });

  test('배열에서 주어진 값과 차이가 동일한 값들이 존재할 때 먼저 등장한 원소 반환', () => {
    expect(findNearest([1, 2, 3, 4, 5], 2.5)).toBe(2);
  });
});
