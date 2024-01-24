'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import neflixBgSignin from '../../public/images/netflix-bg-signin2.jpg'
import logo from '../../public/images/Logonetflix.png'
import authStore from '../interfaces/authStore'
import {observer} from "mobx-react"
import Link from 'next/link'

const login = observer(() => {
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  
  const handleEmailChange = (event: any) => {
    setCurrentEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setCurrentPassword(event.target.value);
  };
  return (
    <>
    <div className='relative w-screen h-screen '>    
    <Image src={neflixBgSignin}  alt='background image' className=' brightness-50  absolute '></Image>
    <Image src={logo} alt="logo" className=' relative h-14 w-44 left-10 top-5'></Image>
  <div className='absolute flex justify-center  w-screen h-screen '>
 <div className='  grid self-center witDiv h-5/6 bg-black opacity-80 p-14 text-3xl rounded-sm'>
<div className=''>
<p className='font-semibold text-white'>Sign In</p>
<br />
<div className="max-w-sm mx-auto ">
      <div className="mb-5">
        <input
        
          type="email"
          id="email"
          onChange={handleEmailChange}
          value={currentEmail}
          className="shadow-sm bg-[#383434] focus:bg-[#484444] text-[#8c8c8c] text-sm rounded-sm w-10/12 p-4 border-none"
          placeholder="Email or phone number"
          
        />
      </div>

      <div className="mb-5">
        <input
          type="password"
          id="password"
          onChange={handlePasswordChange}
          value={currentPassword}
          className="shadow-sm bg-[#383434] focus:bg-[#484444] text-[#8c8c8c] text-sm rounded-sm w-10/12 p-4 border-none"placeholder="password"
          
        />
      </div>
      
      <div
       
        className="text-white bg-[rgb(232,12,20)] w-80 font-medium rounded-sm text-sm p-4 text-center"
      >
      <Link href="/who" onClick={() => { authStore.setAuthEmailPassword(currentEmail, currentPassword); authStore.handleSignIn(); }}>
 
       
        Sign In
       
        </Link>
      </div>
     
   
      <div className="flex  mb-5 py-3 w-96 ">
        <div className='grid grid-cols-2'>
        <div className="flex h-5  ">
          <input
            id="terms"
            type="checkbox"
            value=""
            className="w-4 h-4 bg-white border-none rounded-sm active:bg-[#737373]"
            
          />
      
        <label className="ms-1 text-xs text-white">
         Remember me
         
        </label>
        </div>
        </div>
        <a href="" className=' text-[#b3b3b3] flex justify-end mx-8 text-xs hover:underline'>Need help?</a>
     
      </div>

    </div>

    <br />
    <div className='  text-sm '>
    <span className=' text-[#8c8c8c]  w-24 '>New to Netlfix?<a href="../" className='text-sm text-white hover:underline'> Sign Up Now</a></span>
    <br />
    <br />

    <p className=' w-72 text-xs text-[#8c8c8c]'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="" className='text-[#0071eb] hover:underline'>Learn more.</a></p>
    </div>
    <br />
    <br />
</div>
</div>
 </div>
<br />
 </div><br />
 <br /><br />
 <br />
 <br />
 <div className='relative bg-black opacity-70 h-64 w-screen flex justify-center'>
  <div className="w-4/6 grid grid-rows-2 p-6  text-[#737373]">


 <div className='grid grid-cols-4 text-xs gap-4 '>
 <p className='text-base hover:underline'>Questions? Contact us.</p>
 <p></p>
 <p></p>
 <p></p>
  <p className='hover:underline'>FAQ</p>
  <p className='hover:underline'>Help Center</p>
  <p className='hover:underline'>Terms of Use</p>
  <p className='hover:underline'>Privacy</p>
  <p className='hover:underline'>Cookie preferences</p>
  <p className='hover:underline'>Corporate Information</p>
  <br />
 </div>

  </div>
 </div>
    </>
  )
})

export default login
