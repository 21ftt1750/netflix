'use client'
import React, { Fragment } from 'react'
import Image from 'next/image'
import logo from '../../public/images/Logonetflix.png'
import { ArrowLeft, ChevronDownIcon, ChevronRight, CopySlash, CreditCard, FolderSync, Glasses, HelpCircle, Home, Laptop, Monitor, MonitorSmartphone, Pencil, ShieldCheck, Smartphone, Smile, UserRound } from 'lucide-react'
import Link from 'next/link'
import mastercard from '../../public/images/mastercard.jpg'

import user from '../../public/images/profile.jpg'
import kids2 from '../../public/images/kids2.png'
import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames'
const transfer = () => {
  return (
    <>
    <div className='w-screen h-16 flex items-center border-b fixed bg-white'>
     <Link href='/user'><Image src={logo} alt='logo' className='ml-48 w-28 h-8'/></Link>   
        <div className=' h-full w-full flex justify-end items-center '>
        <Menu as="div" className="relative inline-block text-left">
   
        <Menu.Button className="inline-flex border items-center pr-52 justify-center gap-x-1.5 bg-none border-none">
        <Image src={user} alt='user' className='size-8 rounded-sm shadow-2xl z-10'></Image>    
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
   

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0  z-10 mt-2 w-56 origin-top-right bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          <Menu.Item>
  {({ active }) => (
    <Link
      href="user/kids"
      className={classNames(
        active ? ' underline' : 'text-white',
        ' px-4 py-2 text-xs flex items-center' 
      )}
    >
      <Image
        src={kids2}
        alt="Kids Icon" 
        className="mr-2 h-8 w-8"
      />
      Kids
    </Link>
  )}
</Menu.Item>
<Menu.Item>
  {({ active }) => (
    <Link
      href="who/manageProfile"
      className={classNames(
        active ? ' underline' : 'text-white',
        ' px-4 py-2 text-xs flex items-center' 
      )}
    >
      <Pencil className='mr-4 text-[#b3b3b3]'/>
      Manage Profiles
    </Link>
  )}
</Menu.Item>
<Menu.Item>
  {({ active }) => (
    <Link
      href="transfer"
      className={classNames(
        active ? ' underline' : 'text-white',
        ' px-4 py-2 text-xs flex items-center' 
      )}
    >
      <FolderSync className='mr-4' />
      Transfer Profiile
    </Link>
  )}
</Menu.Item>
<Menu.Item>
  {({ active }) => (
    <Link
      href="/account"
      className={classNames(
        active ? ' underline' : 'text-white',
        ' px-4 py-2 text-xs flex items-center' 
      )}
    >
       <UserRound className='mr-4 text-[#b3b3b3]'/>
      Account
    </Link>
  )}
</Menu.Item>
<Menu.Item>
  {({ active }) => (
    <Link
      href="#"
      className={classNames(
        active ? ' underline' : 'text-white',
        ' px-4 py-2 text-xs flex items-center' 
      )}
    >
    <HelpCircle className='mr-4 text-[#b3b3b3]' />
      Help Center
    </Link>
  )}
</Menu.Item>
           
<Menu.Item>
  {({ active }) => (
    <>
      <p className='text-[#4a4946]'>_______________________________</p>
      <Link
        href="../"
        className={classNames(
          active ? 'underline' : 'text-white',
          'px-4 py-2 text-xs flex items-center justify-center'
        )}
      >
        
        Sign out of Netflix
      </Link>
    </>
  )}
</Menu.Item>

          
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
</div>
</div>
        <div className='w-screen h-screen px-44 py-6'>           
        <div className=' w-full h-full flex mt-16'>
            <div className='left  w-1/4 '>
                <Link href="/user" className='flex items-center h-10 rounded-sm hover:bg-[#e2e2e2]  pl-4 mr-20 mb-8'>
            <ArrowLeft />
            <p className='text-sm ml-2'>Back to Netflix</p>
            </Link>
            <div className='flex items-center h-10 rounded-sm hover:bg-[#e2e2e2]  pl-4 mr-20  mt-2'>
            <Home />
            <p className='text-sm ml-3'>Overview</p>
            </div>
            <div className='flex items-center h-10 rounded-sm hover:bg-[#e2e2e2]  pl-4 mr-20  mt-2'>
            <CreditCard />
            <p className='text-sm ml-3'>Membership</p>
            </div>
            <div className='flex items-center h-10 rounded-sm hover:bg-[#e2e2e2]  pl-4 mr-20  mt-2'>
            <ShieldCheck />
            <p className='text-sm ml-3'>Security</p>
            </div>
            <div className='flex items-center h-10 rounded-sm hover:bg-[#e2e2e2]  pl-4 mr-20  mt-2'>
            <MonitorSmartphone />
            <p className='text-sm ml-3'>Devices</p>
            </div>
            <div className='flex items-center h-10 rounded-sm hover:bg-[#e2e2e2]  pl-4 mr-20  mt-2'>
            <Smile />
            <p className='text-sm ml-3'>Profiles</p>
            </div>
            </div>

            <div className='right  w-3/4 pl-14 pt-3 pr-3'>
            <p className='text-4xl font-extrabold'>Account</p>
            <p className='my-3' >Membership Details</p>
            <div className='border-2 h-60 rounded-lg'>
                <div className='bg-[#3a3d9c] mt-4 w-56 rounded-r-full h-9 flex items-center justify-center'><p className='text-white font-bold text-sm'>Member since January 2024</p></div>
                <div className='ml-6 mt-4 border-b'>
                <p className='font-bold text-lg'>Standard plan</p>
                <p className='my-2 text-lg'>Next payment: February 13, 2024</p>
                <span className='flex items-center mb-4'>
                <Image src={mastercard} alt='mastercard' className='w-6 h-4'></Image><p className='ml-3'>•••• •••• •••• 9999 </p>
                </span>
                </div>
               <div className='flex '>
                <p className='mt-4 ml-6 w-1/2'>Manage membership</p>
                <div className='justify-end flex h-14  items-center mr-4 w-1/2'><ChevronRight /></div>
                
                </div>
               
            </div>

            <p className='mt-8 mb-4 text-lg'>Quick Links</p>
            <div className='border-2 rounded-lg h-96'></div>
            </div>
        </div>
        </div>
 
<div className=' w-screen h-36 py-6 border-t px-20 mt-96 bg-[#f3f3f3] text-[#737373]'>
        <div className='w-11/12 text-xs grid grid-cols-4 gap-3'>
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