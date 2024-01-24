import React from 'react'
import Image from 'next/image'
import logo from '../../../public/images/Logonetflix.png'
import visa from '../../../public/images/visa.jpg'
import mastercard from '../../../public/images/mastercard.jpg'
import amex from '../../../public/images/AMEX.png'
import Link from 'next/link'
import { ChevronRight, CreditCard, HelpCircle, LockKeyhole } from 'lucide-react'

const register = () => {
  return (
    <>
    <div className='border-[#e6e6e6] border-b-2 w-screen h-20 my-3 flex items-center'>
        <Image src={logo} alt='logo' className='mx-10 w-44 h-13 mb-3'></Image>
        <span className=' h-full w-full flex justify-end items-center '>
<p className=' mx-16 text-lg font-semibold mb-3'>Sign Out</p>
</span>
    </div>

    <div className=' w-screen mb-64 flex justify-center '>
        <div className='mt-3   w-4/12 px-6'>
           
        <p className=' mt-4 text-xs ml-1'>STEP 3 OF 3</p>
        <p className=' text-3xl font-bold mt-1 ml-1 w-10/12'>Set up your credit or debit card</p>
        <div className='flex mt-5 items-center'>
        <Image className='mr-1' src={visa} alt={''} width={48} height={48}></Image>
<Image className=' h-4 flex items-center ' src={mastercard} alt={''}  width={32} height={8}></Image>
<Image className='mx-1' src={amex} alt={''}  width={44} height={44}></Image>
        </div>
       
        <div className='w-full flex justify-center  items-center'>
            <div className='ml-1 mr-5 h-16 rounded-sm border border-[#a9a9a9] mt-1 flex items-center px-2 w-full'>
        <input className='h-full w-full focus:outline-none ' placeholder='Card number'  />
        <div className='flex justify-end w-full'>
        <CreditCard color='#808080' className='size-7'/>
        </div>
        </div>
        </div>
        <div className='w-full flex justify-center mt-1 pr-5'>

        <input className='focus:outline-none ml-1 mr-1 h-16 rounded-sm border border-[#a9a9a9] mt-1 flex items-center px-2 w-1/2' placeholder='Expiration date' />
        <div  className='ml-1 h-16 rounded-sm border border-[#a9a9a9] mt-1 flex items-center px-2 w-1/2'>
        <input placeholder='CVV' className=' focus:outline-none h-full w-11/12' />
        <HelpCircle color='#808080' className='size-7'  />
        </div>
        </div>
        <div className='w-full flex justify-center mt-1'>
        <input className=' focus:outline-none ml-1 mr-5 h-16 rounded-sm border border-[#a9a9a9] mt-1 flex items-center px-2 w-full' placeholder='First name' />
        </div>
        <div className='w-full flex justify-center mt-1'>
        <input className=' focus:outline-none ml-1 mr-5 h-16 rounded-sm border border-[#a9a9a9] mt-1 flex items-center px-2 w-full' placeholder='Last name' />
        </div>

        <div className='w-full mt-3 pr-6'>
        <div className='ml-1 mr-5  h-16 rounded-sm  bg-[#f4f4f4] mt-1 px-2 w-full flex items-center'>
            <div className='w-1/2 ml-2'>
            <p className='font-bold'>$11.99/month</p>
            <p className='text-[#737373]'>standard</p>
            </div>
            <div className=' w-1/2    flex justify-end items-center h-full'>
            <a href="/register/planform" className='text-[#0071eb] font-semibold mr-2'>Change</a>
            </div>
        </div>
            <p className='text-xs pt-6 pl-1 pr-4 text-[#737373]'>By checking the checkbox below, you agree to our <a className='text-[#1785ed]'>Terms of Use, Privacy Statement</a>, and that you are over 18. Netflix will automatically continue your membership and charge
         the membership fee (currently $11.99/month) to your payment method until you cancel. 
         You may cancel at any time to avoid future charges.</p>
        </div>
        <div className='w-full flex  items-end '>
        <input type="checkbox" className='appearance-none size-7 ml-1 mt-2 active:outline-none focus:outline-none ring-0 mr-2' />
        <p className='text-[#737373]'>I agree.</p>
        </div>
        <div className='w-full   flex justify-center mt-8 pr-5 pl-1'>
    <Link rel="stylesheet" href="/login" className='w-full h-16 bg-[#e50914] flex justify-center items-center text-2xl text-white rounded-sm' >Start Membership</Link>
    </div>
    <p className='mt-5 w-11/12 ml-1 text-xs text-[#737373]'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a className='text-[#1785ed]'>Learn more.</a></p>
    </div>
    </div>

    
    <div className=' w-screen h-36 py-4 pt-6 px-20 bg-[#f3f3f3] text-[#737373] border-2'>
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