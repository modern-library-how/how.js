import { expect } from 'vitest';
import { describe, test } from 'vitest';
import { findNth } from '../../array/findNth';

describe('findNth 테스트', () => {
  test('배열에서 찾기 원하는 값의 n번째 인덱스 반환', () => {
    expect(findNth([10, 10, 20, 20, 20], 20, 1)).toBe(2);
    expect(findNth([10, 'a', 20, 'a', 'b'], 'a', 2)).toBe(3);
  });

  test('search 인덱스가 주어지지 않을 경우 첫번째로 등장하는 인덱스 반환', () => {
    expect(findNth([1, 2, 3, 1, 5], 1)).toBe(0);
    expect(findNth([1, 2, 'a', 1, 'a'], 'a')).toBe(2);
  });

  test('search 인덱스가 0 이하일 경우 NaN 반환', () => {
    expect(findNth([10, 20, 10, 20], 0)).toBeNaN();
    expect(findNth([10, 20, 10, 20, 30, 30], -2, 2)).toBeNaN();
  });

  test('search 인덱스가 배열 내에 존재하지 않을 경우 NaN 반환', () => {
    expect(findNth([10, 20, 10, 20], 10, 5)).toBeNaN();
    expect(findNth(['a', 2, '3', '4'], 10, 1)).toBeNaN();
  });
});
