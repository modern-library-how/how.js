# Function: addPercentage()

> **addPercentage**(`numberToCalc`, `percentToApply`): `number`

Defined in: [function/addPercentage.ts:18](https://github.com/modern-library-how/how.js/blob/249a8a317fb7b78797daf1e1a1c329e2704e099a/src/function/addPercentage.ts#L18)

주어진 숫자에 지정된 퍼센트를 적용하여 증가시키는 함수

## Parameters

### numberToCalc

`number`

퍼센트를 적용할 기본 숫자

### percentToApply

`number`

적용할 퍼센트 값 ( ex : 10이면 10% )

## Returns

`number`

퍼센트가 적용될 결과

## Remarks

이 함수는 가격 할인, 세금 계산 등의 목적으로 활용할 수 있습니다.
퍼센트 값은 100을 기준으로 나눈 후 적용됩니다.

## Example

```ts
//1000원의 10%를 더함
const result = addPercentage(1000,10); // 1100반환
```
