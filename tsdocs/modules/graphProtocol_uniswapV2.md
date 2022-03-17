[sushi-turbo](../README.md) / [Exports](../modules.md) / graphProtocol/uniswapV2

# Module: graphProtocol/uniswapV2

## Table of contents

### Functions

- [\_getPairUpdate](graphProtocol_uniswapV2.md#_getpairupdate)
- [fetchAllRawPairsV2](graphProtocol_uniswapV2.md#fetchallrawpairsv2)
- [fetchAllTokensV2](graphProtocol_uniswapV2.md#fetchalltokensv2)
- [getUpdatedPairData](graphProtocol_uniswapV2.md#getupdatedpairdata)

## Functions

### \_getPairUpdate

▸ **_getPairUpdate**(`pairIds`, `blockNumber?`, `missingDataRetries?`): `Promise`<`undefined` \| [`PairLite`](../interfaces/utils_types.PairLite.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pairIds` | `string`[] | `undefined` |
| `blockNumber` | `number` | `NO_BLOCK_NUM` |
| `missingDataRetries` | `number` | `5` |

#### Returns

`Promise`<`undefined` \| [`PairLite`](../interfaces/utils_types.PairLite.md)[]\>

#### Defined in

[graphProtocol/uniswapV2.ts:175](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/graphProtocol/uniswapV2.ts#L175)

___

### fetchAllRawPairsV2

▸ **fetchAllRawPairsV2**(): `Promise`<[`Pairs`](../classes/utils_types.Pairs.md)\>

fetchAllPairs:
  Fetches all uniswap pairs from the SushiSwap Graph.

TODO: Look at extracting an error for the unexpected condition termination
TODO: See above TO DO for getRawPairsV2 for block number consistency.

#### Returns

`Promise`<[`Pairs`](../classes/utils_types.Pairs.md)\>

#### Defined in

[graphProtocol/uniswapV2.ts:124](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/graphProtocol/uniswapV2.ts#L124)

___

### fetchAllTokensV2

▸ **fetchAllTokensV2**(): `Promise`<[`Tokens`](../classes/utils_types.Tokens.md)\>

#### Returns

`Promise`<[`Tokens`](../classes/utils_types.Tokens.md)\>

#### Defined in

[graphProtocol/uniswapV2.ts:326](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/graphProtocol/uniswapV2.ts#L326)

___

### getUpdatedPairData

▸ **getUpdatedPairData**(`pairIds`, `blockNumber?`, `missingDataRetries?`): `Promise`<[`PairLite`](../interfaces/utils_types.PairLite.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pairIds` | `Set`<`string`\> | `undefined` |
| `blockNumber` | `number` | `NO_BLOCK_NUM` |
| `missingDataRetries` | `number` | `5` |

#### Returns

`Promise`<[`PairLite`](../interfaces/utils_types.PairLite.md)[]\>

#### Defined in

[graphProtocol/uniswapV2.ts:236](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/graphProtocol/uniswapV2.ts#L236)
