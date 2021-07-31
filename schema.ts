import { Property } from './property.ts'

export interface Schema {
  readonly [index: string]: Property
}
