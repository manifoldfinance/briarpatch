[sushi-turbo](../README.md) / [Exports](../modules.md) / routing/routeTree

# Module: routing/routeTree

## Table of contents

### Interfaces

- [TradeTreeNode](../interfaces/routing_routeTree.TradeTreeNode.md)

### Functions

- [annotateTradeTreeWithUSD](routing_routeTree.md#annotatetradetreewithusd)
- [buildTradeTree](routing_routeTree.md#buildtradetree)
- [cloneTradeTree](routing_routeTree.md#clonetradetree)
- [costTradeTree](routing_routeTree.md#costtradetree)
- [getNumRoutes](routing_routeTree.md#getnumroutes)
- [getTreeRoutePath](routing_routeTree.md#gettreeroutepath)
- [pruneRoutesIfHighMGTD](routing_routeTree.md#pruneroutesifhighmgtd)
- [pruneRoutesIfHighTopLevelMGTD](routing_routeTree.md#pruneroutesifhightoplevelmgtd)
- [pruneRoutesWithDuplicatePairs](routing_routeTree.md#prunerouteswithduplicatepairs)
- [pruneTreeRoute](routing_routeTree.md#prunetreeroute)

## Functions

### annotateTradeTreeWithUSD

▸ **annotateTradeTreeWithUSD**(`allPairData`, `wethPairDict`, `rootNode`, `updatePairData?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `allPairData` | [`Pairs`](../classes/utils_types.Pairs.md) | `undefined` |
| `wethPairDict` | [`WethPairIdDict`](../interfaces/utils_types.WethPairIdDict.md) | `undefined` |
| `rootNode` | [`TradeTreeNode`](../interfaces/routing_routeTree.TradeTreeNode.md) | `undefined` |
| `updatePairData` | `boolean` | `true` |

#### Returns

`Promise`<`void`\>

#### Defined in

[routing/routeTree.ts:658](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeTree.ts#L658)

___

### buildTradeTree

▸ **buildTradeTree**(`routes`): `undefined` \| [`TradeTreeNode`](../interfaces/routing_routeTree.TradeTreeNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `routes` | [`VFRoutes`](utils_types.md#vfroutes) |

#### Returns

`undefined` \| [`TradeTreeNode`](../interfaces/routing_routeTree.TradeTreeNode.md)

#### Defined in

[routing/routeTree.ts:143](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeTree.ts#L143)

___

### cloneTradeTree

▸ **cloneTradeTree**(`root`, `exact?`): [`TradeTreeNode`](../interfaces/routing_routeTree.TradeTreeNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `root` | [`TradeTreeNode`](../interfaces/routing_routeTree.TradeTreeNode.md) | `undefined` |
| `exact` | `boolean` | `false` |

#### Returns

[`TradeTreeNode`](../interfaces/routing_routeTree.TradeTreeNode.md)

#### Defined in

[routing/routeTree.ts:305](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeTree.ts#L305)

___

### costTradeTree

▸ **costTradeTree**(`allPairData`, `tokenData`, `amount`, `rootNode`, `updatePairData?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `allPairData` | [`Pairs`](../classes/utils_types.Pairs.md) | `undefined` |
| `tokenData` | [`Tokens`](../classes/utils_types.Tokens.md) | `undefined` |
| `amount` | `string` | `undefined` |
| `rootNode` | [`TradeTreeNode`](../interfaces/routing_routeTree.TradeTreeNode.md) | `undefined` |
| `updatePairData` | `boolean` | `true` |

#### Returns

`Promise`<`void`\>

#### Defined in

[routing/routeTree.ts:434](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeTree.ts#L434)

___

### getNumRoutes

▸ **getNumRoutes**(`rootNode`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootNode` | [`TradeTreeNode`](../interfaces/routing_routeTree.TradeTreeNode.md) |

#### Returns

`number`

#### Defined in

[routing/routeTree.ts:696](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeTree.ts#L696)

___

### getTreeRoutePath

▸ **getTreeRoutePath**(`rootNode`, `routeId`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootNode` | [`TradeTreeNode`](../interfaces/routing_routeTree.TradeTreeNode.md) |
| `routeId` | `string` |

#### Returns

`string`[]

#### Defined in

[routing/routeTree.ts:134](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeTree.ts#L134)

___

### pruneRoutesIfHighMGTD

▸ **pruneRoutesIfHighMGTD**(`rootNode`): `void`

pruneRoutesIfHighMGTD: Starting at the top of the tree, we identify high MGTD routes
                       and then add the other routes in that same node to a prune list,
                       pruning them at the end.
                       This works w/o considering above nodes etc. b/c if there are
                       multiple trades in a node then up until that point, the other trades
                       in the node beyond the MGTD one have the same route/segments and thus
                       cannot outperform the high MGTD one and should be pruned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootNode` | [`TradeTreeNode`](../interfaces/routing_routeTree.TradeTreeNode.md) |

#### Returns

`void`

#### Defined in

[routing/routeTree.ts:903](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeTree.ts#L903)

___

### pruneRoutesIfHighTopLevelMGTD

▸ **pruneRoutesIfHighTopLevelMGTD**(`rootNode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootNode` | [`TradeTreeNode`](../interfaces/routing_routeTree.TradeTreeNode.md) |

#### Returns

`void`

#### Defined in

[routing/routeTree.ts:854](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeTree.ts#L854)

___

### pruneRoutesWithDuplicatePairs

▸ **pruneRoutesWithDuplicatePairs**(`rootNode`): [`TradeTreeNode`](../interfaces/routing_routeTree.TradeTreeNode.md)

 pruneRoutesWithDuplicatePairs:
     Walks the tree finding nodes containing a re-used pair (by pairID) to
     identify routes to be removed to facilitate estimation accuracy and / or
     reduce slippage in a multi-path trade.

     Different use cases include:
       UC1:  duplicated pair at tree nodes at different level in the tree
       UC2:  duplicated pair at tree nodes at same level in the tree

     Considerations include duplicated pair slippage (lower improves estimation
     accuracy and may not require removal of a route).  The routes to remove
     should be prioritized by gain to destination.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootNode` | [`TradeTreeNode`](../interfaces/routing_routeTree.TradeTreeNode.md) |

#### Returns

[`TradeTreeNode`](../interfaces/routing_routeTree.TradeTreeNode.md)

#### Defined in

[routing/routeTree.ts:731](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeTree.ts#L731)

___

### pruneTreeRoute

▸ **pruneTreeRoute**(`rootNode`, `routeId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootNode` | [`TradeTreeNode`](../interfaces/routing_routeTree.TradeTreeNode.md) |
| `routeId` | `string` |

#### Returns

`void`

#### Defined in

[routing/routeTree.ts:86](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeTree.ts#L86)
