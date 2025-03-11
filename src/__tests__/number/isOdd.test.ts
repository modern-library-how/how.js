import { describe, expect, test } from 'vitest';
import { isOdd } from '../../number/isOdd';

describe('isOdd 테스트', () => {
  test('인자가 짝수일 때', () => {
    expect(isOdd(0)).toBe(false);
    expect(isOdd(-32)).toBe(false);
    expect(isOdd(11132)).toBe(false);
  });

  test('인자가 홀수일 때', () => {
    expect(isOdd(11)).toBe(true);
    expect(isOdd(-23)).toBe(true);
  });

  test('인자가 무한대일 때', () => {
    expect(isOdd(Infinity)).toBe(false);
    expect(isOdd(-Infinity)).toBe(false);
  });

  test('인자가 소수일 때', () => {
    expect(isOdd(0.03)).toBe(false);
    expect(isOdd(-0.08)).toBe(false);
    expect(isOdd(1.27)).toBe(false);
  });
});
