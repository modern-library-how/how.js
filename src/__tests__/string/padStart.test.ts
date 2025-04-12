import { describe, it, expect } from 'vitest';
import { padStart } from '../../string/padStart';

describe('padStart 함수 테스트', () => {
  it("예시: 'abc'.padStart(6, 'aaa') → 'aaaabc'", () => {
    expect(padStart({ str: 'abc', length: 6, char: 'aaa' })).toBe('aaaabc');
  });

  it("예시: 'abc'.padStart(5, '.') → '..abc'", () => {
    expect(padStart({ str: 'abc', length: 5, char: '.' })).toBe('..abc');
  });

  it('원본 문자열 길이가 목표 길이보다 크면 그대로 반환', () => {
    expect(padStart({ str: 'hello', length: 3, char: '*' })).toBe('hello');
  });

  it('char가 빈 문자열인 경우 원본 문자열 반환', () => {
    expect(padStart({ str: 'test', length: 10, char: '' })).toBe('test');
  });

  it('기본 char (공백)을 사용한 패딩 테스트', () => {
    expect(padStart({ str: 'world', length: 8 })).toBe('   world');
  });
});
