'use client' 

import { useEffect, useState } from 'react';
import logo from '../../../public/images/Logonetflix.png';
import Image from 'next/image';
import user from '../../../public/images/profile.jpg'
import fool from '../../../public/images/fool.webp';
import foolme from '../../../public/images/foolme.webp'

import { Bell, Facebook, Info, Instagram, Play, Search, Twitter, Youtube } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import React from 'react';
import Link from 'next/link';
  
const firstRow = [
  {imageLink: '/images/you.jpg'},
  {imageLink: '/images/forgotten.jpg'},
  {imageLink: '/images/bm.png'},
  {imageLink: '/images/wednesday.jpg'},
  {imageLink: '/images/escape.jpg'},
  {imageLink: '/images/eh.jpg'},
]
const secondRow = [
  {imageLink: '/images/gf.jpg'},
  {imageLink: '/images/ss.jpg'},
  {imageLink: '/images/tc.jpeg'},
  {imageLink: '/images/fb.jpg'},
  {imageLink: '/images/gh.webp'},
  {imageLink: '/images/2f2.webp'},
]

const thirdRow =[
  {imageLink: '/images/here.jpg'},
  {imageLink: '/images/dh.jpeg'},
  {imageLink: '/images/lt.jpg'},
]

const fourthRow = [
  {imageLink: '/images/jk.webp'},
  {imageLink: '/images/sa.png'},
  {imageLink: '/images/meh.jpg'},
  {imageLink: '/images/akira.jpg'},
  {imageLink: '/images/yn.jpg'},
  {imageLink: '/images/wc.jpg'},
] 

function User() {


  return (
    <div className='relative w-screen h-screen bg-[#141414]'>
<div
      
      className='navbar z-10 fixed top-0 left-0 w-full h-16 bg-[#141414]'
    >

  

      <div className='mx-11 inline-flex h-full self-center text-sm text-white'>
        <div className='justify-center flex items-center w-24 mx-4 h-full'>
          <Image src={logo} width={96} height={96} alt='logo' />
        </div>
        <div className='inline-flex px-3 h-11 text-sm'>
            <a href='/user'className='justify-start flex items-end hover:text-[#b3b3b3] px-4'>Home</a>
            <a href='/user/tvShows' className='justify-start flex items-end hover:text-[#b3b3b3] w-20 '>TV Shows</a>
            <a href='/user/movies' className='justify-start flex items-end hover:text-[#b3b3b3] px-1'>Movies</a>
            <a href='/user/latest' className='justify-start flex items-end hover:text-[#b3b3b3] px-4'>Latest</a>
            <a href='/user/myList' className='justify-start flex items-end hover:text-[#b3b3b3] px-1'>My List</a>
            <a href='/user/bbl' className='justify-start flex items-end hover:text-[#b3b3b3] px-3'>Browse by Languages</a>
          </div>
       
      </div>
      <div className='inline-flex  w-1/2 justify-end text-white '>
          <div className='inline-flex px-12 h-full '>
      <Search/>
      <a href='kids' className='px-5 text-sm flex items-center h-6'>Kids</a>
      <span className='flex items-start '>
      <Bell  />
      </span>
    <div className='px-5 '>
          <Image src={user} alt='user' className='size-8 rounded-sm shadow-2xl'></Image>
          
          </div>
      </div>
      </div>
    </div>
      
      
      <div className='  w-screen  bg-[#141414] text-white pt-24'>
      <p className=' px-16 font-semibold py-3  text-xl'>New on Netflix</p>
        <div className="">

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-11/12 h-32 mx-auto"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <React.Fragment key={index}>
                {firstRow.map((row, rowIndex) => (
                  <CarouselItem className="lg:basis-1/6 flex justify-center h-32">
                  <Link href="/user/moviePlayer"> <Image width={11200} height={10000} src={row.imageLink} alt="" className='rounded-sm h-full' /></Link> 
                  </CarouselItem>
                ))}
              </React.Fragment>
            ))}
          </CarouselContent>
          <CarouselPrevious className='bg-transparent h-full border-none rounded-sm hover:bg-transparent' />
          <CarouselNext className='bg-transparent h-full border-none rounded-sm hover:bg-transparent' />
        </Carousel>
      </div>
      <br />
      <br />
   

{/* next */}


<p className=' px-16 font-semibold py-3  text-xl'>Worth the Wait</p>
        <div className=' w-screen flex justify-center  '>
        <Carousel
  opts={{
    align: "start",
  }}
  className="w-11/12 h-32 "
>
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <React.Fragment key={index}>
        {secondRow.map((row, rowIndex) =>(
            <CarouselItem className=" lg:basis-1/6  flex justify-center h-32">         
       <Link href="/user/moviePlayer">   <Image width={11200} height={96} src={row.imageLink} alt="" className='rounded-sm h-full' />    </Link>        
        </CarouselItem>
        ) )}      
      </React.Fragment>
    ))}
  </CarouselContent>
  <CarouselPrevious className='bg-transparent h-full border-none rounded-sm hover:bg-transparent' />
  <CarouselNext className='bg-transparent h-full border-none rounded-sm hover:bg-transparent' />
</Carousel>

      </div> 
      <br />
      <br /> 

{/* next */}

<p className=' px-16 font-semibold py-3  text-xl'>Coming Next Week</p>
        <div className=' w-screen flex justify-center  '>
        <Carousel
  opts={{
    align: "start",
  }}
  className="w-11/12 h-32 "
