import { Property } from './property.ts'

export interface Schema {
  [index: string]: Property
}
