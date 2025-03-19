# Function: removeWhitespace()

> **removeWhitespace**(`str`): `string`

Defined in: [function/removeWhitespace.ts:11](https://github.com/modern-library-how/how.js/blob/249a8a317fb7b78797daf1e1a1c329e2704e099a/src/function/removeWhitespace.ts#L11)

주어진 문자열의 모든 공백 문자를 제거하는 함수입니다.

## Parameters

### str

`string`

공백을 제거할 문자열

## Returns

`string`

- 공백이 제거된 새로운 문자열.

## Remark

이 함수는 개행 문자, 탭, 공백 등을 포함한 모든 공백 문자를 제거합니다.

## Example

```ts
console.log(removeWhitespace("  Hello  \nWorld! ")); // "HelloWorld!"
```
