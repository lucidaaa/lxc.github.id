import React from 'react';
import Link from 'next/link'

export default function Footer() {
  return (
          <nav className=' static bg-white px-10 pt-10 mb-12 md:px-10 lg:px-20'>
            <ul className=' md:flex md:justify-between md:pt-40'>
              <li className=' py-3 hover:underline decoration-2'>
                <Link href="/">
                <a>Home</a>
                </Link>
              </li>
              <li className=' py-3 hover:underline decoration-2'>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li className=' py-3 hover:underline decoration-2'>
                <Link href="/projects">
                  <a>Projects</a>
                </Link>
              </li>
              <li className=' py-3 hover:underline decoration-2'>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
  )
}
