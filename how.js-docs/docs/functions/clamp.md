# Function: clamp()

> **clamp**(`number`, `min`, `max`?): `number`

Defined in: [function/clamp.ts:25](https://github.com/modern-library-how/how.js/blob/249a8a317fb7b78797daf1e1a1c329e2704e099a/src/function/clamp.ts#L25)

숫자를 주어진 범위 내로 제한합니다.

## Parameters

### number

`number`

제한할 숫자

### min

`number`

최소 범위 값

### max?

`number`

최대 범위 값 (생략 가능)

## Returns

`number`

범위 내로 제한된 숫자

## Remarks

'max'가 제공되지 않으면 함수는 'number'와 'min' 중 더 큰 값을 반환합니다.
 즉, 'max'가 없을 때는 하한값만 적용되며 상한값은 검사하지 않습니다.

## Example

```ts
// 값을 5와 16 사이로 제한
clamp(7,5,16); // 7 반환
clamp(2,5,16); // 5 반환
clamp(20,5,16); // 16 반환

// 상한값이 없을 때
clamp(3,5) // 5 반환
clamp(8,5) // 8 반환
```
