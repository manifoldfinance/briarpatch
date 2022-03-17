[sushi-turbo](../README.md) / [Exports](../modules.md) / [routing/routeCache](../modules/routing_routeCache.md) / RouteCache

# Class: RouteCache

[routing/routeCache](../modules/routing_routeCache.md).RouteCache

## Table of contents

### Constructors

- [constructor](routing_routeCache.RouteCache.md#constructor)

### Properties

- [\_pairGraph](routing_routeCache.RouteCache.md#_pairgraph)
- [\_routeCache](routing_routeCache.RouteCache.md#_routecache)
- [\_routeConstraints](routing_routeCache.RouteCache.md#_routeconstraints)

### Methods

- [getRoutes](routing_routeCache.RouteCache.md#getroutes)
- [setPairGraph](routing_routeCache.RouteCache.md#setpairgraph)
- [\_routesTooOld](routing_routeCache.RouteCache.md#_routestooold)
- [getCacheKey](routing_routeCache.RouteCache.md#getcachekey)

## Constructors

### constructor

• **new RouteCache**(`pairGraph`, `constraints?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pairGraph` | [`PairGraph`](../interfaces/utils_types.PairGraph.md) |
| `constraints?` | [`Constraints`](../interfaces/utils_types.Constraints.md) |

#### Defined in

[routing/routeCache.ts:37](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeCache.ts#L37)

## Properties

### \_pairGraph

• `Private` **\_pairGraph**: [`PairGraph`](../interfaces/utils_types.PairGraph.md)

#### Defined in

[routing/routeCache.ts:151](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeCache.ts#L151)

___

### \_routeCache

• `Private` **\_routeCache**: `RouteCacheMap`

#### Defined in

[routing/routeCache.ts:149](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeCache.ts#L149)

___

### \_routeConstraints

• `Private` **\_routeConstraints**: [`Constraints`](../interfaces/utils_types.Constraints.md)

#### Defined in

[routing/routeCache.ts:150](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeCache.ts#L150)

## Methods

### getRoutes

▸ **getRoutes**(`srcId`, `dstId`, `options?`): `Promise`<[`VFRoutes`](../modules/utils_types.md#vfroutes)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `srcId` | `string` |
| `dstId` | `string` |
| `options` | [`RouteOptionArg`](../interfaces/routing_routeCache.RouteOptionArg.md) |

#### Returns

`Promise`<[`VFRoutes`](../modules/utils_types.md#vfroutes)\>

#### Defined in

[routing/routeCache.ts:49](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeCache.ts#L49)

___

### setPairGraph

▸ **setPairGraph**(`pairGraph`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pairGraph` | [`PairGraph`](../interfaces/utils_types.PairGraph.md) |

#### Returns

`void`

#### Defined in

[routing/routeCache.ts:130](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeCache.ts#L130)

___

### \_routesTooOld

▸ `Static` `Private` **_routesTooOld**(`routes`, `maxAge`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `routes` | `RouteCacheEntry` |
| `maxAge` | `number` |

#### Returns

`boolean`

#### Defined in

[routing/routeCache.ts:138](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeCache.ts#L138)

___

### getCacheKey

▸ `Static` **getCacheKey**(`srcId`, `dstId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `srcId` | `string` |
| `dstId` | `string` |

#### Returns

`string`

#### Defined in

[routing/routeCache.ts:134](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeCache.ts#L134)
