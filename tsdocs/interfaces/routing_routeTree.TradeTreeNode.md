[sushi-turbo](../README.md) / [Exports](../modules.md) / [routing/routeTree](../modules/routing_routeTree.md) / TradeTreeNode

# Interface: TradeTreeNode

[routing/routeTree](../modules/routing_routeTree.md).TradeTreeNode

## Table of contents

### Properties

- [children](routing_routeTree.TradeTreeNode.md#children)
- [parent](routing_routeTree.TradeTreeNode.md#parent)
- [value](routing_routeTree.TradeTreeNode.md#value)

## Properties

### children

• **children**: [`TradeTreeNode`](routing_routeTree.TradeTreeNode.md)[]

#### Defined in

[routing/routeTree.ts:58](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeTree.ts#L58)

___

### parent

• `Optional` **parent**: [`TradeTreeNode`](routing_routeTree.TradeTreeNode.md)

#### Defined in

[routing/routeTree.ts:57](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeTree.ts#L57)

___

### value

• **value**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `amount?` | `string` |
| `amountUSD?` | `string` |
| `gainToDest?` | { `[index: string]`: `number`;  } |
| `id` | `string` |
| `impact?` | `string` |
| `isBest?` | `boolean` |
| `isUniRoute?` | `boolean` |
| `pairId?` | `string` |
| `symbol?` | `string` |
| `trades?` | { `[index: string]`: `TradeObj`;  } |

#### Defined in

[routing/routeTree.ts:27](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeTree.ts#L27)
