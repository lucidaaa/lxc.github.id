import React from 'react';

export default function Footer() {
  return (
          <nav className=' static bg-white px-10 pt-10 mb-12 md:px-10 lg:px-20'>
            <ul className=' md:flex md:justify-between md:pt-40'>
              <li className=' py-3 hover:underline decoration-2'><a href='/'>Home</a></li>
              <li className=' py-3 hover:underline decoration-2'><a href='/about'>About</a></li>
              <li className=' py-3 hover:underline decoration-2'><a href='/projects'>Projects</a></li>
              <li className=' py-3 hover:underline decoration-2'><a href='/contact'>Contact</a></li>
            </ul>
          </nav>
  )
}
