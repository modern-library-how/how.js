import { expect } from 'vitest';
import { describe, test } from 'vitest';
import { sortObject } from '../../object/sortObject';

describe('sortObject 테스트', () => {
  test('객체의 키를 기준으로 오름차순 정렬', () => {
    expect(
      sortObject(
        [
          { name: 'Alice', age: 30 },
          { name: 'Bob', age: 25 },
          { name: 'Charlie', age: 35 }
        ],
        'age',
        true
      )
    ).toEqual([
      { name: 'Bob', age: 25 },
      { name: 'Alice', age: 30 },
      { name: 'Charlie', age: 35 }
    ]);
  });

  test('객체의 키를 기준으로 내림차순 정렬', () => {
    expect(
      sortObject(
        [
          { name: 'Charlie', age: 30 },
          { name: 'Alice', age: 25 },
          { name: 'Bob', age: 35 }
        ],
        'age',
        false
      )
    ).toEqual([
      { name: 'Bob', age: 35 },
      { name: 'Charlie', age: 30 },
      { name: 'Alice', age: 25 }
    ]);
  });

  test('객체의 값이 문자열인 경우 정렬', () => {
    expect(
      sortObject(
        [
          { name: 'Charlie', age: 30 },
          { name: 'Alice', age: 25 },
          { name: 'Bob', age: 35 }
        ],
        'name',
        true
      )
    ).toEqual([
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 35 },
      { name: 'Charlie', age: 30 }
    ]);
  });
});
