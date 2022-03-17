[sushi-turbo](../README.md) / [Exports](../modules.md) / routing/routeGraph

# Module: routing/routeGraph

## Table of contents

### Functions

- [annotateRoutesWithGainToDest](routing_routeGraph.md#annotaterouteswithgaintodest)
- [annotateRoutesWithSymbols](routing_routeGraph.md#annotaterouteswithsymbols)
- [annotateRoutesWithUSD](routing_routeGraph.md#annotaterouteswithusd)
- [annotateRoutesWithYieldToDest](routing_routeGraph.md#annotaterouteswithyieldtodest)
- [convertRoutesToLegacyFmt](routing_routeGraph.md#convertroutestolegacyfmt)
- [findRoutes](routing_routeGraph.md#findroutes)
- [pruneRoutes](routing_routeGraph.md#pruneroutes)
- [routesToString](routing_routeGraph.md#routestostring)
- [unstackRoutes](routing_routeGraph.md#unstackroutes)

## Functions

### annotateRoutesWithGainToDest

▸ **annotateRoutesWithGainToDest**(`routes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `routes` | [`VFRoutes`](utils_types.md#vfroutes) |

#### Returns

`void`

#### Defined in

[routing/routeGraph.ts:385](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeGraph.ts#L385)

___

### annotateRoutesWithSymbols

▸ **annotateRoutesWithSymbols**(`tokenData`, `routes`, `includeIdLast4?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tokenData` | [`Tokens`](../classes/utils_types.Tokens.md) | `undefined` |
| `routes` | [`VFRoutes`](utils_types.md#vfroutes) | `undefined` |
| `includeIdLast4` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[routing/routeGraph.ts:368](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeGraph.ts#L368)

___

### annotateRoutesWithUSD

▸ **annotateRoutesWithUSD**(`allPairData`, `wethPairDict`, `routes`, `updatePairData?`, `blockNumber?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `allPairData` | [`Pairs`](../classes/utils_types.Pairs.md) | `undefined` |
| `wethPairDict` | [`WethPairIdDict`](../interfaces/utils_types.WethPairIdDict.md) | `undefined` |
| `routes` | [`VFRoutes`](utils_types.md#vfroutes) | `undefined` |
| `updatePairData` | `boolean` | `true` |
| `blockNumber` | `number` | `NO_BLOCK_NUM` |

#### Returns

`Promise`<`void`\>

#### Defined in

[routing/routeGraph.ts:274](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeGraph.ts#L274)

___

### annotateRoutesWithYieldToDest

▸ **annotateRoutesWithYieldToDest**(`routes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `routes` | [`VFRoutes`](utils_types.md#vfroutes) |

#### Returns

`void`

#### Defined in

[routing/routeGraph.ts:406](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeGraph.ts#L406)

___

### convertRoutesToLegacyFmt

▸ **convertRoutesToLegacyFmt**(`allPairData`, `tokenData`, `routes`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `allPairData` | [`Pairs`](../classes/utils_types.Pairs.md) |
| `tokenData` | [`Tokens`](../classes/utils_types.Tokens.md) |
| `routes` | [`VFRoutes`](utils_types.md#vfroutes) |

#### Returns

`any`

#### Defined in

[routing/routeGraph.ts:515](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeGraph.ts#L515)

___

### findRoutes

▸ **findRoutes**(`pairGraph`, `srcAddr`, `dstAddr`, `constraints?`, `verbose?`): [`VFStackedRoutes`](utils_types.md#vfstackedroutes)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pairGraph` | [`PairGraph`](../interfaces/utils_types.PairGraph.md) |
| `srcAddr` | `string` |
| `dstAddr` | `string` |
| `constraints?` | [`Constraints`](../interfaces/utils_types.Constraints.md) |
| `verbose?` | `boolean` |

#### Returns

[`VFStackedRoutes`](utils_types.md#vfstackedroutes)

#### Defined in

[routing/routeGraph.ts:85](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeGraph.ts#L85)

___

### pruneRoutes

▸ **pruneRoutes**(`routes`, `options?`): [`VFRoutes`](utils_types.md#vfroutes)

pruneRoutes removes any routes that are below the specified minimum gain to
destination. This is done by examining the 1st segment of each route's gain to
destination (which is cumulative for the entire route). Similarly, only the top
maxRoutes routes are returned, which is accomplished by sorting on gain to destination
and returning the first maxRoutes routes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `routes` | [`VFRoutes`](utils_types.md#vfroutes) |
| `options?` | `any` |

#### Returns

[`VFRoutes`](utils_types.md#vfroutes)

prunedRoutes in descending order by gain to destination

#### Defined in

[routing/routeGraph.ts:439](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeGraph.ts#L439)

___

### routesToString

▸ **routesToString**(`rolledRoutes`, `tokenData`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rolledRoutes` | [`VFStackedRoutes`](utils_types.md#vfstackedroutes) |
| `tokenData` | [`Tokens`](../classes/utils_types.Tokens.md) |

#### Returns

`string`

#### Defined in

[routing/routeGraph.ts:176](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeGraph.ts#L176)

___

### unstackRoutes

▸ **unstackRoutes**(`stackedRoutes`): [`VFRoutes`](utils_types.md#vfroutes)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stackedRoutes` | [`VFStackedRoutes`](utils_types.md#vfstackedroutes) |

#### Returns

[`VFRoutes`](utils_types.md#vfroutes)

#### Defined in

[routing/routeGraph.ts:205](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeGraph.ts#L205)
