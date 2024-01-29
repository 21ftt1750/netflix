'use client'
import React from 'react'
import Image from 'next/image'
import profile from '../../../public/images/profile.jpg'
 
import { Checkbox } from "@/components/ui/checkbox"
 

const page = () => {
  return (
    <>
<div className='h-16  fixed w-screen bg-[#141414]'></div>
<div className='bg-[#141414] pt-16  w-screen flex justify-center'>
        <div className='h-full w-1/2  text-white px-12 py-4  '>
    <p className='text-6xl'>Edit Profile</p>
    <p className='text-[#2b2b2b] mb-3'>_________________________________________________________________________________________</p>
    <div className='flex'>
    <Image className="h-32 w-32 rounded-sm " src={profile} alt='' />
<div className='w-full mx-6   '>
        <input className=' w-full h-10 bg-[#666666] p-4 text-lg' value="muin"></input>
        <p className='mt-4 text-lg text-[#cccccc]'>Language:</p>
        <select name="" id="" className='h-10 border-white bg-black'>
            <option value="" className=''>English</option>
        </select>
        <p className='my-4 text-lg text-[#cccccc]'>Game Handle:</p>
        <p className='text-sm '>Your handle is a unique name that'll be used for playing with other &nbsp;&nbsp;&nbsp;&nbsp; Netflix members across all Netflix Games. <a href="" className='font-bold'>Learn more.</a></p>
        <input className=' w-full h-10 bg-[#666666] p-4 text-lg mt-2 text-[#cccccc]' placeholder="Create Game Handle"></input>
        <div className='w-full  mb-3 h-4 flex justify-end'>0/16</div>
        <p className='text-[#2b2b2b] mb-3'>_____________________________________________________________________</p>
        <p className='my-4 text-lg text-[#cccccc]'>Maturity Settings:</p>
        <div className='bg-[#333333] h-8 rounded-sm w-40 text-sm flex justify-center items-center font-semibold'><p>All Maturity Ratings</p></div>
   <p className='my-4 text-sm'>Show titles of all maturity settings for this profile.</p>
   <div className='border my-6 h-9 text-[#808080] border-[#808080] flex justify-center items-center w-20'><p>Edit</p></div>
   <p className='text-[#2b2b2b] mb-3'>_____________________________________________________________________</p>
   <p className='my-4 text-lg text-[#cccccc]'>Autoplay controls</p>
   <div className="flex items-center space-x-2">
      <Checkbox id="autoplay" />
      <label
        htmlFor="autoplay"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
      <p className='text-xs font-semibold'>Autoplay next episode in a series on all devices.</p>
      </label>
      
    </div>
    <div className="flex items-center space-x-2 mt-1">
      <Checkbox id="autoplay2" />
      <label
        htmlFor="autoplay2"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
      <p className='text-xs font-semibold'>Autoplay previews while browsing on all devices.</p>
      </label>  
    </div>
</div>
 
</div>
<p className='text-[#2b2b2b] mb-3 mt-2'>_________________________________________________________________________________________</p>
   
   <div className='flex mt-6'>
    <a href='/who/manageProfile' className='flex justify-center items-center bg-white text-black h-10 w-24 mr-4 font-bold'>Save</a>
    <button className='bg-transparent border border-[#808080] text-[#808080] h-10 w-28 '>Cancel</button>
   </div>
</div>
</div>
    </>
  )
}

export default page