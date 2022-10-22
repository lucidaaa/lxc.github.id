import Head from 'next/head'
import NavBar from '../pages/navbar'
import FootNav from '../pages/footer'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Home() {

  const [text] = useTypewriter({
    words: ['Hi, Its Andrey Agassi.',
    'An Aspiring Web Developer.',
    'This is My Portfolio.',
    'I Hope You Like It!'],
    loop: true,
    delaySpeed: 1500,
  })

  return (
    <div>
      <Head>
        <title>Andrey Agassi Portofolio</title>
        <meta name="description" content="Junior Website Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' bg-white px-10 font-poppins'>
        <section className=' min-h-screen'>
          <NavBar/>
          <h1 className=' text-3xl md:text-4xl lg:text-5xl text-center px-20 py-60 max-h-80'>
            <span>{text}</span>
            < Cursor />
          </h1>
          <FootNav/>
        </section>
      </main>
    </div>
  )
}
