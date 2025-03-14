import { describe, expect, test } from 'vitest';
import { pipe } from '../../function/pipe';

describe('pipe 테스트', () => {
  test('함수들을 순차적으로 실행', () => {
    const add5 = (x: number) => x + 5;
    const multiplyBy2 = (x: number) => x * 2;
    const result = pipe(add5, multiplyBy2)(null, 3);
    expect(result).toBe(16);
  });

  test('thisArg를 사용하여 함수 실행', () => {
    const obj = { multiplier: 3 };
    const multiply = function (x: number) {
      return x * this.multiplier;
    };
    const result = pipe(multiply)(obj, 4);
    expect(result).toBe(12);
  });

  test('인자가 여러 개일 때', () => {
    const sum = function (x: number, y: number) {
      return x + y;
    };
    const multiply = function (x: number, y: number) {
      return x * y;
    };
    const result = pipe(sum, multiply)(null, 2, 3);
    expect(result).toBe(15);
  });

  test('빈 함수들로 실행', () => {
    const result = pipe()(null, 5);
    expect(result).toBe(5);
  });

  test('인자를 하나만 받는 함수들', () => {
    const increment = (x: number) => x + 1;
    const double = (x: number) => x * 2;
    const result = pipe(increment, double)(null, 3);
    expect(result).toBe(8);
  });
});
