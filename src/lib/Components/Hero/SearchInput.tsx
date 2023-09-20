import * as elements from 'typed-html'

export const SearchInput = () => {
  return (
    <div class="relative max-w-3xl px-4 mx-auto mt-10 sm:px-6">
      <form
        action="/generate_url"
        accept-charset="UTF-8"
        method="post"
        hx-post="/generate_url"
        hx-target="#gen-result"
        hx-swap="outerHTML"
        hx-include="[name='url']"
      >
        <div class="relative w-full max-w-xl mx-auto bg-white rounded-full h-16 lg:max-w-none">
          <input
            id="url"
            class="rounded-full w-full h-16 bg-transparent py-0 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-slate-200 focus:border-slate-200"
            placeholder="https://jonghyeon.me"
            type="text"
            name="url"
          />
          <button 
            class="absolute inline-flex items-center h-12 px-4 py-2 text-sm text-white transition duration-150 duration-300 ease-in-out rounded-full outline-none right-2 top-2 bg-slate-600 sm:px-6 sm:text-base sm:font-medium hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
            type="submit"
          >
            Make!
          </button>
        </div>
      </form>
    </div>
  )
}
