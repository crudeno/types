import { IntegerType } from "./integer.ts";
import { assertStrictEquals, test } from "./test_deps.ts";

test("Integer: pass 'name' argument", () => {
  const type = new IntegerType("field");
  assertStrictEquals(type.name, "field");
  assertStrictEquals(type.required, false);
  assertStrictEquals(type.unique, false);
  assertStrictEquals(type._private, false);
  assertStrictEquals(type._default, 0);
});

test("Integer: pass 'name', 'required' arguments", () => {
  const type = new IntegerType("field", true);
  assertStrictEquals(type.name, "field");
  assertStrictEquals(type.required, true);
  assertStrictEquals(type.unique, false);
  assertStrictEquals(type._private, false);
  assertStrictEquals(type._default, 0);
});

test("Integer: pass 'name', 'required', 'unique' arguments", () => {
  const type = new IntegerType("field", true, true);
  assertStrictEquals(type.name, "field");
  assertStrictEquals(type.required, true);
  assertStrictEquals(type.unique, true);
  assertStrictEquals(type._private, false);
  assertStrictEquals(type._default, 0);
});

test("Integer: pass 'name', 'required', 'unique', 'private' arguments", () => {
  const type = new IntegerType("field", true, true, true);
  assertStrictEquals(type.name, "field");
  assertStrictEquals(type.required, true);
  assertStrictEquals(type.unique, true);
  assertStrictEquals(type._private, true);
  assertStrictEquals(type._default, 0);
});
