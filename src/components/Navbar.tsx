import React from 'react'
import Image from 'next/image'

import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className='flex px-6 justify-between items-center text-slate-500 '>
      <div>
        <Button variant={'ghost'} className='hover:text-primary hover:bg-transparent text-lg font-normal'>Home</Button>
        <Button variant={'ghost'} className='hover:text-primary hover:bg-transparent text-lg font-normal'>Sobre</Button>
      </div>

      <div>
        <Image src='/logoSuse.png' alt='logo' width={100} height={100} />
      </div>

      <div>
        <Button variant={'ghost'} className='hover:text-emerald-600 hover:bg-transparent text-lg font-normal'>Contato</Button>
      </div>
    </nav>
  )
}

export default Navbar