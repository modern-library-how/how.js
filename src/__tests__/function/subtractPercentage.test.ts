import { describe, test, expect } from 'vitest';
import { subtractPercentage } from '../../function/calculatePercent';

describe('calculatePercent 테스트', () => {
  test('0이 주어질 때', () => {
    expect(subtractPercentage(0, 30)).toBe(0);
    expect(subtractPercentage(200, 0)).toBe(200);
    expect(subtractPercentage(0, 0)).toBe(0);
  });

  test('양수와 양수가 주어질 때', () => {
    expect(subtractPercentage(352000, 15)).toBe(299200);
    expect(subtractPercentage(11.3, 2)).toBe(11.074);
    expect(subtractPercentage(57900, 2.5)).toBe(56452.5);
  });

  test('양수와 음수가 주어질 때', () => {
    expect(subtractPercentage(1000, -23)).toBe(1230);
    expect(subtractPercentage(78500, -3.3)).toBe(81090.5);
    expect(subtractPercentage(3520.032, -22.5)).toBe(4312.0392);
    expect(subtractPercentage(9999, -11)).toBe(11098.89);
  });

  test('음수와 양수가 주어질 때', () => {
    expect(subtractPercentage(-2300, 100)).toBe(0);
    expect(subtractPercentage(-8890, 20.5)).toBe(-7067.55);
    expect(subtractPercentage(-2170.3, 1.5)).toBe(-2137.7455);
    expect(subtractPercentage(-2500.23, 1.1)).toBe(-2472.72747);
  });

  test('음수와 음수가 주어질 때', () => {
    expect(subtractPercentage(-1600, -100)).toBe(-3200);
    expect(subtractPercentage(-1290.03, -10.5)).toBe(-1425.48315);
    expect(subtractPercentage(-11.3, -1)).toBe(-11.413);
    expect(subtractPercentage(-169900, -21)).toBe(-205579);
  });

  test('무한대가 주어질 때', () => {
    expect(subtractPercentage(Infinity, 100)).toBeNaN();
    expect(subtractPercentage(-Infinity, 0)).toBeNaN();
    expect(subtractPercentage(Infinity, 10.3)).toBeNaN();
    expect(subtractPercentage(-Infinity, -10.3)).toBeNaN();
    expect(subtractPercentage(-Infinity, Infinity)).toBeNaN();
    expect(subtractPercentage(-Infinity, 100)).toBeNaN();
  });
});
