[sushi-turbo](../README.md) / [Exports](../modules.md) / [utils/types](../modules/utils_types.md) / Pairs

# Class: Pairs

[utils/types](../modules/utils_types.md).Pairs

## Table of contents

### Constructors

- [constructor](utils_types.Pairs.md#constructor)

### Properties

- [\_lowestBlockNumber](utils_types.Pairs.md#_lowestblocknumber)
- [\_pairs](utils_types.Pairs.md#_pairs)
- [\_updatedSinceLBN](utils_types.Pairs.md#_updatedsincelbn)

### Methods

- [addPair](utils_types.Pairs.md#addpair)
- [clearUpdatedSinceLowestBlockNumber](utils_types.Pairs.md#clearupdatedsincelowestblocknumber)
- [deserialize](utils_types.Pairs.md#deserialize)
- [getLowestBlockNumber](utils_types.Pairs.md#getlowestblocknumber)
- [getPair](utils_types.Pairs.md#getpair)
- [getPairIds](utils_types.Pairs.md#getpairids)
- [serialize](utils_types.Pairs.md#serialize)
- [setLowestBlockNumber](utils_types.Pairs.md#setlowestblocknumber)
- [updatePairs](utils_types.Pairs.md#updatepairs)

## Constructors

### constructor

• **new Pairs**()

#### Defined in

[utils/types.ts:44](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/types.ts#L44)

## Properties

### \_lowestBlockNumber

• `Private` **\_lowestBlockNumber**: `number`

#### Defined in

[utils/types.ts:141](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/types.ts#L141)

___

### \_pairs

• `Private` **\_pairs**: [`PairDict`](../interfaces/utils_types.PairDict.md)

Members ...

#### Defined in

[utils/types.ts:140](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/types.ts#L140)

___

### \_updatedSinceLBN

• `Private` **\_updatedSinceLBN**: `boolean`

#### Defined in

[utils/types.ts:142](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/types.ts#L142)

## Methods

### addPair

▸ **addPair**(`pair`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pair` | [`Pair`](../interfaces/utils_types.Pair.md) |

#### Returns

`void`

#### Defined in

[utils/types.ts:53](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/types.ts#L53)

___

### clearUpdatedSinceLowestBlockNumber

▸ **clearUpdatedSinceLowestBlockNumber**(): `void`

#### Returns

`void`

#### Defined in

[utils/types.ts:117](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/types.ts#L117)

___

### deserialize

▸ **deserialize**(`serializedObj`): `void`

 Serialization / De-Serialization methods

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedObj` | `any` |

#### Returns

`void`

#### Defined in

[utils/types.ts:124](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/types.ts#L124)

___

### getLowestBlockNumber

▸ **getLowestBlockNumber**(): `number`

#### Returns

`number`

#### Defined in

[utils/types.ts:113](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/types.ts#L113)

___

### getPair

▸ **getPair**(`id`): [`Pair`](../interfaces/utils_types.Pair.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`Pair`](../interfaces/utils_types.Pair.md)

#### Defined in

[utils/types.ts:76](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/types.ts#L76)

___

### getPairIds

▸ **getPairIds**(): `string`[]

#### Returns

`string`[]

#### Defined in

[utils/types.ts:105](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/types.ts#L105)

___

### serialize

▸ **serialize**(): `any`

#### Returns

`any`

#### Defined in

[utils/types.ts:130](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/types.ts#L130)

___

### setLowestBlockNumber

▸ **setLowestBlockNumber**(`lbn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lbn` | `number` |

#### Returns

`void`

#### Defined in

[utils/types.ts:109](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/types.ts#L109)

___

### updatePairs

▸ **updatePairs**(`updatedPairs`, `updateTimeMs`, `updateBlockNum?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `updatedPairs` | [`PairLite`](../interfaces/utils_types.PairLite.md)[] |
| `updateTimeMs` | `number` |
| `updateBlockNum?` | `number` |

#### Returns

`void`

#### Defined in

[utils/types.ts:81](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/types.ts#L81)
