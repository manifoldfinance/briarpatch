[sushi-turbo](../README.md) / [Exports](../modules.md) / utils/sushiswapSDK

# Module: utils/sushiswapSDK

## Table of contents

### Variables

- [UNI\_ROUTER\_ERRORS](utils_sushiswapSDK.md#uni_router_errors)

### Functions

- [getUniRouteV2](utils_sushiswapSDK.md#getuniroutev2)

## Variables

### UNI\_ROUTER\_ERRORS

• `Const` **UNI\_ROUTER\_ERRORS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `INSUFFICIENT_LIQUIDITY` | `string` |
| `NO_ERROR` | `string` |
| `NO_ROUTE` | `string` |
| `UNKNOWN` | `string` |

#### Defined in

[utils/sushiswapSDK.ts:13](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/sushiswapSDK.ts#L13)

## Functions

### getUniRouteV2

▸ **getUniRouteV2**(`source`, `destination`, `amount`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `amount` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[utils/sushiswapSDK.ts:32](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/sushiswapSDK.ts#L32)
