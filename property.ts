import { Schema } from './schema.ts'
import { Types } from './types.ts'

export interface Property {
  readonly default?: unknown
  readonly description?: string
  readonly items?: Property
  readonly private?: boolean
  readonly properties?: Schema
  readonly required?: boolean
  readonly title?: string
  readonly type: typeof Types[number]
  readonly unique?: boolean
}
