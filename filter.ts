import { Operator } from "./operator.ts";

export type Filter =
  | ReadonlyArray<unknown>
  | Readonly<Record<Operator, ReadonlyArray<unknown>>>;
