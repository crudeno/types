import { ObjectType } from "./object.ts";
import { assertEquals, test } from "./test_deps.ts";
import { IntegerType } from "./integer.ts";
import { StringType } from "./string.ts";

test("Object: pass 'name', 'fields' arguments", () => {
  const type = new ObjectType(
    "field",
    [
      new StringType("firstName", true, true),
      new StringType("lastName", true, true),
      new IntegerType("age", true, true),
    ],
  );
  assertEquals(type.name, "field");
  assertEquals(type.fields, [
    new StringType("firstName", true, true),
    new StringType("lastName", true, true),
    new IntegerType("age", true, true),
  ]);
  assertEquals(type.required, false);
  assertEquals(type.unique, false);
  assertEquals(type._private, false);
  assertEquals(type._default, {});
});

test("Object: pass 'name', 'fields', 'required' arguments", () => {
  const type = new ObjectType("field", [], true);
  assertEquals(type.name, "field");
  assertEquals(type.fields, []);
  assertEquals(type.required, true);
  assertEquals(type.unique, false);
  assertEquals(type._private, false);
  assertEquals(type._default, {});
});

test("Object: pass 'name', 'fields', 'required', 'unique' arguments", () => {
  const type = new ObjectType("field", [], true, true);
  assertEquals(type.name, "field");
  assertEquals(type.fields, []);
  assertEquals(type.required, true);
  assertEquals(type.unique, true);
  assertEquals(type._private, false);
  assertEquals(type._default, {});
});

test("Object: pass 'name', 'fields', 'required', 'unique', 'private' arguments", () => {
  const type = new ObjectType("field", [], true, true, true);
  assertEquals(type.name, "field");
  assertEquals(type.fields, []);
  assertEquals(type.required, true);
  assertEquals(type.unique, true);
  assertEquals(type._private, true);
  assertEquals(type._default, {});
});
