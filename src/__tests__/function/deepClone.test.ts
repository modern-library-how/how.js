import { describe, expect, test } from 'vitest';
import { deepClone } from '../../function/deepClone';

describe('deepClone 테스트', () => {
  test('객체를 깊은 복사했을 때 중첩된 프로퍼티도 서로 다른 값을 참조해야 한다.', () => {
    const obj = {
      a: 1,
      b: { x: 2, y: [10, 20] }
    };
    const clonedObj = deepClone(obj);

    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).not.toBe(obj.b);
    expect(clonedObj.b.y).not.toBe(obj.b.y);

    clonedObj.b.x = 22;
    expect(obj.b.x).toBe(2);

    clonedObj.b.y[1] = 200;
    expect(obj.b.y[1]).toBe(20);
  });

  test('배열을 깊은 복사했을 때 중첩된 프로퍼티도 서로 다른 값을 참조해야 한다.', () => {
    const arr: [number, string, [number, boolean, { a: number; b: string }], { x: number; y: string }] = [
      1,
      '2',
      [3, true, { a: 5, b: 'hello' }],
      { x: 123, y: 'a' }
    ];
    const clonedArr = deepClone(arr);

    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[2]).not.toBe(arr[2]);
    expect(clonedArr[3]).not.toBe(arr[3]);

    arr[0] = 123;
    expect(clonedArr[0]).toBe(1);
    expect(arr[0]).toBe(123);

    arr[2][2].b = 'hey';
    expect(clonedArr[2][2].b).toBe('hello');
    expect(arr[2][2].b).toBe('hey');

    arr[3].x = 125;
    expect(clonedArr[3].x).toBe(123);
    expect(arr[3].x).toBe(125);
  });
});
