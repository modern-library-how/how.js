import { describe, it, expect } from 'vitest';
import { camelCase } from '../../string/camelCase';

describe('camelCase 함수 테스트', () => {
  it('예시: "example text" → "exampleText"', () => {
    expect(camelCase('example text')).toBe('exampleText');
  });

  it('양쪽 공백과 여러 공백이 포함된 경우', () => {
    expect(camelCase('   hello    world   ')).toBe('helloWorld');
  });

  it('빈 문자열 처리', () => {
    expect(camelCase('')).toBe('');
  });

  it('한 단어만 있는 경우', () => {
    expect(camelCase('HELLO')).toBe('hello');
  });

  it('대소문자가 섞인 문자열 처리', () => {
    expect(camelCase('eXaMpLe TeXT')).toBe('exampleText');
  });
});
