import { describe, test, expect } from 'vitest';
import { removeWhitespace } from '../../function/removeWhitespace';

describe('removeWhitespace 함수 테스트', () => {
  test('공백문자만 주어졌을 때', () => {
    expect(removeWhitespace('')).toBe('');
    expect(removeWhitespace('          ')).toBe('');
    expect(removeWhitespace(' ')).toBe('');
  });

  test('문자열 앞,뒤로 공백이 주어졌을 때', () => {
    expect(removeWhitespace(' hello')).toBe('hello');
    expect(removeWhitespace('world  ')).toBe('world');
    expect(removeWhitespace('    hello world  ')).toBe('helloworld');
  });

  test('문자열 사이에 공백이 주어졌을 때', () => {
    expect(removeWhitespace('h e l l o')).toBe('hello');
    expect(removeWhitespace('Fryderyk Chopin')).toBe('FryderykChopin');
    expect(removeWhitespace('here you are')).toBe('hereyouare');
  });

  test('문자열 사이에 공백이 주어졌을 때', () => {
    expect(removeWhitespace('h e l l o')).toBe('hello');
    expect(removeWhitespace('Fryderyk Chopin')).toBe('FryderykChopin');
    expect(removeWhitespace('here you are')).toBe('hereyouare');
  });

  test('공백, 탭, 줄바꿈이 주어졌을 때', () => {
    expect(removeWhitespace('hello \t world\n')).toBe('helloworld');
    expect(removeWhitespace(' \t hello \n world \t ')).toBe('helloworld');
    expect(removeWhitespace('  line1\nline2  ')).toBe('line1line2');
  });
});
