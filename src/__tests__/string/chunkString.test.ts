import { expect } from 'vitest';
import { describe, test } from 'vitest';
import { chunkString } from '../../string/chunkString';

describe('chunkString 테스트', () => {
  test('인자를 제대로 넣었을 때', () => {
    expect(chunkString('123456', 2, '+')).toBe('12+34+56');
    expect(chunkString('123456', 3, '+')).toBe('123+456');
    expect(chunkString('123456', 4, '+')).toBe('1234+56');
  });

  test('나누는 단위로 0, 음수, 무한대를 넣었을 때', () => {
    expect(chunkString('hello', 0, '+')).toBe('hello');
    expect(chunkString('hello', Infinity, '+')).toBe('hello');
    expect(chunkString('hello', -5, '+')).toBe('hello');
  });

  test('나누는 단위가 문자열의 길이보다 클 때', () => {
    expect(chunkString('React', 10, ':')).toBe('React');
    expect(chunkString('React', 6, ':')).toBe('React');
  });
});
