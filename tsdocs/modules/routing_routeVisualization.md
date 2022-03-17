[sushi-turbo](../README.md) / [Exports](../modules.md) / routing/routeVisualization

# Module: routing/routeVisualization

## Table of contents

### Variables

- [NODE\_SHAPES](routing_routeVisualization.md#node_shapes)
- [PATH\_COLORS](routing_routeVisualization.md#path_colors)

### Functions

- [elementDataFromCytoscape](routing_routeVisualization.md#elementdatafromcytoscape)
- [getCytoscapeGraph](routing_routeVisualization.md#getcytoscapegraph)

## Variables

### NODE\_SHAPES

• `Const` **NODE\_SHAPES**: `Object`

#### Index signature

▪ [index: `string`]: `string`

#### Defined in

[routing/routeVisualization.ts:17](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeVisualization.ts#L17)

___

### PATH\_COLORS

• `Const` **PATH\_COLORS**: `Object`

#### Index signature

▪ [index: `string`]: `string`

#### Defined in

[routing/routeVisualization.ts:8](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeVisualization.ts#L8)

## Functions

### elementDataFromCytoscape

▸ **elementDataFromCytoscape**(`cyGraph`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cyGraph` | `Core` |

#### Returns

`any`

#### Defined in

[routing/routeVisualization.ts:142](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeVisualization.ts#L142)

___

### getCytoscapeGraph

▸ **getCytoscapeGraph**(`tradeTree`, `useUuid?`): `Core`

getCytoscapeGraph: Constructs a Cytoscape representation of a TradeTree (n-ary Tree
                   representing possible pathways from a source token to a
                   destination token).

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tradeTree` | [`TradeTreeNode`](../interfaces/routing_routeTree.TradeTreeNode.md) | `undefined` |
| `useUuid` | `boolean` | `true` |

#### Returns

`Core`

#### Defined in

[routing/routeVisualization.ts:31](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/routing/routeVisualization.ts#L31)
