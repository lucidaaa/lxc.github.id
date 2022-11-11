import NavBar from './navbar'
import FootNav from './footer'

export default function about() {

  return (
    <section className=' bg-white px-10 font-poppins min-h-screen'>
      <NavBar/>
      <h1 className=' text-3xl md:text-4xl lg:text-5xl text-center px-20 py-60 max-h-80'>
        /Projects Page is in Progress... Placeholder : <a href='https://www.figma.com/proto/egScTrpJC3JluLEYuSLSWH/Portofolio?page-id=0%3A1&node-id=2%3A2&viewport=319%2C439%2C0.54&scaling=contain' className=' text-red-500'>Portofolio</a>
      </h1>
      <FootNav/>
    </section>
  )
}
