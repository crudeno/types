import { DateType } from "./date.ts";
import { assertStrictEquals, test } from "./test_deps.ts";

test("Date: pass 'name' argument", () => {
  const type = new DateType("field");
  assertStrictEquals(type.name, "field");
  assertStrictEquals(type.required, false);
  assertStrictEquals(type.unique, false);
  assertStrictEquals(type._private, false);
  assertStrictEquals(type._default, null);
});

test("Date: pass 'name', 'required' arguments", () => {
  const type = new DateType("field", true);
  assertStrictEquals(type.name, "field");
  assertStrictEquals(type.required, true);
  assertStrictEquals(type.unique, false);
  assertStrictEquals(type._private, false);
  assertStrictEquals(type._default, null);
});

test("Date: pass 'name', 'required', 'unique' arguments", () => {
  const type = new DateType("field", true, true);
  assertStrictEquals(type.name, "field");
  assertStrictEquals(type.required, true);
  assertStrictEquals(type.unique, true);
  assertStrictEquals(type._private, false);
  assertStrictEquals(type._default, null);
});

test("Date: pass 'name', 'required', 'unique', 'private' arguments", () => {
  const type = new DateType("field", true, true, true);
  assertStrictEquals(type.name, "field");
  assertStrictEquals(type.required, true);
  assertStrictEquals(type.unique, true);
  assertStrictEquals(type._private, true);
  assertStrictEquals(type._default, null);
});
