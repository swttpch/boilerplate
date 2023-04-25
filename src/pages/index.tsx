import Main from 'components/Main'
import Head from 'next/head'

type Props = {
  title: string
}

export default function Home({ title = 'CREATE NEXT APP' }: Props) {
  return <Main />
}
