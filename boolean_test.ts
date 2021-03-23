import { BooleanType } from "./boolean.ts";
import { assertStrictEquals, test } from "./test_deps.ts";

test("Boolean: pass 'name' argument", () => {
  const type = new BooleanType("field");
  assertStrictEquals(type.name, "field");
  assertStrictEquals(type.required, false);
  assertStrictEquals(type.unique, false);
  assertStrictEquals(type._private, false);
  assertStrictEquals(type._default, false);
});

test("Boolean: pass 'name', 'required' arguments", () => {
  const type = new BooleanType("field", true);
  assertStrictEquals(type.name, "field");
  assertStrictEquals(type.required, true);
  assertStrictEquals(type.unique, false);
  assertStrictEquals(type._private, false);
  assertStrictEquals(type._default, false);
});

test("Boolean: pass 'name', 'required', 'unique' arguments", () => {
  const type = new BooleanType("field", true, true);
  assertStrictEquals(type.name, "field");
  assertStrictEquals(type.required, true);
  assertStrictEquals(type.unique, true);
  assertStrictEquals(type._private, false);
  assertStrictEquals(type._default, false);
});

test("Boolean: pass 'name', 'required', 'unique', 'private' arguments", () => {
  const type = new BooleanType("field", true, true, true);
  assertStrictEquals(type.name, "field");
  assertStrictEquals(type.required, true);
  assertStrictEquals(type.unique, true);
  assertStrictEquals(type._private, true);
  assertStrictEquals(type._default, false);
});
