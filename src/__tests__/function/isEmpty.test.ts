import { describe, test, expect } from 'vitest';
import { isEmpty } from '../../function/isEmpty';

describe('isEmpty 함수 테스트', () => {
  test('인자가 null일 때', () => {
    expect(isEmpty(null)).toBe(true);
  });

  test('인자가 undefined일 때', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  test('인자가 string일 때', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty('   ')).toBe(false);
    expect(isEmpty('hello')).toBe(false);
    expect(isEmpty('hello wrold')).toBe(false);
  });

  test('인자가 number형일 때', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(NaN)).toBe(false);
  });

  test('인자가 boolean일 때', () => {
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });

  test('인자가 배열일 때', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty([{ id: 1, title: 'vitest' }])).toBe(false);
    expect(isEmpty([true])).toBe(false);
  });

  test('인자가 객체일 때', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ id: 1, title: 'vitest' })).toBe(false);
    expect(isEmpty({ flowers: ['rose', 'daisy', 'sunflower'] })).toBe(false);
  });

  test('인자가 함수일 때', () => {
    expect(
      isEmpty(function print(text: any) {
        console.log(text);
      })
    ).toBe(false);
  });
  expect(
    isEmpty(function sum(a: number, b: number) {
      return a + b;
    })
  ).toBe(false);

  test('인자가 Set,Map일 때', () => {
    const pianist = new Map();
    pianist.set('name', 'yunchanLim');

    expect(isEmpty(new Set([1, 2, 3]))).toBe(false);
    expect(isEmpty(new Set())).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(pianist)).toBe(false);
  });
});
