import NavBar from './navbar'
import FootNav from './footer'
import Image from 'next/image'
import headPhoto from '../public/about-header.jpg'

export default function about() {

  return (
    <section className=' bg-white px-10 font-poppins min-h-screen'>
      <NavBar/>
      <div className=' flex justify-center py-30 '>
        {/* <Image src={headPhoto} /> */}
        {/* <p className=' text-left'>
          /About Page is in Progress...
        </p> */}
        <h1 className=' text-3xl md:text-4xl lg:text-5xl text-center px-20 py-60 max-h-80'>
          /About Page is in Progress...
        </h1>
        
      </div>
      <FootNav/>
    </section>
  )
}
