import { describe, expect, test } from 'vitest';
import sortedLastIndexOf from '../../object/sortedLastIndexOf';

describe('sortedLastIndexOf', () => {
  test('정렬된 숫자 배열에서 마지막 인덱스 반환', () => {
    expect(sortedLastIndexOf([1, 2, 2, 2, 3, 4, 5], 2)).toBe(3);
    expect(sortedLastIndexOf([1, 3, 3, 3, 5, 7], 3)).toBe(3);
    expect(sortedLastIndexOf([10, 20, 30, 40, 50], 40)).toBe(3);
  });

  test('정렬되지 않은 배열에서 lastIndexOf() 반환', () => {
    expect(sortedLastIndexOf([3, 1, 4, 1, 5, 9, 2, 6, 5], 5)).toBe(8);
    expect(sortedLastIndexOf([10, 5, 3, 8, 6], 3)).toBe(2);
  });

  test('배열에 값이 없는 경우 -1 반환', () => {
    expect(sortedLastIndexOf([1, 2, 3, 4, 5], 10)).toBe(-1);
    expect(sortedLastIndexOf(['a', 'b', 'c'], 'z')).toBe(-1);
  });

  test('중복된 값이 있는 경우 마지막 인덱스 반환', () => {
    expect(sortedLastIndexOf([1, 1, 1, 2, 2, 2, 3, 3], 1)).toBe(2);
    expect(sortedLastIndexOf(['apple', 'banana', 'banana', 'banana', 'grape'], 'banana')).toBe(3);
  });

  test('빈 배열 -1을 반환', () => {
    expect(sortedLastIndexOf([], 5)).toBe(-1);
  });

  test('문자열 배열 동작', () => {
    expect(sortedLastIndexOf(['a', 'b', 'b', 'c', 'c', 'c'], 'c')).toBe(5);
    expect(sortedLastIndexOf(['apple', 'banana', 'cherry', 'date'], 'banana')).toBe(1);
  });
});
