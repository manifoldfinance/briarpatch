[sushi-turbo](../README.md) / [Exports](../modules.md) / utils/misc

# Module: utils/misc

## Table of contents

### Functions

- [deepCopy](utils_misc.md#deepcopy)
- [getIntegerString](utils_misc.md#getintegerstring)
- [getSpaces](utils_misc.md#getspaces)
- [padStr](utils_misc.md#padstr)
- [sanitizeProperty](utils_misc.md#sanitizeproperty)
- [sanitizePropertyType](utils_misc.md#sanitizepropertytype)

## Functions

### deepCopy

▸ **deepCopy**(`anObj`): `any`

Misc

#### Parameters

| Name | Type |
| :------ | :------ |
| `anObj` | `any` |

#### Returns

`any`

#### Defined in

[utils/misc.ts:4](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/misc.ts#L4)

___

### getIntegerString

▸ **getIntegerString**(`value`, `decimals`): `string`

Removes a decimal place if found and pads out to the correct
number of zeros.

If no decimal found, adds appropriate number of zeros to make the
decimal place happen.

e.g.:  value=1.35, decimals=5, returns:  135000
       value=121, decimals=3, returns: 121000

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `decimals` | `number` |

#### Returns

`string`

#### Defined in

[utils/misc.ts:82](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/misc.ts#L82)

___

### getSpaces

▸ **getSpaces**(`numSpaces?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `numSpaces` | `number` | `0` |

#### Returns

`string`

#### Defined in

[utils/misc.ts:20](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/misc.ts#L20)

___

### padStr

▸ **padStr**(`str`, `desiredWidth?`): `string`

String formatting

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `str` | `string` | `undefined` |
| `desiredWidth` | `number` | `25` |

#### Returns

`string`

#### Defined in

[utils/misc.ts:12](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/misc.ts#L12)

___

### sanitizeProperty

▸ **sanitizeProperty**(`name`, `value`, `type?`): `string`

REST sanitization/error methods

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `value` | `any` | `undefined` |
| `type` | `string` | `'string'` |

#### Returns

`string`

#### Defined in

[utils/misc.ts:32](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/misc.ts#L32)

___

### sanitizePropertyType

▸ **sanitizePropertyType**(`name`, `value`, `type?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `value` | `any` | `undefined` |
| `type` | `string` | `'string'` |

#### Returns

`string`

#### Defined in

[utils/misc.ts:44](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/misc.ts#L44)
