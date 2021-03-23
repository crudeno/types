import { DecimalType } from "./decimal.ts";
import { assertStrictEquals, test } from "./test_deps.ts";

test("Decimal: pass 'name' argument", () => {
  const type = new DecimalType("field");
  assertStrictEquals(type.name, "field");
  assertStrictEquals(type.required, false);
  assertStrictEquals(type.unique, false);
  assertStrictEquals(type._private, false);
  assertStrictEquals(type._default, 0.0);
});

test("Decimal: pass 'name', 'required' arguments", () => {
  const type = new DecimalType("field", true);
  assertStrictEquals(type.name, "field");
  assertStrictEquals(type.required, true);
  assertStrictEquals(type.unique, false);
  assertStrictEquals(type._private, false);
  assertStrictEquals(type._default, 0.0);
});

test("Decimal: pass 'name', 'required', 'unique' arguments", () => {
  const type = new DecimalType("field", true, true);
  assertStrictEquals(type.name, "field");
  assertStrictEquals(type.required, true);
  assertStrictEquals(type.unique, true);
  assertStrictEquals(type._private, false);
  assertStrictEquals(type._default, 0.0);
});

test("Decimal: pass 'name', 'required', 'unique', 'private' arguments", () => {
  const type = new DecimalType("field", true, true, true);
  assertStrictEquals(type.name, "field");
  assertStrictEquals(type.required, true);
  assertStrictEquals(type.unique, true);
  assertStrictEquals(type._private, true);
  assertStrictEquals(type._default, 0.0);
});
