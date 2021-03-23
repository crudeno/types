import { ArrayType } from "./array.ts";
import { assertEquals, test } from "./test_deps.ts";
import { StringType } from "./string.ts";

test("Array: pass 'name', 'type' arguments", () => {
  const type = new ArrayType("field", StringType);
  assertEquals(type.name, "field");
  assertEquals(type.type, StringType);
  assertEquals(type.required, false);
  assertEquals(type.unique, false);
  assertEquals(type._private, false);
  assertEquals(type._default, []);
});

test("Array: pass 'name', 'type', 'required' arguments", () => {
  const type = new ArrayType("field", StringType, true);
  assertEquals(type.name, "field");
  assertEquals(type.type, StringType);
  assertEquals(type.required, true);
  assertEquals(type.unique, false);
  assertEquals(type._private, false);
  assertEquals(type._default, []);
});

test("Array: pass 'name', 'type', 'required', 'unique' arguments", () => {
  const type = new ArrayType("field", StringType, true, true);
  assertEquals(type.name, "field");
  assertEquals(type.type, StringType);
  assertEquals(type.required, true);
  assertEquals(type.unique, true);
  assertEquals(type._private, false);
  assertEquals(type._default, []);
});

test("Array: pass 'name', 'type', 'required', 'unique', 'private' arguments", () => {
  const type = new ArrayType("field", StringType, true, true, true);
  assertEquals(type.name, "field");
  assertEquals(type.type, StringType);
  assertEquals(type.required, true);
  assertEquals(type.unique, true);
  assertEquals(type._private, true);
  assertEquals(type._default, []);
});
