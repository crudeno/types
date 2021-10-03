import { Property } from './property.ts'

export type Integer = Property & {
  readonly type: 'integer'
}
