[sushi-turbo](../README.md) / [Exports](../modules.md) / routing/quoting

# Module: routing/quoting

## Table of contents

### Functions

- [computeTradeEstimates](routing_quoting.md#computetradeestimates)
- [filterToPairIdsNotBlockNum](routing_quoting.md#filtertopairidsnotblocknum)
- [filterToPairIdsOfAge](routing_quoting.md#filtertopairidsofage)
- [getEstimatedTokensFromUSD](routing_quoting.md#getestimatedtokensfromusd)
- [getEstimatedUSD](routing_quoting.md#getestimatedusd)
- [getRoutePairIdsNotBlockNum](routing_quoting.md#getroutepairidsnotblocknum)
- [getRoutePairIdsOfAge](routing_quoting.md#getroutepairidsofage)
- [quoteRoutes](routing_quoting.md#quoteroutes)

## Functions

### computeTradeEstimates

▸ **computeTradeEstimates**(`pairData`, `tokenData`, `srcAddrLC`, `amount`): `any`

 TODO TODO TODO:

   1. This method should take advantage of complete routes
      to ensure that precision is not lost beyond 18 decimals
      instead of being called for a single route segment at a time.
       - the toExact method means we might be able to construct a
         trade (if another method exists) where we specify the last
         input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pairData` | [`Pair`](../interfaces/utils_types.Pair.md) |
| `tokenData` | [`Tokens`](../classes/utils_types.Tokens.md) |
| `srcAddrLC` | `string` |
| `amount` | `string` |

#### Returns

`any`

#### Defined in

[routing/quoting.ts:143](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/quoting.ts#L143)

___

### filterToPairIdsNotBlockNum

▸ **filterToPairIdsNotBlockNum**(`allPairData`, `pairIds`, `blockNum`): `Set`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `allPairData` | [`Pairs`](../classes/utils_types.Pairs.md) |
| `pairIds` | `Set`<`string`\> |
| `blockNum` | `number` |

#### Returns

`Set`<`string`\>

#### Defined in

[routing/quoting.ts:291](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/quoting.ts#L291)

___

### filterToPairIdsOfAge

▸ **filterToPairIdsOfAge**(`allPairData`, `pairIds`, `ageMs?`): `Set`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `allPairData` | [`Pairs`](../classes/utils_types.Pairs.md) |
| `pairIds` | `Set`<`string`\> |
| `ageMs` | `number` |

#### Returns

`Set`<`string`\>

#### Defined in

[routing/quoting.ts:272](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/quoting.ts#L272)

___

### getEstimatedTokensFromUSD

▸ **getEstimatedTokensFromUSD**(`allPairData`, `wethPairDict`, `tokenId`, `usdAmount`): `string`

To compute the amount of a token for a given amount of USD:

 TokenAmount = usdAmount * Token/Weth * Weth/USDC

This method builds a lookup that lets you get the pair IDs needed to compute this:
{
   wethId: string,
   wethTokenPairId: string,
   wethUsdtPairId: string
}

#### Parameters

| Name | Type |
| :------ | :------ |
| `allPairData` | [`Pairs`](../classes/utils_types.Pairs.md) |
| `wethPairDict` | [`WethPairIdDict`](../interfaces/utils_types.WethPairIdDict.md) |
| `tokenId` | `string` |
| `usdAmount` | `string` |

#### Returns

`string`

#### Defined in

[routing/quoting.ts:89](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/quoting.ts#L89)

___

### getEstimatedUSD

▸ **getEstimatedUSD**(`allPairData`, `wethPairDict`, `tokenId`, `tokenAmount`): `string`

To compute a token amount's approx USD value:

 TokenAmountUSD = TokenAmount * Weth/Token * USDC/Weth

This method builds a lookup that lets you get the pair IDs needed to compute this:
{
   wethId: string,
   wethTokenPairId: string,
   wethUsdtPairId: string
}

#### Parameters

| Name | Type |
| :------ | :------ |
| `allPairData` | [`Pairs`](../classes/utils_types.Pairs.md) |
| `wethPairDict` | [`WethPairIdDict`](../interfaces/utils_types.WethPairIdDict.md) |
| `tokenId` | `string` |
| `tokenAmount` | `string` |

#### Returns

`string`

#### Defined in

[routing/quoting.ts:34](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/quoting.ts#L34)

___

### getRoutePairIdsNotBlockNum

▸ **getRoutePairIdsNotBlockNum**(`allPairData`, `blockNum`, `routes`): `Set`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `allPairData` | [`Pairs`](../classes/utils_types.Pairs.md) |
| `blockNum` | `number` |
| `routes` | [`VFRoutes`](utils_types.md#vfroutes) |

#### Returns

`Set`<`string`\>

#### Defined in

[routing/quoting.ts:246](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/quoting.ts#L246)

___

### getRoutePairIdsOfAge

▸ **getRoutePairIdsOfAge**(`allPairData`, `routes`, `ageMs?`): `Set`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `allPairData` | [`Pairs`](../classes/utils_types.Pairs.md) |
| `routes` | [`VFRoutes`](utils_types.md#vfroutes) |
| `ageMs` | `number` |

#### Returns

`Set`<`string`\>

#### Defined in

[routing/quoting.ts:221](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/quoting.ts#L221)

___

### quoteRoutes

▸ **quoteRoutes**(`allPairData`, `tokenData`, `routes`, `amount`, `maxImpact?`, `updatePairData?`, `blockNumber?`, `cacheEstimates?`): `Promise`<[`VFRoutes`](utils_types.md#vfroutes)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `allPairData` | [`Pairs`](../classes/utils_types.Pairs.md) | `undefined` |
| `tokenData` | [`Tokens`](../classes/utils_types.Tokens.md) | `undefined` |
| `routes` | [`VFRoutes`](utils_types.md#vfroutes) | `undefined` |
| `amount` | `string` | `undefined` |
| `maxImpact` | `number` | `10.0` |
| `updatePairData` | `boolean` | `true` |
| `blockNumber` | `number` | `NO_BLOCK_NUM` |
| `cacheEstimates` | `boolean` | `true` |

#### Returns

`Promise`<[`VFRoutes`](utils_types.md#vfroutes)\>

#### Defined in

[routing/quoting.ts:318](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/quoting.ts#L318)
