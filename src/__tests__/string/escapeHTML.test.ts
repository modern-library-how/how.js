import { describe, it, expect } from 'vitest';
import { escapeHTML } from '../../string/escapeHTML';

describe('escapeHtml 함수 테스트', () => {
  it('예시: "<div>" → "&lt;div&gt;"', () => {
    expect(escapeHTML('<div>')).toBe('&lt;div&gt;');
  });

  it('여러 HTML 특수문자가 포함된 경우', () => {
    const input = `& < > " '`;
    const expected = '&amp; &lt; &gt; &quot; &#39;';
    expect(escapeHTML(input)).toBe(expected);
  });

  it('특수문자가 없는 문자열은 그대로 반환', () => {
    const input = 'Hello, world!';
    expect(escapeHTML(input)).toBe('Hello, world!');
  });

  it('빈 문자열 처리', () => {
    expect(escapeHTML('')).toBe('');
  });
});
