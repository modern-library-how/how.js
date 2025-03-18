import { describe, test, expect } from 'vitest';
import { addPercentage } from '../../function/addPercentage';

describe('calculatePercent 테스트', () => {
  test('0이 주어질 때', () => {
    expect(addPercentage(0, 25)).toBe(0);
    expect(addPercentage(100, 0)).toBe(100);
    expect(addPercentage(0, 0)).toBe(0);
  });

  test('양수와 양수가 주어질 때', () => {
    expect(addPercentage(12000, 15)).toBe(13800);
    expect(addPercentage(10.5, 2)).toBe(10.71);
    expect(addPercentage(570, 5.5)).toBe(601.35);
  });

  test('양수와 음수가 주어질 때', () => {
    expect(addPercentage(1000, -10)).toBe(900);
    expect(addPercentage(7650, -1.2)).toBe(7558.2);
    expect(addPercentage(99.023, -0.15)).toBe(98.8744655);
    expect(addPercentage(58200, -230)).toBe(-75660);
  });

  test('음수와 양수가 주어질 때', () => {
    expect(addPercentage(-15300, 25)).toBe(-19125);
    expect(addPercentage(-11, 3.3)).toBe(-11.363);
    expect(addPercentage(-9800.3, 2.5)).toBeCloseTo(-10045.3075, 4);
    expect(addPercentage(-2523, 5.1)).toBe(-2651.673);
  });

  test('음수와 음수가 주어질 때', () => {
    expect(addPercentage(-2000, -52)).toBe(-960);
    expect(addPercentage(-3390.5, -1.5)).toBeCloseTo(-3339.6425, 4);
    expect(addPercentage(-23.6, -9)).toBeCloseTo(-21.476, 3);
    expect(addPercentage(-98750, -10)).toBe(-88875);
  });

  test('무한대가 주어질 때', () => {
    expect(addPercentage(Infinity, 100)).toBeNaN();
    expect(addPercentage(-Infinity, 0)).toBeNaN();
    expect(addPercentage(Infinity, 10.3)).toBeNaN();
    expect(addPercentage(-Infinity, -10.3)).toBeNaN();
    expect(addPercentage(-Infinity, Infinity)).toBeNaN();
    expect(addPercentage(-Infinity, 100)).toBeNaN();
  });
});
