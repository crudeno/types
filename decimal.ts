import { Property } from "./property.ts";

export type Decimal = Property & {
  readonly type: "decimal";
};
