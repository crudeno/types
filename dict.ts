import { Property } from './property.ts'
import { Schema } from './schema.ts'

export type Dict = Property & {
  readonly type: 'dict'
  readonly properties: Schema
}
