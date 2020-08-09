import Head from 'next/head'

type Props = {
  title: string
}


export default function Home({ title = 'Tell me why' } : Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>{title}</h1>
    </div>
  );
}
