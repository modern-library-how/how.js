import { describe, it, expect } from 'vitest';
import { unescapeJs } from '../../string/unescapeJs';

describe('unescapeJs 함수 테스트', () => {
  it("예시: '\\n' → '\\n' (줄바꿈 문자)", () => {
    expect(unescapeJs('\\n')).toBe('\n');
  });

  it('여러 escape 시퀀스 복원', () => {
    const input = '\\\' \\" \\` \\$ \\n \\r \\\\';
    const expected = '\' " ` $ \n \r \\';
    expect(unescapeJs(input)).toBe(expected);
  });

  it('이스케이프 문자가 없는 문자열은 그대로 반환', () => {
    expect(unescapeJs('Hello, world!')).toBe('Hello, world!');
  });

  it('빈 문자열 처리', () => {
    expect(unescapeJs('')).toBe('');
  });
});
