import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/Logonetflix.png'
import { CopySlash, Glasses, Laptop, Monitor, Smartphone, Smile } from 'lucide-react'
import Link from 'next/link'
import profile from '../../public/images/profile.jpg'
const transfer = () => {
  return (
    <>
    <div className='w-screen h-24 flex items-center border-b'>
     <Link href='/user'><Image src={logo} alt='logo' className='mx-10 w-44 h-13'/></Link>   
        <div className=' h-full w-full flex justify-end items-center '>
<p className=' mx-16 text-lg font-semibold'>Sign Out</p>
</div>
    </div>
    <div className=' py-14  w-screen  flex justify-center pb-56  '>
        <div className=' h-96 mr-2 '>

        <p className='text-3xl font-semibold flex justify-center  text-center text-[#333333]'>Start your profile transfer</p>
        <div className=' flex justify-center items-center my-10'>
<Image src={profile} width={80} height={80} className='rounded-lg mr-4 mt-2' alt='profile'></Image>
<p className='ml-1 font-semibold text-lg'>muin</p>
</div>
<p className='text-[#317deb] flex justify-center mb-16'>Transfer a different profile</p>
<div className='w-full justify-center flex'>
<Link href="/register/regform" className=' w-80 bg-red-600 text-lg flex font-semibold items-center justify-center text-white h-12 rounded-sm'>Start Profile Transfer</Link>
</div>
<p className='flex justify-center mt-4 font-bold'>Learn More</p>
<p className='flex justify-center text-xl font-semibold mt-14 mb-6'>We made it easy to transfer this profile</p>
<div className='flex justify-center '>  <Glasses className='text-[#e50914]' /><p className='  ml-8 w-5/12  '>Transfer recommendations, viewing history, My List, saved games, settings and more</p></div>
<div className='flex justify-center  my-5'>  <Smile className='text-[#e50914]' /><p className=' ml-8 w-5/12  '>Own your account, or join an existing account, and keep everything you love about this profile</p></div>
<div className='flex justify-center '>   <CopySlash className='text-[#e50914]' /><p className=' ml-8 w-5/12  '>We'll leave a backup copy of this profile on the original account</p></div>
<div className='flex justify-center  my-5'>  <p className=' ml-12 italic w-5/12  '>*Saved games will not be included in the backup copy.</p></div>

        </div>
        
    </div>
 
    <div className=' w-screen h-36 py-6 border-t px-20 mt-96 bg-[#f3f3f3] text-[#737373]'>
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

export default transfer