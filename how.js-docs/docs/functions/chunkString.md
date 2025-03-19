# Function: chunkString()

> **chunkString**(`str`, `splitNum`, `separator`): `string`

Defined in: [string/chunkString.ts:20](https://github.com/modern-library-how/how.js/blob/249a8a317fb7b78797daf1e1a1c329e2704e099a/src/string/chunkString.ts#L20)

문자열을 원하는 크기만큼 구분자로 나눠주는 함수

## Parameters

### str

`string`

입력 문자열 (예: "abcdefghij")

### splitNum

`number`

문자열을 나눌 크기 (예: 3)

### separator

`string`

각 부분을 연결할 구분자 (예: "-")

## Returns

`string`

나눠진 결과 문자열 (예: "abc-def-ghi-j")

## Remarks

이 함수는 입력된 문자열을 지정된 길이(splitNum)로 나눈 후, 각 조각을 주어진 구분자(separator)로 연결하여 반환합니다.
splitNum이 0 이하이거나 유효한 정수가 아니면 원본 문자열을 그대로 반환합니다.
문자열 길이가 splitNum보다 작거나 같다면 원본 문자열을 반환합니다.

## Example

```ts
chunkString("abcdefghij", 3, "-");
// => "abc-def-ghi-j"
```
