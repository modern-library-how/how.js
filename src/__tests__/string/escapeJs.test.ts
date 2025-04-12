import { describe, it, expect } from 'vitest';
import { escapeJs } from '../../string/escapeJs';

describe('escapeJs 함수 테스트', () => {
  it('역슬래시(\\) escape 처리 테스트', () => {
    expect(escapeJs('\\')).toBe('\\\\');
  });

  it("작은따옴표 (' ) escape 처리 테스트", () => {
    expect(escapeJs("'")).toBe("\\'");
  });

  it('큰따옴표 (") escape 처리 테스트', () => {
    expect(escapeJs('"')).toBe('\\"');
  });

  it('백틱 (`) escape 처리 테스트', () => {
    expect(escapeJs('`')).toBe('\\`');
  });

  it('달러 기호 ($) escape 처리 테스트', () => {
    expect(escapeJs('$')).toBe('\\$');
  });

  it('줄바꿈 (\\n) escape 처리 테스트', () => {
    expect(escapeJs('\n')).toBe('\\n');
  });

  it('캐리지 리턴 (\\r) escape 처리 테스트', () => {
    expect(escapeJs('\r')).toBe('\\r');
  });

  it('여러 특수문자 혼합 escape 처리 테스트', () => {
    const input = '\\ \' " ` $ \n \r';
    const expected = '\\\\ \\\' \\" \\` \\$ \\n \\r';
    expect(escapeJs(input)).toBe(expected);
  });
});
