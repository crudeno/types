import { Property } from './property.ts'

export interface Object extends Property {
  readonly type: 'object'
}
