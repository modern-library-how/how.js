import { describe, it, expect } from 'vitest';
import { repeat } from '../../string/repeat';

describe('repeat 함수 테스트', () => {
  it("예시: 'abc'.repeat(3) → 'abcabcabc'", () => {
    expect(repeat('abc', 3)).toBe('abcabcabc');
  });

  it('반복 횟수가 0일 경우 빈 문자열 반환', () => {
    expect(repeat('abc', 0)).toBe('');
  });

  it('빈 문자열을 반복해도 빈 문자열 반환', () => {
    expect(repeat('', 5)).toBe('');
  });

  it('반복 횟수가 1이면 원본 문자열 반환', () => {
    expect(repeat('test', 1)).toBe('test');
  });
});
