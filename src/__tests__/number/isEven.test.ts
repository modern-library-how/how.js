import { describe, expect, test } from 'vitest';
import { isEven } from '../../number/isEven';

describe('isEven 테스트', () => {
  test('인자가 짝수일 때', () => {
    expect(isEven(0)).toBe(true);
    expect(isEven(-26)).toBe(true);
    expect(isEven(102)).toBe(true);
  });
  test('인자가 홀수일 때', () => {
    expect(isEven(-11)).toBe(false);
    expect(isEven(233)).toBe(false);
  });
  test('인자가 무한대일 때', () => {
    expect(isEven(Infinity)).toBe(false);
    expect(isEven(-Infinity)).toBe(false);
  });
  test('인자가 소수일 때', () => {
    expect(isEven(0.092)).toBe(false);
    expect(isEven(-3.88)).toBe(false);
    expect(isEven(1.23)).toBe(false);
    expect(isEven(103.6)).toBe(false);
  });
});
