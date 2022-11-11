import Image from 'next/image'
import Logo from '../public/logo.png'

export default function NavBar() {
  return (
          <nav className=' bg-white px-10 py-10 mb-12 flex justify-between md:px-10 lg:px-20'>
            <div className=' w-50px h-50x'>
              <Image src={Logo} width = "50" height= "50"/>
            </div> 
            <ul className=' flex items-center  md:px-10 lg:px-10'>
              <li><a className=' pl-5 md:px-10 lg:px-10' href='https://www.linkedin.com/in/andrey-agassi'>LinkedIn</a></li>
              <li><a className=' pl-5 md:pl-10 lg:pl-10' href='#'>Resume</a></li>
            </ul>
          </nav>
  )
}
