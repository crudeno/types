import { Property } from './property.ts'

export interface Array extends Property {
  readonly type: 'array'
}
