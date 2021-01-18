[rs-utils](../README.md) / [Modules](../modules.md) / [fp](../modules/fp.md) / Either

# Class: Either<V\>

[fp](../modules/fp.md).Either

## Type parameters

Name |
------ |
`V` |

## Hierarchy

* **Either**

## Table of contents

### Constructors

- [constructor](fp.either.md#constructor)

### Properties

- [value](fp.either.md#value)

### Methods

- [of](fp.either.md#of)

## Constructors

### constructor

\+ **new Either**<V\>(`value`: V): [*Either*](fp.either.md)<V\>

#### Type parameters:

Name |
------ |
`V` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | V |

**Returns:** [*Either*](fp.either.md)<V\>

Defined in: [fp/Either.ts:1](https://github.com/HanZhaorz/rs-utils/blob/4c99658/src/fp/Either.ts#L1)

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

Defined in: [fp/Either.ts:4](https://github.com/HanZhaorz/rs-utils/blob/4c99658/src/fp/Either.ts#L4)
