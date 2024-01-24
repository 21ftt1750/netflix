'use client' 

import { useEffect, useState } from 'react';
import logo from '../../../public/images/Logonetflix.png';
import Image from 'next/image';
import kids from '../../../public/images/kids2.png'
import sonicName from '../../../public/images/sonicName.webp';

import sonic from '../../../public/images/sonic.webp'

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
     <Image src={sonic} alt="peaky blinders" className="z-0 w-full h-full brightness-75" />
         
     <div className='absolute top-0 left-0 w-1/2 h-screen  py-32 px-14 text-white'>
        <div className=' flex self-center'>
          <Image src={sonicName} alt='moviename' className='h-56 w-10/12'></Image>
          </div>
          
          <p className='text-2xl font-semibold py-2'>Watch Season 3 Now</p>
          
        <p className=' w-11/12 leading-6  text-lg pt-2'>When an explosive battle with Dr. Eggman shatters the universe,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sonic races through parallel dimensions to reconnect with his &nbsp;&nbsp;&nbsp;&nbsp; friends and save the world.</p>
       <br />
        <div className=' flex items-center'>
            
            <Link href='/user/kids/moviePlayer2' className=' w-32 h-12  bg-[#ffffff] rounded-sm hover:bg-[#c8c4c4] flex items-center' ><p className='text-black flex items-center px-6 font-bold'><Play className='size-8' />&nbsp;Play</p></Link>
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
            <p className='justify-start flex items-end hover:text-[#b3b3b3] px-3'>Home</p>
            <p className='justify-start flex items-end hover:text-[#b3b3b3] pr-2'>Characters</p>
            <p className='justify-start flex items-end hover:text-[#b3b3b3] w-20 '>TV Shows</p>
            <p className='justify-start flex items-end hover:text-[#b3b3b3] px-1'>Movies</p>
            <p className='justify-start flex items-end hover:text-[#b3b3b3] px-4'>Latest</p>
            <p className='justify-start flex items-end hover:text-[#b3b3b3] px-1'>My List</p>
            <p className='justify-start flex items-end hover:text-[#b3b3b3] px-3'>Browse by Languages</p>
          </div>
         
        </div>
        <div className='inline-flex  w-5/12 justify-end text-white '>
            <div className='inline-flex h-full '>
        <Search/>
     <Image alt='kids' src={kids} className='size-8 rounded-sm mx-4'></Image>
     <Link href="/user" className=' bg-red-600 w-24 rounded-sm justify-center h-8 text-sm flex items-center'>Exit Kids</Link>
       
        </div>
        </div>
      </div>
      <div className='  w-screen  bg-[#141414] text-white '>
     
        <div className="absolute top-3/4 w-full py-24">
        <p className=' px-16 font-semibold py-3  text-xl'>Top Picks for you</p>
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
                    <Image width={11200} height={96} src={row.imageLink} alt="" className='rounded-sm' />
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
      <br />
      <br />
      <br />
      <br />
      <br />

{/* next */}


<p className=' px-16 font-semibold py-3  text-xl'>Popular on Netflix</p>
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
            <Image width={11200} height={96} src={row.imageLink} alt="" className='rounded-sm' />          
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

<p className=' px-16 font-semibold py-3  text-xl'>My List</p>
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
         <Image width={11200} height={96} src={row.imageLink} alt="" className='rounded-sm' />          
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
         <Image width={11200} height={96} src={row.imageLink} alt="" className='rounded-sm' />          
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
           <Image width={11200} height={96} src={row.imageLink} alt="" className='rounded-sm' />          
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
           <Image width={11200} height={96} src={row.imageLink} alt="" className='rounded-sm' />          
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
           <Image width={11200} height={96} src={row.imageLink} alt="" className='rounded-sm' />          
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
 