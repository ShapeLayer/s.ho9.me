import { InferSelectModel } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const URLConns = sqliteTable('urlConns', {
  origin: text('origin').primaryKey(),
  shortURL: text('shortURL').notNull()
})

export type URLConn = InferSelectModel<typeof URLConns>

