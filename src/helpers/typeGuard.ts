import { EmptyObject } from "@/@types/baseInterface";

export function isTypeGuard<T>(values: unknown, callback: (_val: unknown) => boolean): values is T {
  return callback(values as T);
}

export type ReturnTypeFromArray<T> = T extends (infer R)[] ? R : T;

export function isArrayOfStrings(_val: unknown): _val is string[] {
  return Boolean(_val) && Array.isArray(_val) && _val.some((field) => typeof field === "string");
}
export function isString(_val: unknown): _val is string {
  return typeof _val === "string";
}
export function isNumber(_val: unknown): _val is number {
  return typeof _val === "number";
}

export function isNil(val: any): val is null | undefined {
  return val === null || val === undefined;
}

export function isEmptyObject(values: unknown): values is EmptyObject {
  if (values && typeof values === "object" && Object.keys(values).length === 0) {
    return true;
  }
  return false;
}

export function isObject<T extends object>(_val: unknown): _val is T {
  return typeof _val === "object";
}

export function isDate<T extends Date>(_val: unknown): _val is T {
  return _val instanceof Date;
}
