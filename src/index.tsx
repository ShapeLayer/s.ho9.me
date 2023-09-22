import { Elysia, t } from 'elysia'
import { html } from '@elysiajs/html'
import * as elements from 'typed-html'

/* JSX Components */
import { Base } from '@/lib/Components/Base/Base'
import { Hero } from '@/lib/Components/Hero/Hero'
import { RouteStorage } from '@/lib/Routes/RouteStorage'
import { ShortURLRequest } from '@/routes/ShortURLRequest'
import { GenerateURL } from '@/routes/GenerateURL'

await RouteStorage.init()

const app = new Elysia()
  .use(html())
  .get('/', ({ html }) =>
    html(
      <Base>
        <Hero></Hero>
      </Base>
    )
  )
  .post('/generate_url', async ({ html, body }) => {
    return html(await GenerateURL(body.url))
  }, {
    body: t.Object({
      url: t.String()
    })
  })
  .get('/styles.css', () => Bun.file('./tailwind-gen/styles.css'))
  .get('/:id', async ({ html, params: { id } }) => 
    html(await ShortURLRequest(id)))
  .listen(process.env.PORT ? Number(process.env.PORT) : 3000)
