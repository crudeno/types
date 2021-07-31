import { Property } from './property.ts'

export interface String extends Property {
  readonly type: 'string'
}
