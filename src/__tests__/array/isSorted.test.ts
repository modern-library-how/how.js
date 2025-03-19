import { describe, expect, test } from 'vitest';
import isSorted from '../../array/isSorted';

describe('isSorted', () => {
  test('오름차순 true', () => {
    expect(isSorted([1, 2, 3, 4, 5])).toBe(true);
    expect(isSorted([-5, -1, 0, 3, 8, 10])).toBe(true);
    expect(isSorted([1.1, 1.2, 1.3, 1.4])).toBe(true);
  });

  test('내림차순 true', () => {
    expect(isSorted([5, 4, 3, 2, 1])).toBe(true);
    expect(isSorted([10, 5, 0, -3, -8, -10])).toBe(true);
    expect(isSorted([3.2, 2.1, 1.0, -0.5])).toBe(true);
  });

  test('정렬되지 않은 배열 false', () => {
    expect(isSorted([1, 3, 2, 4, 5])).toBe(false);
    expect(isSorted([10, 5, 15, 3, 8])).toBe(false);
    expect(isSorted([1.1, 3.3, 2.2, 4.4])).toBe(false);
  });

  test('빈 배열, 요소 한 개인 배열 true', () => {
    expect(isSorted([])).toBe(true);
    expect(isSorted([5])).toBe(true);
    expect(isSorted(['apple'])).toBe(true);
  });

  test('문자열 배열도 정렬', () => {
    expect(isSorted(['apple', 'banana', 'cherry'])).toBe(true);
    expect(isSorted(['zebra', 'monkey', 'apple'])).toBe(true);
    expect(isSorted(['banana', 'apple', 'grape'])).toBe(false);
  });
});
