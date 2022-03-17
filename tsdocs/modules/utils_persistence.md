[sushi-turbo](../README.md) / [Exports](../modules.md) / utils/persistence

# Module: utils/persistence

## Table of contents

### Functions

- [retrieveObject](utils_persistence.md#retrieveobject)
- [storeObject](utils_persistence.md#storeobject)

## Functions

### retrieveObject

▸ **retrieveObject**(`key`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[utils/persistence.ts:58](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/persistence.ts#L58)

___

### storeObject

▸ **storeObject**(`key`, `object`, `formatted?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `object` | `any` | `undefined` |
| `formatted` | `boolean` | `true` |

#### Returns

`Promise`<`void`\>

#### Defined in

[utils/persistence.ts:28](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/persistence.ts#L28)
