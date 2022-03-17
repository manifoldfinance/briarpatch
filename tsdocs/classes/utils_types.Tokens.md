[sushi-turbo](../README.md) / [Exports](../modules.md) / [utils/types](../modules/utils_types.md) / Tokens

# Class: Tokens

[utils/types](../modules/utils_types.md).Tokens

## Table of contents

### Constructors

- [constructor](utils_types.Tokens.md#constructor)

### Properties

- [\_tokens](utils_types.Tokens.md#_tokens)

### Methods

- [addToken](utils_types.Tokens.md#addtoken)
- [deserialize](utils_types.Tokens.md#deserialize)
- [getSymbol](utils_types.Tokens.md#getsymbol)
- [getToken](utils_types.Tokens.md#gettoken)
- [getTokenIds](utils_types.Tokens.md#gettokenids)
- [serialize](utils_types.Tokens.md#serialize)

## Constructors

### constructor

• **new Tokens**()

#### Defined in

[utils/types.ts:161](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/types.ts#L161)

## Properties

### \_tokens

• `Private` **\_tokens**: [`TokenDict`](../interfaces/utils_types.TokenDict.md)

Members ...

#### Defined in

[utils/types.ts:201](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/types.ts#L201)

## Methods

### addToken

▸ **addToken**(`token`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`Token`](../interfaces/utils_types.Token.md) |

#### Returns

`void`

#### Defined in

[utils/types.ts:165](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/types.ts#L165)

___

### deserialize

▸ **deserialize**(`tokenDict`): `void`

 Serialization /  De-Serialization methods

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenDict` | [`TokenDict`](../interfaces/utils_types.TokenDict.md) |

#### Returns

`void`

#### Defined in

[utils/types.ts:190](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/types.ts#L190)

___

### getSymbol

▸ **getSymbol**(`id`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`string`

#### Defined in

[utils/types.ts:183](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/types.ts#L183)

___

### getToken

▸ **getToken**(`id`): [`Token`](../interfaces/utils_types.Token.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`Token`](../interfaces/utils_types.Token.md)

#### Defined in

[utils/types.ts:179](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/types.ts#L179)

___

### getTokenIds

▸ **getTokenIds**(): `string`[]

#### Returns

`string`[]

#### Defined in

[utils/types.ts:175](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/types.ts#L175)

___

### serialize

▸ **serialize**(): [`TokenDict`](../interfaces/utils_types.TokenDict.md)

#### Returns

[`TokenDict`](../interfaces/utils_types.TokenDict.md)

#### Defined in

[utils/types.ts:194](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/types.ts#L194)
