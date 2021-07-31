import { Schema } from './schema.ts'
import { Types } from './types.ts'

export interface Property {
  readonly type: typeof Types[number]
  readonly required?: boolean
  readonly unique?: boolean
  readonly private?: boolean
  readonly default?: unknown
  readonly properties?: Schema
}
