import NavBar from './navbar'
import FootNav from './footer'
import Image from 'next/image'
import headPhoto from '../public/about-header.jpg'

export default function about() {

  return (
    <section className=' bg-white px-10 font-poppins min-h-screen'>
      <NavBar/>
      <div className=' flex justify-center py-30 '>
        <Image src={headPhoto} />
        <p className=' text-left'>
          /About Page is in Progress...
        </p>
        
      </div>
      <FootNav/>
    </section>
  )
}
