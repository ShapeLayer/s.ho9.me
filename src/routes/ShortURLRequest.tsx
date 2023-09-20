import * as elements from 'typed-html'
import { RouteStorage } from '@/lib/Routes/RouteStorage'
// import { URLConn } from '@/lib/types'

/* Database */
import { URLConn } from '@/db/schema'

/* JSX Components */
import { CompactBase } from '@/lib/Components/Base/Base'

export const ShortURLRequest = async (id: string) => {
  const data = await RouteStorage.get(id)
  if (data) return (<RedirectingPage {...data}></RedirectingPage>)

  return (<RedirectingPage {...{ origin: '#', shortURL: '#'}}></RedirectingPage>)
}

const RedirectingPage = (urlConn: URLConn) => {
  return (
    <CompactBase>
      <div _={`init js window.location.href='${urlConn.origin}'`}></div>
    </CompactBase>
  )
}
