import React from 'react'
import Image from 'next/image'
import logo from '../../../public/images/Logonetflix.png'
import { Laptop, Monitor, Smartphone } from 'lucide-react'
import Link from 'next/link'

const register = () => {
  return (
    <>
    <div className='border-2 w-screen h-24 flex items-center'>
        <Image src={logo} alt='logo' className='mx-10 w-44 h-13'></Image>
        <span className=' h-full w-full flex justify-end items-center '>
<p className=' mx-16 text-lg font-bold'>Sign In</p>
</span>
    </div>
    
    <div className='  w-screen  flex justify-center items-center pb-32'>
        <div className='  p-7  w-4/12'>
        <p className=' text-xs py-2'>STEP 1 OF 3</p>
        <p className='text-3xl font-semibold w-11/12 text-[#333333] leading-10'>Create a password to start your membership</p>
        
       
        <p className='py-2  w-9/12 text-lg'>Just a few more steps and you're done!
We hate paperwork, too.</p>
<div className='w-full pr-5'>
    <input className='w-full my-1 h-12 rounded-sm' type="text" placeholder='Email' />
    <input className='w-full my-1 h-12 rounded-sm' type="text" placeholder='Add a password' />
    <span className='flex my-2'>
    <input
            id="terms"
            type="checkbox"
            value=""
            className="w-4 h-4 bg-white border rounded-sm active:border-none"
            
          />
          <p className='mx-3 mb-3 text-sm tracking-wide'>Please do not email me Netflix special offers.</p>
          </span>
<div className='w-full bg-red-600 text-2xl text-white h-16 rounded-sm flex justify-center items-center'><Link href="/register/plan" >Next</Link></div>
</div>

        </div>
        <br />
        <br />
    </div>
    <br />
    
    <div className='border-2  w-screen  pb-6 py-6 px-20 bg-[#f3f3f3] text-[#737373]'>
        <div className='w-8/12 text-xs grid grid-cols-4 gap-3'>
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