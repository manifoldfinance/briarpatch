[sushi-turbo](../README.md) / [Exports](../modules.md) / [routing/types](../modules/routing_types.md) / RouteData

# Class: RouteData

[routing/types](../modules/routing_types.md).RouteData

## Table of contents

### Constructors

- [constructor](routing_types.RouteData.md#constructor)

### Properties

- [destAddr](routing_types.RouteData.md#destaddr)
- [destSymbol](routing_types.RouteData.md#destsymbol)
- [inputAmount](routing_types.RouteData.md#inputamount)
- [multiPathElements](routing_types.RouteData.md#multipathelements)
- [multiPathValveYield](routing_types.RouteData.md#multipathvalveyield)
- [routeOptions](routing_types.RouteData.md#routeoptions)
- [routeStats](routing_types.RouteData.md#routestats)
- [singlePathElements](routing_types.RouteData.md#singlepathelements)
- [singlePathValveYield](routing_types.RouteData.md#singlepathvalveyield)
- [sourceAddr](routing_types.RouteData.md#sourceaddr)
- [sourceSymbol](routing_types.RouteData.md#sourcesymbol)
- [uniYield](routing_types.RouteData.md#uniyield)

### Methods

- [getDestAddr](routing_types.RouteData.md#getdestaddr)
- [getDestSymbol](routing_types.RouteData.md#getdestsymbol)
- [getDifferenceMultiPath](routing_types.RouteData.md#getdifferencemultipath)
- [getDifferenceSinglePath](routing_types.RouteData.md#getdifferencesinglepath)
- [getInputAmount](routing_types.RouteData.md#getinputamount)
- [getMultiPathElements](routing_types.RouteData.md#getmultipathelements)
- [getMultiPathValveYield](routing_types.RouteData.md#getmultipathvalveyield)
- [getPercentDifferenceMultiPath](routing_types.RouteData.md#getpercentdifferencemultipath)
- [getPercentDifferenceSinglePath](routing_types.RouteData.md#getpercentdifferencesinglepath)
- [getRouteStats](routing_types.RouteData.md#getroutestats)
- [getSinglePathElements](routing_types.RouteData.md#getsinglepathelements)
- [getSinglePathValveYield](routing_types.RouteData.md#getsinglepathvalveyield)
- [getSourceAddr](routing_types.RouteData.md#getsourceaddr)
- [getSourceSymbol](routing_types.RouteData.md#getsourcesymbol)
- [getUniYield](routing_types.RouteData.md#getuniyield)
- [initFromSerialization](routing_types.RouteData.md#initfromserialization)
- [serialize](routing_types.RouteData.md#serialize)
- [setInputAmount](routing_types.RouteData.md#setinputamount)
- [setMultiPathElementsFromTree](routing_types.RouteData.md#setmultipathelementsfromtree)
- [setMultiPathValveYield](routing_types.RouteData.md#setmultipathvalveyield)
- [setRouteStats](routing_types.RouteData.md#setroutestats)
- [setSinglePathElementsFromTree](routing_types.RouteData.md#setsinglepathelementsfromtree)
- [setSinglePathValveYield](routing_types.RouteData.md#setsinglepathvalveyield)
- [setUniYield](routing_types.RouteData.md#setuniyield)

## Constructors

### constructor

• **new RouteData**(`sourceAddr?`, `sourceSymbol?`, `destAddr?`, `destSymbol?`, `routeOptions?`, `singlePathElements?`, `inputAmount?`, `uniYield?`, `singlePathValveYield?`, `multiPathElements?`, `multiPathValveYield?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `sourceAddr` | `string` | `''` |
| `sourceSymbol` | `string` | `''` |
| `destAddr` | `string` | `''` |
| `destSymbol` | `string` | `''` |
| `routeOptions?` | `any` | `undefined` |
| `singlePathElements?` | `any` | `undefined` |
| `inputAmount?` | `number` | `undefined` |
| `uniYield?` | [`TradeYieldData`](../interfaces/routing_types.TradeYieldData.md) | `undefined` |
| `singlePathValveYield?` | [`TradeYieldData`](../interfaces/routing_types.TradeYieldData.md) | `undefined` |
| `multiPathElements?` | `any` | `undefined` |
| `multiPathValveYield?` | [`TradeYieldData`](../interfaces/routing_types.TradeYieldData.md) | `undefined` |

#### Defined in

[routing/types.ts:75](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L75)

## Properties

### destAddr

• `Private` **destAddr**: `string`

#### Defined in

[routing/types.ts:238](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L238)

___

### destSymbol

• `Private` **destSymbol**: `string`

#### Defined in

[routing/types.ts:239](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L239)

___

### inputAmount

• `Private` `Optional` **inputAmount**: `number`

#### Defined in

[routing/types.ts:242](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L242)

___

### multiPathElements

• `Private` `Optional` **multiPathElements**: `any`

#### Defined in

[routing/types.ts:245](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L245)

___

### multiPathValveYield

• `Private` `Optional` **multiPathValveYield**: [`TradeYieldData`](../interfaces/routing_types.TradeYieldData.md)

#### Defined in

[routing/types.ts:246](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L246)

___

### routeOptions

• `Private` `Optional` **routeOptions**: `any`

#### Defined in

[routing/types.ts:240](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L240)

___

### routeStats

• `Private` **routeStats**: [`RouteStats`](routing_types.RouteStats.md)

#### Defined in

[routing/types.ts:247](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L247)

___

### singlePathElements

• `Private` `Optional` **singlePathElements**: `any`

#### Defined in

[routing/types.ts:241](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L241)

___

### singlePathValveYield

• `Private` `Optional` **singlePathValveYield**: [`TradeYieldData`](../interfaces/routing_types.TradeYieldData.md)

#### Defined in

[routing/types.ts:244](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L244)

___

### sourceAddr

• `Private` **sourceAddr**: `string`

#### Defined in

[routing/types.ts:236](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L236)

___

### sourceSymbol

• `Private` **sourceSymbol**: `string`

#### Defined in

[routing/types.ts:237](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L237)

___

### uniYield

• `Private` `Optional` **uniYield**: [`TradeYieldData`](../interfaces/routing_types.TradeYieldData.md)

#### Defined in

[routing/types.ts:243](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L243)

## Methods

### getDestAddr

▸ **getDestAddr**(): `string`

#### Returns

`string`

#### Defined in

[routing/types.ts:126](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L126)

___

### getDestSymbol

▸ **getDestSymbol**(): `string`

#### Returns

`string`

#### Defined in

[routing/types.ts:118](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L118)

___

### getDifferenceMultiPath

▸ **getDifferenceMultiPath**(`inUsd?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `inUsd` | `boolean` | `false` |

#### Returns

`number`

#### Defined in

[routing/types.ts:192](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L192)

___

### getDifferenceSinglePath

▸ **getDifferenceSinglePath**(`inUsd?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `inUsd` | `boolean` | `false` |

#### Returns

`number`

#### Defined in

[routing/types.ts:180](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L180)

___

### getInputAmount

▸ **getInputAmount**(): `number`

#### Returns

`number`

#### Defined in

[routing/types.ts:134](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L134)

___

### getMultiPathElements

▸ **getMultiPathElements**(): `any`

#### Returns

`any`

#### Defined in

[routing/types.ts:176](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L176)

___

### getMultiPathValveYield

▸ **getMultiPathValveYield**(): `undefined` \| [`TradeYieldData`](../interfaces/routing_types.TradeYieldData.md)

#### Returns

`undefined` \| [`TradeYieldData`](../interfaces/routing_types.TradeYieldData.md)

#### Defined in

[routing/types.ts:158](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L158)

___

### getPercentDifferenceMultiPath

▸ **getPercentDifferenceMultiPath**(): `number`

#### Returns

`number`

#### Defined in

[routing/types.ts:216](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L216)

___

### getPercentDifferenceSinglePath

▸ **getPercentDifferenceSinglePath**(): `number`

#### Returns

`number`

#### Defined in

[routing/types.ts:204](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L204)

___

### getRouteStats

▸ **getRouteStats**(): [`RouteStats`](routing_types.RouteStats.md)

#### Returns

[`RouteStats`](routing_types.RouteStats.md)

#### Defined in

[routing/types.ts:232](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L232)

___

### getSinglePathElements

▸ **getSinglePathElements**(): `any`

#### Returns

`any`

#### Defined in

[routing/types.ts:167](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L167)

___

### getSinglePathValveYield

▸ **getSinglePathValveYield**(): `undefined` \| [`TradeYieldData`](../interfaces/routing_types.TradeYieldData.md)

#### Returns

`undefined` \| [`TradeYieldData`](../interfaces/routing_types.TradeYieldData.md)

#### Defined in

[routing/types.ts:150](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L150)

___

### getSourceAddr

▸ **getSourceAddr**(): `string`

#### Returns

`string`

#### Defined in

[routing/types.ts:122](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L122)

___

### getSourceSymbol

▸ **getSourceSymbol**(): `string`

#### Returns

`string`

#### Defined in

[routing/types.ts:114](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L114)

___

### getUniYield

▸ **getUniYield**(): `undefined` \| [`TradeYieldData`](../interfaces/routing_types.TradeYieldData.md)

#### Returns

`undefined` \| [`TradeYieldData`](../interfaces/routing_types.TradeYieldData.md)

#### Defined in

[routing/types.ts:142](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L142)

___

### initFromSerialization

▸ **initFromSerialization**(`serialization`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialization` | `string` |

#### Returns

`void`

#### Defined in

[routing/types.ts:102](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L102)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Defined in

[routing/types.ts:110](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L110)

___

### setInputAmount

▸ **setInputAmount**(`amount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

`void`

#### Defined in

[routing/types.ts:130](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L130)

___

### setMultiPathElementsFromTree

▸ **setMultiPathElementsFromTree**(`mpTradeTree`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mpTradeTree` | [`TradeTreeNode`](../interfaces/routing_routeTree.TradeTreeNode.md) |

#### Returns

`void`

#### Defined in

[routing/types.ts:171](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L171)

___

### setMultiPathValveYield

▸ **setMultiPathValveYield**(`tradeYield`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tradeYield` | [`TradeYieldData`](../interfaces/routing_types.TradeYieldData.md) |

#### Returns

`void`

#### Defined in

[routing/types.ts:154](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L154)

___

### setRouteStats

▸ **setRouteStats**(`routeStats`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `routeStats` | [`RouteStats`](routing_types.RouteStats.md) |

#### Returns

`void`

#### Defined in

[routing/types.ts:228](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L228)

___

### setSinglePathElementsFromTree

▸ **setSinglePathElementsFromTree**(`spTradeTree`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spTradeTree` | [`TradeTreeNode`](../interfaces/routing_routeTree.TradeTreeNode.md) |

#### Returns

`void`

#### Defined in

[routing/types.ts:162](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L162)

___

### setSinglePathValveYield

▸ **setSinglePathValveYield**(`tradeYield`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tradeYield` | [`TradeYieldData`](../interfaces/routing_types.TradeYieldData.md) |

#### Returns

`void`

#### Defined in

[routing/types.ts:146](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L146)

___

### setUniYield

▸ **setUniYield**(`tradeYield`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tradeYield` | [`TradeYieldData`](../interfaces/routing_types.TradeYieldData.md) |

#### Returns

`void`

#### Defined in

[routing/types.ts:138](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/types.ts#L138)
