import { describe, expect, test } from 'vitest';
import { hasThing } from '../../object/hasThing';

describe('hasThing 테스트', () => {
  test('숫자배열에서 숫자 찾기', () => {
    expect(
      hasThing(3, [
        [1, 2],
        [3, 4, 5]
      ])
    ).toEqual([3]);
    expect(
      hasThing(10, [
        [1, 2],
        [3, 4, 5]
      ])
    ).toEqual([]);
  });

  test('객체 배열에서 특정 키의 값을 기준으로 찾기', () => {
    const data = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
    expect(hasThing(2, data, 'id')).toEqual([{ id: 2 }]);
    expect(hasThing(3, data, 'id')).toEqual([{ id: 3 }]);
    expect(hasThing(4, data, 'id')).toEqual([]);
  });

  // 중첩 배열 타입 어떻게 하는겨.. 테스트는 통과하는데 에러가 난다.
  test('중첩된 배열 구조에서 특정 키의 값을 찾기', () => {
    const nestedData = [[[{ id: 1 }], [{ id: 2 }]], [[{ id: 3 }]]];
    expect(hasThing(1, nestedData, 'id')).toEqual([{ id: 1 }]);
    expect(hasThing(3, nestedData, 'id')).toEqual([{ id: 3 }]);
    expect(hasThing(5, nestedData, 'id')).toEqual([]);
  });

  test('객체배열에서 특정 문자열의 값 찾기', () => {
    const people = [[{ name: 'Alice' }, { name: 'Bob' }], [{ name: 'Charlie' }]];
    expect(hasThing('Alice', people, 'name')).toEqual([{ name: 'Alice' }]);
    expect(hasThing('Charlie', people, 'name')).toEqual([{ name: 'Charlie' }]);
    expect(hasThing('David', people, 'name')).toEqual([]);
  });

  test('key 없이 동작', () => {
    expect(
      hasThing(42, [
        [42, 43],
        [44, 45]
      ])
    ).toEqual([42]);
    expect(hasThing('hello', [['hi', 'hello'], ['world']])).toEqual(['hello']);
    expect(hasThing('notfound', [['hi', 'hello'], ['world']])).toEqual([]);
  });

  test('key없을 때 객체 비교하면 빈 배열', () => {
    const objArray = [[{ id: 1 }], [{ id: 2 }]];
    expect(hasThing({ id: 1 }, objArray)).toEqual([]);
  });

  test('빈 배열을 입력하면 빈 배열 반환', () => {
    expect(hasThing(1, [[]])).toEqual([]);
    expect(hasThing(1, [])).toEqual([]);
  });

  test('key가 존재하지 않는 경우 빈 배열', () => {
    const data = [[{ id: 1, name: 'Alice' }], [{ id: 2, name: 'Bob' }]];
    expect(hasThing(1, data, 'age' as any)).toEqual([]);
  });
});
