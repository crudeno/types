import { Property } from './property.ts'

export interface Boolean extends Property {
  readonly type: 'boolean'
}
