import { Property } from "./property.ts";

export type Bool = Property & {
  readonly type: "bool";
};
