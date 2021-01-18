[rs-utils](../README.md) / [Exports](../modules.md) / style/ellipsisStr

# Module: style/ellipsisStr

## Table of contents

### Functions

- [ellipsisStr](style_ellipsisstr.md#ellipsisstr)

## Functions

### ellipsisStr

▸ **ellipsisStr**(`limit`: *number*, `str`: *string* \| *null*): *string*

根据`limit`长度截取`str`加上省略号

**`example`** 
```ts
ellipsisStr(4, "哈哈哈哈哈哈哈") // -> 哈哈哈哈...
ellipsisStr(4, null) // -> ""
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`limit` | *number* | 限制文字长度   |
`str` | *string* \| *null* | 文本   |

**Returns:** *string*

截取并带省略号的字符串

Defined in: [style/ellipsisStr.ts:12](https://github.com/HanZhaorz/rs-utils/blob/b14f015/src/style/ellipsisStr.ts#L12)
