import React from 'react'
import Image from 'next/image'
import logo from '../../../public/images/Logonetflix.png'
import { Check, CheckCircle2, Laptop, Monitor, Smartphone } from 'lucide-react'
import Link from 'next/link'

const register = () => {
  return (
    <>
    <div className='border-[#e6e6e6] w-screen h-24 flex items-center'>
        <Image src={logo} alt='logo' className='mx-10 w-44 h-13'></Image>
        <span className=' h-full w-full flex justify-end items-center '>
<p className=' mx-16 text-lg font-semibold'>Sign Out</p>
</span>
    </div>
    <div className='py-28  pr-6  w-screen border-2 flex justify-center items-center'>
        <div className=''>
            <div className='flex justify-center'>
        <CheckCircle2 color="#e31e25" strokeWidth={1.5} className='size-12' />
        </div>
        <br /><p className='flex justify-center text-xs'>STEP 2 OF 3</p>
        <p className='text-3xl py-3 font-semibold w-96 text-center text-[#333333]'>Choose your plan.</p>
        <div className='w-96 pl-10 pb-6'>
        <div className=' w-9/12 py-3   flex'><Check size={40} color="#e31e25" strokeWidth={1.5} className='mr-3'  /><p className='flex items-end '>No commitments, cancel anytime.</p></div>
        <div className=' py-3  flex'><Check size={32} color="#e31e25" strokeWidth={1.5} className='mr-2' /><p className='flex items-end w-9/12'>Everything on Netflix for one low price.</p></div>
        <div className=' py-2 flex'><Check size={32} color="#e31e25" strokeWidth={1.5} className='mr-2' /><p className='flex items-start '>No ads and no extra fees. Ever.</p></div>
        </div>
<div className='w-full justify-center flex pt-2 ml-2 pb-16'>
<Link href="/register/planform" className='w-11/12 bg-red-600 text-2xl flex items-center justify-center text-white h-16 rounded-sm'>Next</Link>
</div>
        </div>
    </div>
    
    <div className=' w-screen h-36 py-6  px-20 bg-[#f3f3f3] text-[#737373]'>
        <div className='w-9/12 text-xs grid grid-cols-4 gap-3'>
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