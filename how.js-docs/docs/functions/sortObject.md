# Function: sortObject()

> **sortObject**\<`T`\>(`arr`, `key`, `isAscending`): `T`[]

Defined in: [object/sortObject.ts:33](https://github.com/modern-library-how/how.js/blob/249a8a317fb7b78797daf1e1a1c329e2704e099a/src/object/sortObject.ts#L33)

주어진 키를 기준으로 배열 안 객체를 정렬하는 함수

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `string` \| `number`\>

## Parameters

### arr

`T`[]

정렬할 객체가 포함된 배열
```ts
 (예: \[{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }\])
```

### key

keyof `T`

정렬 기준으로 사용할 객체의 키 (예: 'age')

### isAscending

`boolean` = `true`

오름차순 정렬 여부 (true이면 오름차순, false이면 내림차순; 기본값은 true)

## Returns

`T`[]

정렬된 객체 배열

## Remarks

이 함수는 객체를 포함하는 배열을 특정 키 값을 기준으로 오름차순 또는 내림차순으로 정렬합니다.
만약 배열이 비어 있다면 빈 배열을 반환합니다.

## Example

```ts
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
];

// 나이 기준 오름차순 정렬
sortObject(people, 'age', true);
// => [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 }]

// 이름 기준 내림차순 정렬
sortObject(people, 'name', false);
// => [{ name: 'Charlie', age: 35 }, { name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }]
```
