# Function: findMostFrequent()

> **findMostFrequent**\<`T`\>(`arr`): `undefined` \| `string` \| `number`

Defined in: [array/findMostFrequent.ts:17](https://github.com/modern-library-how/how.js/blob/249a8a317fb7b78797daf1e1a1c329e2704e099a/src/array/findMostFrequent.ts#L17)

배열에서 가장 많이 등장한 원소를 반환하는 함수

## Type Parameters

### T

`T` *extends* `string` \| `number`

## Parameters

### arr

`T`[]

검색 대상 배열 (예: [1, 2, 3, 2, 4, 2])

## Returns

`undefined` \| `string` \| `number`

가장 많이 등장한 원소 (예: 2)

## Remarks

이 함수는 주어진 배열에서 각 원소의 등장 빈도를 계산한 후, 가장 많이 등장한 원소를 반환합니다.
배열이 비어 있을 경우에는 undefined를 반환합니다.

## Example

```ts
findMostFrequent([1, 2, 3, 2, 4, 2]); // => 2
```
