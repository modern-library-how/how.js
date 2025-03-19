# Function: isEmpty()

> **isEmpty**(`value`): `boolean`

Defined in: [function/isEmpty.ts:20](https://github.com/modern-library-how/how.js/blob/249a8a317fb7b78797daf1e1a1c329e2704e099a/src/function/isEmpty.ts#L20)

주어진 값이 비어있는지 확인합니다.

## Parameters

### value

`any`

검사할 값

## Returns

`boolean`

값이 비어있다면 'true', 그렇지 않으면 'false'

## Remark

* 다음 경우 값을 비어있는 것으로 간주합니다:
- `null` 또는 `undefined`인 경우.
- `NaN`인 경우.
- 빈 문자열(`''`) 또는 빈 배열(`[]`)인 경우.
- 빈 `Map` 또는 `Set`인 경우.
- 속성이 없는 빈 객체(`{}`)인 경우.

## Example

```ts
isEmpty([1,2,3]); // false
isEmpty([]); // true
```
