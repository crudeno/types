import { Operator } from "./operator.ts";

export type Search =
  | ReadonlyArray<unknown>
  | Readonly<Record<Operator, ReadonlyArray<unknown>>>;
