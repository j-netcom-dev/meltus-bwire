"use client";

import React from 'react'
import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname =usePathname();

  const links =[
    {
      href: '/',
      label: 'home'
    },
    {
      href: '/services',
      label: 'services'
    },
    {
      href: '/resume',
      label: 'resume'
    }
  ]
  return (
   <header className='p-5 xl:px-10'>
    <div className='p-0 m-0 flex justify-between items-center'>
      <Link href={'/'}><h1 className='block text-4xl font-semibold'>Meltus<span className='text-accent'>.</span></h1></Link>
      <nav className='hidden items-center gap-8 md:flex'>
        {links.map(({href, label}) =><Link href={href} key={href} className={`${href ===pathname && 'text-accent'} capitalize hover:text-accent transition-all`}>{label}</Link>)}
        <Link href={'/hire-me'}><Button className={`${'/hire-me' ===pathname && 'text-accent'}`}>Hire Me</Button></Link>
      </nav>
    </div>
   </header>
  )
}

export default Header;
