[sushi-turbo](../README.md) / [Exports](../modules.md) / utils/report

# Module: utils/report

## Table of contents

### Variables

- [PARAMS\_FILE](utils_report.md#params_file)
- [REPORTS\_DIR](utils_report.md#reports_dir)
- [REPORT\_FILE\_NAME](utils_report.md#report_file_name)

### Functions

- [getReportParametersHash](utils_report.md#getreportparametershash)
- [loadReportSummaries](utils_report.md#loadreportsummaries)
- [reportSummariesToOptions](utils_report.md#reportsummariestooptions)

## Variables

### PARAMS\_FILE

• `Const` **PARAMS\_FILE**: ``"params.json"``

#### Defined in

[utils/report.ts:7](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/report.ts#L7)

___

### REPORTS\_DIR

• `Const` **REPORTS\_DIR**: ``"reports"``

#### Defined in

[utils/report.ts:6](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/report.ts#L6)

___

### REPORT\_FILE\_NAME

• `Const` **REPORT\_FILE\_NAME**: ``"report.json"``

#### Defined in

[utils/report.ts:8](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/report.ts#L8)

## Functions

### getReportParametersHash

▸ **getReportParametersHash**(`reportParameters`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reportParameters` | `any` |

#### Returns

`string`

#### Defined in

[utils/report.ts:10](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/report.ts#L10)

___

### loadReportSummaries

▸ **loadReportSummaries**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[utils/report.ts:25](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/report.ts#L25)

___

### reportSummariesToOptions

▸ **reportSummariesToOptions**(`reportMetadata`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reportMetadata` | `any` |

#### Returns

`any`

#### Defined in

[utils/report.ts:94](https://github.com/manifoldfinance/briarpatch/blob/45b8f98/src/utils/report.ts#L94)
