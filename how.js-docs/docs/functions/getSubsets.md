# Function: getSubsets()

> **getSubsets**\<`T`\>(`arr`): `T`[][]

Defined in: [array/getSubsets.ts:18](https://github.com/modern-library-how/how.js/blob/249a8a317fb7b78797daf1e1a1c329e2704e099a/src/array/getSubsets.ts#L18)

배열의 모든 부분집합을 반환하는 함수

## Type Parameters

### T

`T`

## Parameters

### arr

`T`[]

부분집합을 생성할 대상 배열 (예: [1, 2, 3])

## Returns

`T`[][]

주어진 배열의 모든 부분집합을 포함하는 배열 (예: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])

## Remarks

이 함수는 주어진 배열의 모든 가능한 부분집합을 생성합니다.
생성되는 부분집합은 빈 배열부터 시작하여 전체 배열을 포함하는 배열까지 모두 포함됩니다.

## Example

```ts
getSubsets([1, 2, 3]);
// => [ [], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3] ]
```
