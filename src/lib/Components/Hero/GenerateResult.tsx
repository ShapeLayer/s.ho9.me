import * as elements from 'typed-html'
import { URLConn } from '@/lib/types'

export const GenerateResult = ({ origin, shortURL}: URLConn) => {
  const outputurl = `${process.env.baselink}/${ shortURL }`
  return (
    <div class="flex flex-col justify-between flex-1 px-6 pt-6 pb-0">
      <div class="flex-1">
        <span class="absolute inline-flex items-center px-3 py-0.5 right-1 top-1 rounded-full text-sm font-bold font-display bg-cool-indigo-200 text-cool-indigo-800">
          Copy
        </span>
        <div class="flex items-center justify-between">
          <h3 class="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
            <a href={outputurl}>{outputurl}</a>
          </h3>
        </div>
        <p class="mt-1 text-base font-medium leading-6 text-gray-500">
          { origin }으로 연결됩니다.
        </p>
      </div>
    </div>
  )
}

