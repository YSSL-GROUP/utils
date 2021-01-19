import { NumberStr, ObjectStr, StringStr } from "../helper/type";

export type StorageValueType = NumberStr | ObjectStr | StringStr;

export function rightValue<T extends number | object | string>(type: StorageValueType, value: T) {}