>
  <CarouselContent>
    {Array.from({ length: 1 }).map((_, index) => (
     <React.Fragment key={index}>
     {thirdRow.map((row, rowIndex) =>(
         <CarouselItem className=" lg:basis-1/6  flex justify-center h-32">         
    <Link href="/user/moviePlayer">    <Image width={11200} height={96} src={row.imageLink} alt="" className='rounded-sm' />  </Link>          
     </CarouselItem>
     ) )}      
   </React.Fragment>
    ))}
  </CarouselContent>

</Carousel>

      </div>
      <br />
      <br />

{/* next */}
<p className=' px-16 font-semibold py-3  text-xl'>Anime</p>
        <div className=' w-screen flex justify-center  '>
        <Carousel
  opts={{
    align: "start",
  }}
  className="w-11/12 h-32 "
>
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
     <React.Fragment key={index}>
     {fourthRow.map((row, rowIndex) =>(
         <CarouselItem className=" lg:basis-1/6  flex justify-center h-32">         
   <Link href="/user/moviePlayer">     <Image width={11200} height={96} src={row.imageLink} alt="" className='rounded-sm' />  </Link>          
     </CarouselItem>
     ) )}      
   </React.Fragment>
    ))}
  </CarouselContent>
  <CarouselPrevious className='bg-transparent h-full border-none rounded-sm hover:bg-transparent' />
  <CarouselNext className='bg-transparent h-full border-none rounded-sm hover:bg-transparent' />
</Carousel>

      </div>
      <br />
      <br />

{/* next */}
<p className=' px-16 font-semibold py-3  text-xl'>Hollywood Movies</p>
        <div className=' w-screen flex justify-center  '>
        <Carousel
  opts={{
    align: "start",
  }}
  className="w-11/12 h-32 "
>
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
       <React.Fragment key={index}>
       {firstRow.map((row, rowIndex) =>(
           <CarouselItem className=" lg:basis-1/6  flex justify-center h-32">         
    <Link href="/user/moviePlayer">      <Image width={11200} height={96} src={row.imageLink} alt="" className='rounded-sm h-full' />  </Link>          
       </CarouselItem>
       ) )}      
     </React.Fragment>
    ))}
  </CarouselContent>
  <CarouselPrevious className='bg-transparent h-full border-none rounded-sm hover:bg-transparent' />
  <CarouselNext className='bg-transparent h-full border-none rounded-sm hover:bg-transparent' />
</Carousel>

      </div>
      <br />
      <br />

{/* next */}
<p className=' px-16 font-semibold py-3  text-xl'>Western Action Movies</p>
        <div className=' w-screen flex justify-center  '>
        <Carousel
  opts={{
    align: "start",
  }}
  className="w-11/12 h-32 "
>
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
       <React.Fragment key={index}>
       {secondRow.map((row, rowIndex) =>(
           <CarouselItem className=" lg:basis-1/6  flex justify-center h-32">         
   <Link href="/user/moviePlayer">       <Image width={11200} height={96} src={row.imageLink} alt="" className='rounded-sm h-full' />  </Link>          
       </CarouselItem>
       ) )}      
     </React.Fragment>
    ))}
  </CarouselContent>
  <CarouselPrevious className='bg-transparent h-full border-none rounded-sm hover:bg-transparent' />
  <CarouselNext className='bg-transparent h-full border-none rounded-sm hover:bg-transparent' />
</Carousel>

      </div>
      <br />
      <br />

{/* next */}
<p className=' px-16 font-semibold py-3  text-xl'>Thriller Movies</p>
        <div className=' w-screen flex justify-center  '>
        <Carousel
  opts={{
    align: "start",
  }}
  className="w-11/12 h-32 "
>
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
       <React.Fragment key={index}>
       {thirdRow.map((row, rowIndex) =>(
           <CarouselItem className=" lg:basis-1/6  flex justify-center h-32">         
   <Link href="/user/moviePlayer">      <Image width={11200} height={96} src={row.imageLink} alt="" className='rounded-sm' />    </Link>        
       </CarouselItem>
       ) )}      
     </React.Fragment>
    ))}
  </CarouselContent>
  <CarouselPrevious className='bg-transparent h-full border-none rounded-sm hover:bg-transparent' />
  <CarouselNext className='bg-transparent h-full border-none rounded-sm hover:bg-transparent' />
</Carousel>

      </div>
      <br />
      <br />

      {/* closing  */}
      </div>
      <div className=' w-screen bg-[#141414] text-[#808080] '>
        <div className='flex justify-center pt-20 px-64'>
          <div className='grid grid-cols-4  w-full gap-3 text-xs px-4'>
            <div className=' inline-flex text-white'>
            <Facebook className='mx-3'/>
            <Instagram className='mx-3'/>
            <Twitter className='mx-3' />
            <Youtube className='mx-3' />
            </div>
            <p></p>
            <p></p>
            <p></p>
            <p className='hover:underline'>Audio Description</p>
            <p className='hover:underline'>Help Center</p>
            <p className='hover:underline'>Gift Cards</p>
            <p className='hover:underline'>Media Center</p>
            <p className='hover:underline'>Investor Relations</p>
            <p className='hover:underline'>Jobs</p>
            <p className='hover:underline'>Terms of Use</p>
            <p className='hover:underline'>Privacy</p>
            <p className='hover:underline'>Legal Notices</p>
            <p className='hover:underline'>Cookie Preferences</p>
            <p className='hover:underline'>Corporate Information</p>
            <p className='hover:underline'>Contact Us</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <div className='border w-24 p-2 text-xs border-[#808080]'><p className='hover:text-white'>Service Code</p></div>
            <p></p>
            <p></p>
            <p></p>
            <p className='text-xs py-4'>© 1997-2024 Netflix, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
 