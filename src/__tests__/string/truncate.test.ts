import { describe, it, expect } from 'vitest';
import { truncate } from '../../string/truncate';

describe('truncate 함수 테스트', () => {
  it("예시: 'abcdefg'를 길이 4로 잘라서 truncation 추가 → 'abcd...'", () => {
    expect(truncate('abcdefg', 4)).toBe('abcd...');
  });

  it('문자열 길이가 정확히 주어진 길이일 경우 그대로 반환', () => {
    expect(truncate('hello', 5)).toBe('hello');
  });

  it('문자열 길이가 주어진 길이보다 짧은 경우 그대로 반환', () => {
    expect(truncate('hi', 5)).toBe('hi');
  });

  it('커스텀 truncation을 사용하는 경우', () => {
    expect(truncate('abcdefg', 3, '***')).toBe('abc***');
  });

  it('빈 문자열 처리', () => {
    expect(truncate('', 3)).toBe('');
  });
});
