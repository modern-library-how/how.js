# Function: findNearest()

> **findNearest**(`arr`, `value`): `undefined` \| `number`

Defined in: [array/findNearest.ts:18](https://github.com/modern-library-how/how.js/blob/249a8a317fb7b78797daf1e1a1c329e2704e099a/src/array/findNearest.ts#L18)

배열에서 주어진 값과 가장 근접한 값을 반환하는 함수

## Parameters

### arr

`number`[]

검색 대상 배열 (예: [1, 5, 9, 15])

### value

`number`

기준 값 (예: 10)

## Returns

`undefined` \| `number`

주어진 값과 가장 근접한 배열의 값 (예: 9)

## Remarks

이 함수는 주어진 배열에서 기준 값과의 차이가 가장 작은 값을 찾아 반환합니다.
차이가 동일할 경우, 배열에서 더 앞쪽에 위치한 원소가 반환됩니다.

## Example

```ts
findNearest([1, 5, 9, 15], 10); // => 9
```
