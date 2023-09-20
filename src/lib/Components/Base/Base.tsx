import * as elements from 'typed-html'
import { Head, CompactHead } from './Head'

export const Base = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="ko">

<head>
${Head}
</head>

${children}
`

export const CompactBase = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="ko">

<head>
${CompactHead}
</head>

${children}
`
