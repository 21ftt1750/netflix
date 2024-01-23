import React from 'react'
import Image from 'next/image'
import logo from '../../../public/images/Logonetflix.png'
import premColor from '../../../public/images/premColor.png'
import standardColor from '../../../public/images/standardColor.png'
import Link from 'next/link'

const register = () => {
  return (
    <>
    <div className='border-[#e6e6e6] border w-screen h-24 flex items-center'>
        <Image src={logo} alt='logo' className='mx-10 w-44 h-13'></Image>
        <span className=' h-full w-full flex justify-end items-center '>
<p className=' mx-16 text-lg font-semibold'>Sign Out</p>
</span>
    </div>
<div className=' w-screen flex justify-center py-8 '>
    <div className=' w-10/12  px-8'>
        <p className='text-xs pt-3'>STEP 2 OF 3</p>
        <p className='text-3xl pt-1 font-bold text-[#333333]'>Choose the plan that's right for you</p>
        <div className='grid grid-cols-4 gap-2 pr-3 '>
<div className='border-2 shadow-2xl mt-6 rounded-xl relative'>
  <div className='bg-red-600 h-7 rounded-t-xl flex justify-center items-center font-bold text-xs text-white'>
    Most Popular
  </div>
  <div className='relative p-2'>
    <Image src={premColor} alt={''} className='relative z-0 rounded-xl' />
    <div className='absolute top-5 left-8 text-white'>
      <p className='font-bold'>Premium</p>
      <p className='text-sm font-bold'>4K + HDR</p>
    </div>
  </div>

            <div className='px-6 pt-6 pb-5 '>
              <p className='text-xs text-[#767676] font-bold'>Monthly price</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>$13.99</p>  
              <p className='text-[#cccccc]'>_________________________________</p>
              <p className='text-xs text-[#767676] pt-2 font-bold'>Video and sound quality</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>Best</p>  
              <p className='text-[#cccccc]'>_________________________________</p>
              <p className='text-xs text-[#767676] pt-2 font-bold'>Resolution</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>4K (Ultra HD) + HDR</p>  
              <p className='text-[#cccccc]'>_________________________________</p>
              <p className='text-xs text-[#767676] pt-2 font-bold'>Spatial audio (immersive sound)</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>Included</p>  
              <p className='text-[#cccccc]'>_________________________________</p>
              <p className='text-xs text-[#767676] pt-2 font-bold'>Supported devices</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>TV, computer, mobile phone, tablet</p>  
              <p className='text-[#cccccc]'>_________________________________</p>
              <p className='text-xs text-[#767676] pt-2 font-bold'>Devices your household can watch at the same time</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>4</p>  
              <p className='text-[#cccccc]'>_________________________________</p>
              <p className='text-xs text-[#767676] pt-2 font-bold'>Download devices</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>6</p>  
            </div>
            </div>

            <div className='border-2 mt-14 rounded-xl shadow-2xl '>
            <div className='relative p-2'>
            <Image src={standardColor} alt={''} className='relative z-0 rounded-xl' />
            <div className='absolute top-5 left-8 text-white'>
              <p className='font-bold'>Standard</p>
              <p className='text-sm font-bold'>1080p</p>
            </div>
          </div>
            <div className='px-6 pt-6 pb-5 '>
              <p className='text-xs text-[#767676] font-bold'>Monthly price</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>$11.99</p>  
              <p className='text-[#cccccc]'>_________________________________</p>
              <p className='text-xs text-[#767676] pt-2 font-bold'>Video and sound quality</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>Great</p>  
              <p className='text-[#cccccc]'>_________________________________</p>
              <p className='text-xs text-[#767676] pt-2 font-bold'>Resolution</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>1080p (Full HD)</p>  
              <p className='text-[#cccccc]'>_________________________________</p>
              <p className='text-xs text-[#767676] pt-2 font-bold'>Supported devices</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>TV, computer, mobile phone, tablet</p>  
              <p className='text-[#cccccc]'>_________________________________</p>
              <p className='text-xs text-[#767676] pt-2 font-bold'>Devices your household can watch at the same time</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>2</p>  
              <p className='text-[#cccccc]'>_________________________________</p>
              <p className='text-xs text-[#767676] pt-2 font-bold'>Download devices</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>2</p>  
       
            </div></div>
            <div className='border-2 mt-14 rounded-xl  shadow-2xl'>  <div className='relative p-2'>
            <Image src={standardColor} alt={''} className='relative z-0 rounded-xl' />
            <div className='absolute top-5 left-8 text-white'>
              <p className='font-bold'>Basic</p>
              <p className='text-sm font-bold'>720p</p>
            </div>
          </div>
            <div className='px-6 pt-6 pb-5 '>
              <p className='text-xs text-[#767676] font-bold'>Monthly price</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>$8.99</p>  
              <p className='text-[#cccccc]'>_________________________________</p>
              <p className='text-xs text-[#767676] pt-2 font-bold'>Video and sound quality</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>Good</p>  
              <p className='text-[#cccccc]'>_________________________________</p>
              <p className='text-xs text-[#767676] pt-2 font-bold'>Resolution</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>720p (HD)</p>  
              <p className='text-[#cccccc]'>_________________________________</p>
              <p className='text-xs text-[#767676] pt-2 font-bold'>Supported devices</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>TV, computer, mobile phone, tablet</p>  
              <p className='text-[#cccccc]'>_________________________________</p>
              <p className='text-xs text-[#767676] pt-2 font-bold'>Devices your household can watch at the same time</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>1</p>  
              <p className='text-[#cccccc]'>_________________________________</p>
              <p className='text-xs text-[#767676] pt-2 font-bold'>Download devices</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>1</p>  
       
            </div></div>
            <div className='border-2 mt-14 rounded-xl  shadow-2xl'>  <div className='relative p-2'>
            <Image src={standardColor} alt={''} className='relative z-0 rounded-xl' />
            <div className='absolute top-5 left-8 text-white'>
              <p className='font-bold'>Mobile</p>
              <p className='text-sm font-bold'>480p</p>
            </div>
          </div>
            <div className='px-6 pt-6 pb-5 '>
              <p className='text-xs text-[#767676] font-bold'>Monthly price</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>$4.99</p>  
              <p className='text-[#cccccc]'>_________________________________</p>
              <p className='text-xs text-[#767676] pt-2 font-bold'>Video and sound quality</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>Fair</p>  
              <p className='text-[#cccccc]'>_________________________________</p>
              <p className='text-xs text-[#767676] pt-2 font-bold'>Resolution</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>480p</p>  
              <p className='text-[#cccccc]'>_________________________________</p>
              <p className='text-xs text-[#767676] pt-2 font-bold'>Supported devices</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>Mobile phone, tablet</p>  
              <p className='text-[#cccccc]'>_________________________________</p>
              <p className='text-xs text-[#767676] pt-2 font-bold'>Devices your household can watch at the same time</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>1</p>  
              <p className='text-[#cccccc]'>_________________________________</p>
              <p className='text-xs text-[#767676] pt-2 font-bold'>Download devices</p>
              <p className='text-[#4c4c4c] font-bold text-sm'>1</p>  
       
            </div>
   </div> </div>
        <p className='py-8 text-xs'>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.
Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.
</p>
<div className=' flex justify-center pt-5'>
  <div className='w-screen flex justify-center  px-20'>
       <Link href="" className=' bg-red-600 text-white text-xl font-semibold h-20 items-center w-5/12 justify-center flex rounded-sm'>Next</Link>
       </div></div>
    </div>
</div>
    
    <div className=' w-screen h-36 py-4 mt-28 px-20 bg-[#f3f3f3] text-[#737373] border-2'>
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