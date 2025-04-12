import { describe, it, expect } from 'vitest';
import { deburr } from '../../string/deburr';

describe('deburr 함수 테스트', () => {
  it('예시: "déjà vu" → "deja vu"', () => {
    expect(deburr('déjà vu')).toBe('deja vu');
  });

  it('다른 악센트 예시: "café" → "cafe"', () => {
    expect(deburr('café')).toBe('cafe');
  });

  it('특수문자 없이 입력된 경우 원본 문자열 반환', () => {
    expect(deburr('hello')).toBe('hello');
  });

  it('빈 문자열 처리', () => {
    expect(deburr('')).toBe('');
  });
});
