'use client';
import React, { useEffect } from 'react'
import profile from'../../public/images/profile.jpg'
import Image from 'next/image';
import kids2 from'../../public/images/kids2.png'
import add from '../../public/images/add.png'
import authStore from '../interfaces/authStore';
import { redirect } from 'next/navigation'

import { observer } from 'mobx-react';
import login from '../login/page';
const who = () => {
  
  return (
    <>
  
      <div className='w-screen h-screen flex justify-center bg-[#141414] text-white font-sans'>
        <div className='grid self-center w-5/12 p-8 '>
          <div className='w-full flex justify-center text-6xl my-6'>Who's watching?</div>

          <div className='grid grid-cols-3 gap-6 h-72 py-4 px-5 '>
            <div className='grid h-32'>
              <a href="user">
                <div className='flex justify-center border-4 border-[#141414] hover:border-white rounded-lg'>
                  <Image className="h-40 rounded-sm" src={profile} alt='' />
                </div>
              </a>
              <p className='py-2 flex justify-center text-[#808080] text-lg'>muin</p>
            </div>

            <div className='grid h-32'>
            <a href="user/kids">
              <div className='flex justify-center border-4 border-[#141414] hover:border-white rounded-lg '>
                <Image className="h-40 rounded-sm" src={kids2} alt='' />
              </div>
              </a>
              <p className='py-2 flex justify-center text-[#808080] text-lg'>Kids</p>
            </div>

            <div className='grid h-11/12 '>
              <div className='h-11/12 flex justify-center items-center hover:rounded-lg hover:bg-white border-t-4 border-[#141414] rounded-sm'>
                <div className='flex justify-center items-center size-28'>
                  <Image className="flex items-center justify-center rounded-sm size-28" src={add} alt='' />
                </div>
              </div>
              <p className='py-2 flex justify-center text-[#808080] text-lg'>Add Profile</p>
            </div>
          </div>

          <div className='h-10 flex justify-center '>
            <a  href="who/manageProfile" className='border border-[#808080] text-lg w-1/3 flex justify-center items-center text-[#808080]'>
              Manage Profiles
            </a>
          </div>
        </div>
      </div>
   
  </>
    
  )
}

export default who