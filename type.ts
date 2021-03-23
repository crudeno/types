export abstract class Type {
  name: string;
  required: boolean;
  unique: boolean;
  _private: boolean;
  _default: any = null;

  constructor(
    name: string,
    required: boolean = false,
    unique: boolean = false,
    _private: boolean = false,
  ) {
    this.name = name;
    this.required = required;
    this.unique = unique;
    this._private = _private;
  }
}
