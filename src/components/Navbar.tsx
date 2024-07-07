'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Button } from './ui/button'
import { Menu } from 'lucide-react'

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)


  return (
    <nav >
      {/* desktop */}
      <div className=' hidden md:flex mx-8 py-6 justify-between items-center text-slate-500 border-b'>
        <div>
          <Button variant={'ghost'} className='hover:text-primary hover:bg-transparent text-lg font-normal'>Home</Button>
          <Button variant={'ghost'} className='hover:text-primary hover:bg-transparent text-lg font-normal'>Sobre</Button>
        </div>

        <div>
          <Image src='/logoSuse.png' alt='logo' height={100} width={200} />
        </div>

        <div>
          <Button variant={'ghost'} className='hover:text-emerald-600 hover:bg-transparent text-lg font-normal'>Contato</Button>
        </div>

      </div>

      {/* mobile */}
      <div className='flex sm:hidden justify-between items-center px-4 py-6'>
        <Image src='/logoSuse.png' alt='logo' height={100} width={200} onClick={() => console.log(toggleDropdown)
        }/>
        <Menu 
          width={32}
          height={32}
          onClick={() => setToggleDropdown((prev) => !prev)}
        />
        {toggleDropdown && (
          <div className='absolute right-0 mt-3 top-16 w-full p-5 rounded-lg bg-white min-w-[210px] flex flex-col gap-2 justify-end items-end'>
            <p className='text-lg font-normal'>Home</p>
            <p className='text-lg font-normal'>Sobre</p>
            <p className='text-lg font-normal'>Contato</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar