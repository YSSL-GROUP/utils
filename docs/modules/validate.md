[rs-utils](../README.md) / [Modules](../modules.md) / validate

# Module: validate

## Table of contents

### Variables

- [Regular](validate.md#regular)

### Functions

- [getRegular](validate.md#getregular)
- [isIE](validate.md#isie)

## Variables

### Regular

• `Const` **Regular**: *object*

所有正则表达式

#### Type declaration:

Name | Type | Value |
------ | ------ | ------ |
`chinese` | *RegExp* | *RegExp* |
`creditCode` | *RegExp* | *RegExp* |
`email` | *RegExp* | *RegExp* |
`financialCode` | *RegExp* | *RegExp* |
`idCard` | *RegExp* | *RegExp* |
`img` | *RegExp* | *RegExp* |
`int` | *RegExp* | *RegExp* |
`ip4` | *RegExp* | *RegExp* |
`ip6` | *RegExp* | *RegExp* |
`money` | *RegExp* | *RegExp* |
`phone` | *RegExp* | *RegExp* |
`positiveInt` | *RegExp* | *RegExp* |
`positiveIntOrDecimal` | *RegExp* | *RegExp* |
`url` | *RegExp* | *RegExp* |

Defined in: [validate/Regular.ts:33](https://github.com/HanZhaorz/rs-utils/blob/4c99658/src/validate/Regular.ts#L33)

## Functions

### getRegular

▸ **getRegular**(`type`: RegularType): *RegExp*

获取指定正则表达式

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | RegularType | 正则类型   |

**Returns:** *RegExp*

指定正则表达式

Defined in: [validate/getRegular.ts:8](https://github.com/HanZhaorz/rs-utils/blob/4c99658/src/validate/getRegular.ts#L8)

___

### isIE

▸ **isIE**(): *number* \| *false*

判断当前浏览器是否为ie

**Returns:** *number* \| *false*

number - ie浏览器版本 false - 不是ie

Defined in: [validate/isIE.ts:5](https://github.com/HanZhaorz/rs-utils/blob/4c99658/src/validate/isIE.ts#L5)
