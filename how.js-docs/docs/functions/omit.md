# Function: omit()

> **omit**\<`T`, `K`\>(`obj`, `keys`): `Omit`\<`T`, `K`\>

Defined in: [object/omit.ts:24](https://github.com/modern-library-how/how.js/blob/249a8a317fb7b78797daf1e1a1c329e2704e099a/src/object/omit.ts#L24)

원하는 key를 제외한 Object를 보여주는 함수

## Type Parameters

### T

`T` *extends* `object`

객체의 타입

### K

`K` *extends* `string` \| `number` \| `symbol`

객체 내 키의 타입

## Parameters

### obj

`T`

특정 키를 제외할 대상 객체
```ts
(예: { a: 2, b: 3, c: 5 })
```

### keys

`K`[]

제거할 키들의 배열 (예: ["b", "c"])

## Returns

`Omit`\<`T`, `K`\>

지정한 키들이 제거된 새로운 객체
```ts
(예: { a: 2 })
```

## Example

```ts
const object = { a: 2, b: 3, c: 5 };
const omittedObject = omit(object, ["b", "c"]);
// omittedObject = { a: 2 }
```
