import { Types } from './types.ts'

export type Property = {
  readonly default?: unknown
  readonly description?: string
  readonly private?: boolean
  readonly required?: boolean
  readonly title?: string
  readonly type: typeof Types[number]
  readonly unique?: boolean
} & { readonly [index: string]: unknown }
