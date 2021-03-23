import { Type } from "./type.ts";

export class ArrayType extends Type {
  _default = [];
  type;

  constructor(
    name: string,
    type: typeof Type,
    required: boolean = false,
    unique: boolean = false,
    _private: boolean = false,
  ) {
    super(name, required, unique, _private);
    this.type = type;
  }
}
