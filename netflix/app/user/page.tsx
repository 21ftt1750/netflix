'use client' 

import { useEffect, useState } from 'react';
import logo from '../../public/images/Logonetflix.png';
import Image from 'next/image';
import user from '../../public/images/profile.jpg'
import mName from '../../public/images/mName.webp';
import ca from '../../public/images/ca.gif'
import pb from '../../public/images/pb.jpg'
import { Bell, Info, Play, Search } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import React from 'react';
  

function User() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='relative w-screen h-screen bg-[#141414]'>
     <Image src={pb} alt="Avengers GIF" className="z-0 w-full h-full brightness-50" />
         
     <div className='absolute top-0 left-0 w-1/2 h-screen  py-40 px-14 text-white'>
        <div className=' flex self-center'>
          <Image src={mName} alt='moviename' className='h-56 w-10/12'></Image>
          </div>
          <br />
          
        <p className=' w-11/12 leading-6 text-lg'>A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; matter  the cost</p>
       <br />
        <div className=' flex items-center'>
            
            <button className=' w-32 h-12  bg-[#ffffff] rounded-sm hover:bg-[#c8c4c4]'><p className='text-black flex items-center px-6 font-bold'><Play className='size-8' />&nbsp;Play</p></button>
            <button className=' w-44 h-12  mx-3 bg-[#525454] rounded-sm hover:bg-[#363a3c]'><p className='flex items-center px-6 text-lg  font-semibold'><Info className='size-8'/>&nbsp;&nbsp;More Info</p></button>
        </div>
        </div>
      <div
      
        className={`navbar z-10 fixed top-0 left-0 w-full h-16 transition-colors duration-300 ${
          scrolling ? 'bg-[#141414]' : 'bg-transparent'
        }`}
      >

    

        <div className='mx-11 inline-flex h-full self-center text-sm text-white'>
          <div className='justify-center flex items-center w-24 mx-4 h-full'>
            <Image src={logo} width={96} height={96} alt='logo' />
          </div>
          <div className='inline-flex px-3 h-11 text-sm'>
            <p className='justify-start flex items-end hover:text-[#b3b3b3] px-4'>Home</p>
            <p className='justify-start flex items-end hover:text-[#b3b3b3] w-20 '>TV Shows</p>
            <p className='justify-start flex items-end hover:text-[#b3b3b3] px-1'>Movies</p>
            <p className='justify-start flex items-end hover:text-[#b3b3b3] px-4'>Latest</p>
            <p className='justify-start flex items-end hover:text-[#b3b3b3] px-1'>My List</p>
            <p className='justify-start flex items-end hover:text-[#b3b3b3] px-3'>Browse by Languages</p>
          </div>
         
        </div>
        <div className='inline-flex  w-1/2 justify-end text-white '>
            <div className='inline-flex px-12 h-full '>
        <Search/>
        <p className='px-5 text-xs flex items-center h-6'>Kids</p>
        <span className='flex items-start '>
        <Bell  />
        </span>
      <div className='px-5 '>
            <Image src={user} alt='user' className='size-8 rounded-sm shadow-2xl'></Image>
            
            </div>
        </div>
        </div>
      </div>
      <div className='w-screen h-screen bg-[#141414] text-white '>
        <p className=' px-20 font-semibold py-3  text-xl'>Top Picks for you</p>
        <div className=' w-screen flex justify-center '>
        <Carousel
  opts={{
    align: "start",
  }}
  className="w-11/12 h-32"
>
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <React.Fragment key={index}>
        <CarouselItem className=" lg:basis-1/6  flex justify-center">
         
            <Image  src={ca} alt="" className='rounded-sm' />
          
        </CarouselItem>
        <CarouselItem className=" lg:basis-1/6  flex justify-center">
         
            <Image height={122} src={pb} alt="" className='rounded-sm' />
         
        </CarouselItem>
      </React.Fragment>
    ))}
  </CarouselContent>
  <CarouselPrevious className='bg-transparent h-full border-none' />
  <CarouselNext className='bg-transparent h-full border-none w-14 rounded-sm hover:bg-black hover:contrast-75' />
</Carousel>

      </div>
      </div>
    </div>
  );
}

export default User;
 