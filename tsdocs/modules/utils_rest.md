[sushi-turbo](../README.md) / [Exports](../modules.md) / utils/rest

# Module: utils/rest

## Table of contents

### Functions

- [postWithRetry](utils_rest.md#postwithretry)

## Functions

### postWithRetry

▸ **postWithRetry**(`url`, `payload`, `headers?`): `Promise`<`any`\>

postWithRetry:  Wraps got library with setup for POST to perform retry on
                default supported failures (see: https://github.com/sindresorhus/got#retry).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` |  |
| `payload` | `any` | TODO: Override calculateDelay in retry object to furnish prometheus metrics. |
| `headers` | `any` | - |

#### Returns

`Promise`<`any`\>

#### Defined in

[utils/rest.ts:18](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/rest.ts#L18)
