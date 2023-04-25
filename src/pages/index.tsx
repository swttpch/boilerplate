import Head from 'next/head'

type Props = {
  title: string
}

export default function Home({ title = 'CREATE NEXT APP' }: Props) {
  return (
    <>
      <main>
        <h1>Hello, world!</h1>
      </main>
    </>
  )
}
