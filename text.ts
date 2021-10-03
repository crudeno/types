import { Property } from './property.ts'

export type Text = Property & {
  readonly type: 'text'
}
