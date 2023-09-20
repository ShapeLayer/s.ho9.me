import { readdirSync } from 'fs'
import path from 'path'

/* DataBase */
import { db } from '@/db'
import { URLConn, URLConns } from '@/db/schema'
import { eq } from 'drizzle-orm'

export class RouteStorage {
  static storage: RouteStorage | undefined

  private _fixed: { [key: string]: URLConn }

  get fixed(): { [key: string]: URLConn } {
    return this._fixed
  }

  constructor() {
    this._fixed = {}
  }
  
  static init = async () => {
    if (RouteStorage.storage === undefined) {
      const _new = new RouteStorage()
      _new._fixed = await _new._loadFixedRoute()
      RouteStorage.storage = _new
    }
  }

  static origin = async(origin: string) => {
    // If static RouteStorage instance not initialized, Initialize satatic RouteStorage instance.
    if (RouteStorage.storage !== undefined) await RouteStorage.init()

    return await db
      .select()
      .from(URLConns)
      .where(eq(URLConns.origin, origin))
      .get()
  }

  static get = async (id: string) => {
    // If static RouteStorage instance not initialized, Initialize satatic RouteStorage instance.
    if (RouteStorage.storage !== undefined) await RouteStorage.init()

    // Fixed Routes
    if (RouteStorage.storage!.fixed[id] !== undefined) return RouteStorage.storage!.fixed[id]

    // Generated Routes
    const data = await db
      .select()
      .from(URLConns)
      .where(eq(URLConns.shortURL, id))
      .get()
    return data
  }

  _loadFixedRoute = async () => {
    const routingTable: { [key: string]: URLConn } = {}
    for (const each of readdirSync('routings')) {
      const value = await Bun.file(path.join('routings', each)).text()
      routingTable[each] = { origin: value.trim(), shortURL: each }
    }
    return routingTable
  }
}
