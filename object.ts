import { Type } from "./type.ts";

export class ObjectType extends Type {
  _default: {} = {};
  fields: Type[];

  constructor(
    name: string,
    fields: Type[],
    required: boolean = false,
    unique: boolean = false,
    _private: boolean = false,
  ) {
    super(name, required, unique, _private);
    this.fields = fields;
  }
}
