import type { Bool } from './bool.ts'
import type { DateTime } from './datetime.ts'
import type { Decimal } from './decimal.ts'
import type { Dict } from './dict.ts'
import type { Integer } from './integer.ts'
import type { List } from './list.ts'
import type { Text } from './text.ts'

export type Schema =
  Readonly<Record<string, Bool | DateTime | Decimal | Dict | Integer | List | Text>> |
  Readonly<Record<'$name', string | undefined>> |
  Readonly<Record<'$version', number | undefined>>
