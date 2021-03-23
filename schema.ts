import { Type } from "./type.ts";

export interface Schema {
  [index: number]: Type;
}
