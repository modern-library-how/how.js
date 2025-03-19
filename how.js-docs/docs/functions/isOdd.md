# Function: isOdd()

> **isOdd**(`numberToCheck`): `boolean`

Defined in: [number/isOdd.ts:19](https://github.com/modern-library-how/how.js/blob/249a8a317fb7b78797daf1e1a1c329e2704e099a/src/number/isOdd.ts#L19)

주어진 숫자가 홀수인지 확인하는 함수입니다.

## Parameters

### numberToCheck

`number`

홀수 여부를 확인할 숫자.

## Returns

`boolean`

홀수이면 `true`, 그렇지 않으면 `false`.

## Remarks

이 함수는 정수이며 유한한 숫자만 유효한 입력으로 처리합니다.
실수 또는 무한대 값이 입력되면 `false`를 반환합니다.

## Example

```ts
console.log(isOdd(5)); // true
console.log(isOdd(8)); // false
console.log(isOdd(3.5)); // false
console.log(isOdd(Infinity)); // false
```
