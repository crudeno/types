import { Schema } from "./schema.ts";
import { assertEquals, test } from "./test_deps.ts";
import { StringType } from "./string.ts";
import { ArrayType } from "./array.ts";

test("Schema: empty", () => {
  const schema: Schema = [];

  assertEquals(schema, []);
});

test("Schema: with some fields", () => {
  const schema: Schema = [
    new StringType("title", true, true),
    new StringType("slug", true, true),
    new StringType("body"),
    new ArrayType("tags", StringType),
  ];

  assertEquals(schema, [
    new StringType("title", true, true),
    new StringType("slug", true, true),
    new StringType("body"),
    new ArrayType("tags", StringType),
  ]);
});
