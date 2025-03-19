# Function: findNth()

> **findNth**\<`T`\>(`arr`, `searchElement`, `searchIdx`): `number`

Defined in: [array/findNth.ts:20](https://github.com/modern-library-how/how.js/blob/249a8a317fb7b78797daf1e1a1c329e2704e099a/src/array/findNth.ts#L20)

배열에서 찾고자 하는 원소의 N번째 위치의 인덱스를 반환하는 함수

## Type Parameters

### T

`T`

## Parameters

### arr

`T`[]

검색 대상 배열 (예: ['a', 'b', 'a', 'c', 'a'])

### searchElement

`T`

찾고자 하는 원소 (예: 'a')

### searchIdx

`number` = `1`

몇 번째로 등장한 원소의 인덱스를 반환할지 결정 (예: 2)

## Returns

`number`

조건을 만족하는 원소의 인덱스 (예: 2) 또는 해당 원소가 충분히 등장하지 않으면 NaN

## Remarks

이 함수는 배열 내에서 지정된 원소가 등장하는 순서를 기준으로,
N번째 등장하는 원소의 인덱스를 반환합니다.
만약 searchIdx가 0 이하이거나, 배열 내에 해당 원소가 N번 등장하지 않으면 NaN을 반환합니다.

## Example

```ts
findNth(['a', 'b', 'a', 'c', 'a'], 'a', 2); // => 2
```
