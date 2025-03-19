# Function: filterNumber()

> **filterNumber**(`value`): `number`

Defined in: [number/filterNumber.ts:18](https://github.com/modern-library-how/how.js/blob/249a8a317fb7b78797daf1e1a1c329e2704e099a/src/number/filterNumber.ts#L18)

주어진 문자열에서 숫자만 필터링하여 반환하는 함수입니다.

## Parameters

### value

`string`

숫자를 추출할 문자열.

## Returns

`number`

숫자로 변환된 값. 유효한 숫자가 없으면 'NaN'.

## Remarks

이 함수는 문자열에서 숫자가 아닌 모든 문자를 제거한 후,
숫자로 변환하여 반환합니다. 만약 숫자가 하나도 없다면 'NaN'을 반환합니다.

## Example

```ts
console.log(filterNumber("abc123def")); // 123
console.log(filterNumber("no numbers")); // NaN
```
