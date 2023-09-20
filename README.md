# s.ho9.me

(WIP)

New s.ho9.me for BETH([Bun](https://bun.sh/), [Elysia](https://elysiajs.com/), [Turso](https://turso.tech/), [HTMX](https://htmx.org/)) stack testing.

## Getting Started

**Initialize Database**
Add db information to dotfile  

_`.env.local`_:  
```
DATABASE_URL=""
DATABASE_AUTH_TOKEN=""
```

```sh
bun run db:push
```

* In Turso, type below code to create and get db information.
    ```sh
    turso db create [db-name]
    turso db show [db-name]
    turso db tokens create [db-name]
    ```

**Install dependencies**
```sh
bun install
```

**run**
```sh
bun run dev
```
