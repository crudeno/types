import { Property } from './property.ts'

export interface Decimal extends Property {
  readonly type: 'decimal'
}
