import crypto from 'crypto'

/* DataBase */
import { db } from '@/db'
import { URLConns } from '@/db/schema'
import { RouteStorage } from '@/lib/Routes/RouteStorage'

export const GenerateURL = async (requestURL: string) => {
  let queried = await RouteStorage.origin(requestURL)
  if (queried)
    return queried
  let generated
  while (true) {
    generated = crypto.randomBytes(15).toString('hex')
    queried = await RouteStorage.get(generated)
    if (queried === undefined) break
  }
  return await db.insert(URLConns).values({ origin: requestURL, shortURL: generated }).returning().get()
}
