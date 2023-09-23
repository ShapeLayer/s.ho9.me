# s.ho9.me

[Site](https://s.ho9.me)  

New s.ho9.me using BETH([Bun](https://bun.sh/), [Elysia](https://elysiajs.com/), [Turso](https://turso.tech/), and [HTMX](https://htmx.org/)).  

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
