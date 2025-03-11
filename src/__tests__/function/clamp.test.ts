import { describe, test, expect } from 'vitest';
import { clamp } from '../../function/clamp';

describe('clamp 함수 테스트', () => {
  test('max값이 없을 때', () => {
    expect(clamp(0, 3)).toBe(3);
    expect(clamp(5, 3)).toBe(5);
    expect(clamp(-28, 2)).toBe(2);
    expect(clamp(-11, -21)).toBe(-11);
    expect(clamp(0.3, 0)).toBe(0.3);
    expect(clamp(-100, Infinity)).toBe(Infinity);
  });
  test('max가 있을 때', () => {
    expect(clamp(-12, 0, 22)).toBe(0);
    expect(clamp(11, 5, 16)).toBe(11);
    expect(clamp(32, 2, 5)).toBe(5);
    expect(clamp(-1, -5, 2)).toBe(-1);
    expect(clamp(0.2, 9, 12)).toBe(9);
    expect(clamp(0.75, -Infinity, Infinity)).toBe(0.75);
  });
});
