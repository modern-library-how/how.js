import { expect } from 'vitest';
import { describe, test } from 'vitest';
import filterNumber from '../../number/filterNumber';

describe('filterNumber 테스트', () => {
  test('문자만 주어질 때 NaN 반환', () => {
    expect(filterNumber('string')).toBeNaN();
  });

  test('숫자와 문자가 섞여있을 때 숫자만 반환', () => {
    expect(filterNumber('str1hello2')).toBe(12);
  });

  test('숫자가 주어졌을 때 숫자를 반환', () => {
    expect(filterNumber('123')).toBe(123);
  });

  test('맨 앞에 0이 나올 경우', () => {
    expect(filterNumber('002hello34')).toBe(234);
  });
});
