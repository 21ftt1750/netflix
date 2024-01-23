import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/Logonetflix.png'
import { Laptop, Monitor, Smartphone } from 'lucide-react'
import Link from 'next/link'

const register = () => {
  return (
    <>
    <div className='border-black w-screen h-24 flex items-center'>
        <Image src={logo} alt='logo' className='mx-10 w-44 h-13'></Image>
        <span className=' h-full w-full flex justify-end items-center '>
<p className=' mx-16 text-lg font-bold'>Sign In</p>
</span>
    </div>
    <div className=' p-32  w-screen border-2 flex justify-center items-center'>
        <div className=' h-96'>
            <div className='flex justify-center'><Laptop strokeWidth={0.5} color="#e31e25"  className='size-20 '/><Monitor strokeWidth={0.5} color="#e31e25"  className='size-20' /><span className='h-16 flex items-end'><Smartphone color="#e31e25" strokeWidth={1}  className='size-12 '/></span></div>
        <br /><p className='flex justify-center text-xs'>STEP 1 OF 3</p>
        <p className='text-3xl font-bold w-96 text-center text-[#333333]'>Finish setting up your account</p>
        <div className='w-96  flex justify-center'>
        <p className=' w-9/12 py-5 text-center  text-lg'>Netflix is personalized for you. Create a password to watch on any device at any time.
</p></div>
<div className='w-full justify-center flex'>
<Link href="/register/regform" className='w-11/12 bg-red-600 text-2xl flex items-center justify-center text-white h-16 rounded-sm'>Next</Link>
</div>

        </div>
    </div>
    
    <div className=' w-screen h-36 py-6 px-20 bg-[#f3f3f3] text-[#737373]'>
        <div className='w-/12 text-xs grid grid-cols-4 gap-3'>
            <p className='text-base hover:underline'>Questions? Contact us.</p>
            <p></p>
            <p></p>
            <p></p>
            <p className='py-1'></p>
            <p></p>
            <p></p>
            <p></p>
            <p className='hover:underline'>FAQ</p>
            <p className='hover:underline'>Help Center</p>
            <p className='hover:underline'>Netflix Shop</p>
            <p className='hover:underline'>Terms of Use</p>
            <p className='hover:underline'>Privacy</p>
            <p className='hover:underline'>Cookie Preferences</p>
            <p className='hover:underline'>Corporate Information</p>
        </div>
    </div>
    </>
  )
}

export default register