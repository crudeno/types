import { Property } from './property.ts'

export interface DateTime extends Property {
  readonly type: 'datetime'
}
