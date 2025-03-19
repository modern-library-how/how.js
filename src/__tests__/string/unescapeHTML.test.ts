import { describe, it, expect } from 'vitest';
import { unescapeHTML } from '../../string/unescapeHTML';

describe('unescapeHtml 함수 테스트', () => {
  it("예시: '&lt;div&gt;' → '<div>'", () => {
    expect(unescapeHTML('&lt;div&gt;')).toBe('<div>');
  });

  it('여러 HTML 엔티티 복원', () => {
    expect(unescapeHTML('&amp;&lt;&gt;&quot;&#39;')).toBe('&<>"\'');
  });

  it('엔티티가 없는 문자열은 그대로 반환', () => {
    expect(unescapeHTML('Hello, world!')).toBe('Hello, world!');
  });

  it('빈 문자열 처리', () => {
    expect(unescapeHTML('')).toBe('');
  });
});
