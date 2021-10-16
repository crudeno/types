import { Data } from "./data.ts";
import { Query } from "./query.ts";

export type Command = {
  (query?: Query): (data: Data) => Data;
};
