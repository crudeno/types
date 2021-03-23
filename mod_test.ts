import { assertStrictEquals, test } from "./test_deps.ts";
import * as mod from "./mod.ts";
import { BooleanType } from "./boolean.ts";
import { DateType } from "./date.ts";
import { DateTimeType } from "./datetime.ts";
import { DecimalType } from "./decimal.ts";
import { IntegerType } from "./integer.ts";
import { ObjectType } from "./object.ts";
import { StringType } from "./string.ts";
import { Type } from "./type.ts";

test("Mod", () => {
  assertStrictEquals(mod.BooleanType, BooleanType);
  assertStrictEquals(mod.DateType, DateType);
  assertStrictEquals(mod.DateTimeType, DateTimeType);
  assertStrictEquals(mod.DecimalType, DecimalType);
  assertStrictEquals(mod.IntegerType, IntegerType);
  assertStrictEquals(mod.ObjectType, ObjectType);
  assertStrictEquals(mod.StringType, StringType);
  assertStrictEquals(mod.Type, Type);
});
