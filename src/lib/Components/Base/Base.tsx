import * as elements from '@kitajs/html'
import { Head, CompactHead } from './Head'

export const Base = ({ children }: elements.PropsWithChildren) => `
<!DOCTYPE html>
<html lang="ko">

<head>
${Head}
</head>

${children}
`

export const CompactBase = ({ children }: elements.PropsWithChildren) => `
<!DOCTYPE html>
<html lang="ko">

<head>
${CompactHead}
</head>

${children}
`
