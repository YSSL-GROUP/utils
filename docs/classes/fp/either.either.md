[rs-utils](../../README.md) / [Exports](../../modules.md) / [fp/Either](../../modules/fp_either.md) / Either

# Class: Either<V\>

[fp/Either](../../modules/fp_either.md).Either

## Type parameters

Name |
------ |
`V` |

## Hierarchy

* **Either**

## Table of contents

### Constructors

- [constructor](either.either.md#constructor)

### Properties

- [value](either.either.md#value)

### Methods

- [of](either.either.md#of)

## Constructors

### constructor

\+ **new Either**<V\>(`value`: V): [*Either*](either.either.md)<V\>

#### Type parameters:

Name |
------ |
`V` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | V |

**Returns:** [*Either*](either.either.md)<V\>

Defined in: [fp/Either.ts:1](https://github.com/HanZhaorz/rs-utils/blob/b14f015/src/fp/Either.ts#L1)

## Properties

### value

• `Readonly` **value**: V

## Methods

### of

▸ `Static`**of**<T\>(`value`: T): T *extends* *null* ? *Left*<T\> : *Right*<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |

**Returns:** T *extends* *null* ? *Left*<T\> : *Right*<T\>

Defined in: [fp/Either.ts:4](https://github.com/HanZhaorz/rs-utils/blob/b14f015/src/fp/Either.ts#L4)
