import * as elements from 'typed-html'
import { GenerateURL as genURL } from '@/lib/Routes/GenerateURL'
import { GenerateResult } from '@/lib/Components/Hero/GenerateResult'

export const GenerateURL = async (requestURL: string) => {
  return (<GenerateResult {...await genURL(requestURL)}></GenerateResult>)
}
