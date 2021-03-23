import { DateTimeType } from "./datetime.ts";
import { assertStrictEquals, test } from "./test_deps.ts";

test("DateTime: pass 'name' argument", () => {
  const type = new DateTimeType("field");
  assertStrictEquals(type.name, "field");
  assertStrictEquals(type.required, false);
  assertStrictEquals(type.unique, false);
  assertStrictEquals(type._private, false);
  assertStrictEquals(type._default, null);
});

test("DateTime: pass 'name', 'required' arguments", () => {
  const type = new DateTimeType("field", true);
  assertStrictEquals(type.name, "field");
  assertStrictEquals(type.required, true);
  assertStrictEquals(type.unique, false);
  assertStrictEquals(type._private, false);
  assertStrictEquals(type._default, null);
});

test("DateTime: pass 'name', 'required', 'unique' arguments", () => {
  const type = new DateTimeType("field", true, true);
  assertStrictEquals(type.name, "field");
  assertStrictEquals(type.required, true);
  assertStrictEquals(type.unique, true);
  assertStrictEquals(type._private, false);
  assertStrictEquals(type._default, null);
});

test("DateTime: pass 'name', 'required', 'unique', 'private' arguments", () => {
  const type = new DateTimeType("field", true, true, true);
  assertStrictEquals(type.name, "field");
  assertStrictEquals(type.required, true);
  assertStrictEquals(type.unique, true);
  assertStrictEquals(type._private, true);
  assertStrictEquals(type._default, null);
});
