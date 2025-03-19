import { describe, it, expect } from 'vitest';
import { padEnd } from '../../string/padEnd';

describe('padEnd 함수 테스트', () => {
  it("예시: 'abc'.padEnd(5, '.') → 'abc..'", () => {
    expect(padEnd('abc', 5, '.')).toBe('abc..');
  });

  it('원본 문자열의 길이가 target length보다 크면 그대로 반환', () => {
    expect(padEnd('hello', 3, '.')).toBe('hello');
  });

  it('기본 문자(공백)를 사용한 패딩 테스트', () => {
    expect(padEnd('hello', 10)).toBe('hello     ');
  });

  it("여러 문자 사용: 'test'와 패딩 문자열 'ab' 테스트", () => {
    expect(padEnd('test', 8, 'ab')).toBe('testabab');
  });

  it('빈 문자열에 패딩 적용', () => {
    expect(padEnd('', 4, '0')).toBe('0000');
  });
});
