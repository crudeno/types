import { Property } from './property.ts'

export interface Integer extends Property {
  readonly type: 'integer'
}
