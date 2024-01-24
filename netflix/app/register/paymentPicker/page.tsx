import React from 'react'
import Image from 'next/image'
import logo from '../../../public/images/Logonetflix.png'
import visa from '../../../public/images/visa.jpg'
import mastercard from '../../../public/images/mastercard.jpg'
import amex from '../../../public/images/AMEX.png'
import Link from 'next/link'
import { ChevronRight, LockKeyhole } from 'lucide-react'

const register = () => {
  return (
    <>
    <div className='border-[#e6e6e6] border w-screen h-24 flex items-center'>
        <Image src={logo} alt='logo' className='mx-10 w-44 h-13'></Image>
        <span className=' h-full w-full flex justify-end items-center '>
<p className=' mx-16 text-lg font-semibold'>Sign Out</p>
</span>
    </div>

    <div className=' w-screen mb-44 flex justify-center'>
        <div className='mt-10 mr-4  '>
            <div className='flex justify-center'>
            <div className='border-2 h-12 w-12 rounded-full flex justify-center items-center border-[#e31e25]'><LockKeyhole color='#e31e25' /></div>
            </div>
        <p className='flex justify-center mt-10 text-xs'>STEP 3 OF 3</p>
        <p className='flex justify-center text-3xl font-bold mt-2'>Choose how to pay</p>
        <span className='flex justify-center'>
        <p className=' mt-4 w-9/12 text-center '>Your payment is encrypted and you can change how you pay anytime.</p>
        </span>
        <span className='flex justify-center mt-1'>
        <p className='w-5/12 text-center font-bold'>Secure for peace of mind. Cancel easily online.</p>
        </span>

        <p className='flex justify-end text-xs mt-5 '>End-to-end encrypted <LockKeyhole strokeWidth={3} absoluteStrokeWidth  color='#ffb53f' width={12} height={12} className='ml-1 mr-7' /></p>
        <div className='w-full flex justify-center'>
            <Link href="payment">
        <div className=' h-16 rounded-sm border border-[#a9a9a9] mt-1 flex items-center px-2'>
            
            <p className='w-40'>Credit or Debit Card</p>
<Image className='mx-1' src={visa} alt={''} width={48} height={48}></Image>
<Image className='mx-1' src={mastercard} alt={''}  width={32} height={32}></Image>
<Image className='mx-1' src={amex} alt={''}  width={44} height={44}></Image>
<span className='w-40 flex justify-end'>
<ChevronRight/>
</span>
        </div>
        </Link>
        </div>
        </div>
    </div>

    
    <div className=' w-screen h-36 py-4 px-20 bg-[#f3f3f3] text-[#737373] border-2'>
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