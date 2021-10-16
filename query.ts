import { Field } from "./field.ts";
import { Filter } from "./filter.ts";
import { Pagination } from "./pagination.ts";
import { Search } from "./search.ts";
import { Sort } from "./sort.ts";

export type Query = {
  filters?: Readonly<Record<Field, Filter>>;
  searches?: Readonly<Record<Field, Search>>;
  pagination?: Pagination;
  sort?: ReadonlyArray<Sort>;
  fields?: ReadonlyArray<Field>;
};
