import { Property } from "./property.ts";

export type List = Property & {
  readonly type: "list";
  readonly items: Property;
};
