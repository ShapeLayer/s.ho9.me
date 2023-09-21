import * as elements from 'typed-html'
import { URLConn } from '@/db/schema'

export const GenerateResult = ({ origin, shortURL}: URLConn) => {
  const outputurl = `${process.env.baselink}/${ shortURL }`
  return (
    <div class="flex flex-col justify-between flex-1 px-6 pt-6 pb-0">
      <div class="flex flex-1 flex-row content-end justify-end mb-2">
        <span
          class="flex text-right inline-flex px-3 py-0.5 right-1 top-1 rounded-full text-sm font-bold font-display bg-slate-800 text-slate-100"
          _={`on click
              js(me)
                if ('clipboard' in window.navigator) {
                  navigator.clipboard.writeText('${outputurl}').then(
                    () => {
                      me.innerText = 'Copied'
                      /* clipboard successfully set */
                    },
                    () => {
                      /* clipboard write failed */
                    },
                  )
                }
              end`}
        >
          Copy
        </span>
      </div>
      <div class="flex-1">
        <div class="flex items-center flex-col">
          <h3 class="flex break-all items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-slate-600">
            <a href={outputurl}>{outputurl}</a>
          </h3>
          <p class="mt-1 text-base font-medium leading-6 text-gray-500">
            { origin }으로 연결됩니다.
          </p>
        </div>
      </div>
    </div>
  )
}

