# Function: findAllIndex()

> **findAllIndex**\<`T`\>(`arr`, `equalValue`): `number`[]

Defined in: [array/findAllIndex.ts:18](https://github.com/modern-library-how/how.js/blob/249a8a317fb7b78797daf1e1a1c329e2704e099a/src/array/findAllIndex.ts#L18)

배열에서 주어진 값과 엄격하게(===) 일치하는 모든 요소의 인덱스를 반환하는 함수

## Type Parameters

### T

`T`

## Parameters

### arr

`T`[]

검색 대상 배열 (예: [1, 2, 3, 2, 4])

### equalValue

`T`

찾고자 하는 값 (예: 2)

## Returns

`number`[]

값과 일치하는 모든 요소의 인덱스를 담은 배열 (예: [1, 3])

## Remarks

이 함수는 배열 내에서 주어진 값과 동일한 모든 요소의 인덱스를 찾아 반환합니다.
만약 찾고자 하는 값이 NaN인 경우, 비교가 불가능하여 빈 배열을 반환합니다.

## Example

```ts
findAllIndex([1, 2, 3, 2, 4], 2); // => [1, 3]
```
