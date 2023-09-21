import * as elements from 'typed-html'
import { SearchInput } from './SearchInput'
import { GenerateResult } from './GenerateResult'

export const Hero = () => {
  return (
    <main class="px-4 mx-auto mt-10 pt-20 max-w-7xl sm:mt-14 sm:pt-20">
      <div class="text-center">
        <h1 class="font-display text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl xl:text-6.5xl">
          s.ho9.me
        </h1>
        <div class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          <p>s.ho9.me는 긴 URL을 "https://s.ho9.me/"로 시작하는 짧은 주소로 만들어줍니다.</p>
          <p>아래에 변환할 URL을 넣어주세요.</p>
        </div>
        <div class="relative max-w-3xl px-4 mx-auto mt-10 sm:px-6">
          <SearchInput></SearchInput>
        </div>
        <div
          id="gen-result"
          class="relative max-w-3xl px-4 mx-auto mt-10 sm:px-6"
        >
          <GenerateResult {... { origin: 'origin', shortURL: 'short' }}></GenerateResult>
        </div>
      </div>
    </main>
  )
}
