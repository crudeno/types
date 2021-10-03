import { Property } from './property.ts'

export type DateTime = Property & {
  readonly format: string
  readonly type: 'datetime'
}
