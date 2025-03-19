# Function: isEven()

> **isEven**(`numberToCheck`): `boolean`

Defined in: [number/isEven.ts:19](https://github.com/modern-library-how/how.js/blob/249a8a317fb7b78797daf1e1a1c329e2704e099a/src/number/isEven.ts#L19)

주어진 숫자가 짝수인지 확인하는 함수입니다.

## Parameters

### numberToCheck

`number`

짝수 여부를 확인할 숫자.

## Returns

`boolean`

짝수이면 `true`, 그렇지 않으면 `false`.

## Remarks

이 함수는 정수이며 유한한 숫자만 유효한 입력으로 처리합니다.
실수 또는 무한대 값이 입력되면 `false`를 반환합니다.

## Example

```ts
console.log(isEven(4)); // true
console.log(isEven(7)); // false
console.log(isEven(3.5)); // false
console.log(isEven(Infinity)); // false
```
