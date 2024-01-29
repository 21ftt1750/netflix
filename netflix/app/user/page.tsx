'use client' 

import { Fragment, useEffect, useState } from 'react';
import logo from '../../public/images/Logonetflix.png';
import Image from 'next/image';
import user from '../../public/images/profile.jpg'
import mName from '../../public/images/mName.webp';
import forgotten from '../../public/images/forgotten.jpg'
import pb from '../../public/images/pb.jpg'
import classNames from 'classnames';
import { Menu, Transition } from '@headlessui/react'
import kids2 from '../../public/images/kids2.png'
import pb2 from '../../public/images/pb2.jpg'
import pb3 from '../../public/images/pb3.jpg'
import pb4 from '../../public/images/pb4.jpg'
import pb5 from '../../public/images/pb5.jpg'
import pb6 from '../../public/images/pb6.jpg'
import Link from 'next/link';



import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import { Bell, ChevronDownIcon, Facebook, FolderSync, HelpCircle, Info, Instagram, Pencil, Play, PlusCircle, Search, Subtitles, ThumbsUp, Twitter, UserRound, Volume2, Youtube } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import React from 'react';

import ReactPlayer from 'react-player';
  
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

  interface DropdownMenuLabelProps {
    children: string;
  }
  

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
     <Image src={pb} alt="peaky blinders" className="z-0 w-full h-full brightness-50" />
         
     <div className='absolute top-0 left-0 w-1/2 h-screen  py-40 px-14 text-white'>
        <div className=' flex self-center'>
          <Image src={mName} alt='moviename' className='h-56 w-10/12'></Image>
          </div>
          <br />
          
        <p className=' w-11/12 leading-6 text-lg'>A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; matter  the cost</p>
       <br />
        <div className=' flex items-center'>
            
            <Link href='/user/moviePlayer' className=' w-32 h-12  bg-[#ffffff] rounded-sm hover:bg-[#c8c4c4] flex items-center' ><p className='text-black flex items-center px-6 font-bold'><Play className='size-8' />&nbsp;Play</p></Link>
           
  <Dialog >
  <DialogTrigger>
    <button className='w-44 h-12 mx-3 bg-[#525454] rounded-sm hover:bg-[#363a3c]'>
      <p className='flex items-center px-6 text-lg font-semibold'>
        <Info className='size-8' />&nbsp;&nbsp;More Info
      </p>
    </button>
  </DialogTrigger>
  <DialogContent className='bg-[#181818]'>
    <DialogHeader>
    <DialogTitle>
  <div className='relative'>
    <div className='absolute top-0 left-0 py-56 px-12 text-white'>
      <div className='flex self-center'>
        <Image src={mName} alt='moviename' className='h-1/2 w-1/2' />
      </div>
      <div className='flex mt-4 items-center'>
        <Link href='/user/moviePlayer' className='w-32 h-10 bg-[#ffffff] rounded-sm hover:bg-[#c8c4c4] flex items-center'>
          <p className='text-black flex items-center px-6 font-bold'><Play className='size-8' />&nbsp;Play</p>
        </Link>
        <PlusCircle size={45} strokeWidth={0.5} className='mx-1' />
        <div className='rounded-full border size-10 flex justify-center items-center'>
          <ThumbsUp size={20} />
        </div>
      </div>
      <div className='absolute bottom-56 right-0 rounded-full size-10 flex justify-center items-center border-[#929492] text-[#929492] border'><Volume2 /></div>
    </div>
    <ReactPlayer 
      url="/images/thomas.mp4"
      playing={true}
      controls={false}
      muted={true}  
      loop={true}
      width="100%"
      height="100%"
      className="z-0"
    />
  </div>
</DialogTitle>

      <DialogDescription className='bg-[#181818] px-11'>
        <div className='flex text-white mt-2 w-full h-full mb-16'>
<div className='w-2/3  text-lg'>
  <div className='flex items-center'>
    <p className='text-[#46d168]'>97% Match</p>
    <p className='px-3 text-[#b0b0b0]'>2022</p>
    <p className='text-[#b0b0b0]'>6 Seasons</p>
    <Subtitles className='mx-3 text-[#b0b0b0]' size={20}/>
  </div>
  <div className='flex'>
    <p className='border w-10 text-sm flex justify-center border-[#747474]'>18+</p>
    <p className='text-sm mx-2'>Violence, Language, Substances</p>
  </div>
  <p className='my-6 font-bold '>S1:E1 "Episode 1"</p>
  <p className=' text-base'>Ambitious gang leader Thomas Shelby recognizes an opportunity &nbsp; &nbsp; to move up in the world thanks to a missing crate of guns.</p>
</div> 
<div className='w-1/3 '>
<p><Link className='text-[#6c6c6c]' href="">Cast:</Link> Cilian Murphy, Sam Neill, Helen McCrory, more</p>
<p className='my-3'><Link className='text-[#6c6c6c]' href="">Genre:</Link> Tv Dramas, British, Period Pieces</p>
<p><Link className='text-[#6c6c6c]' href="">This show is:</Link> Violent</p>
</div>
</div>
<div className='text-white w-full  flex items-center'>

  <p className='text-xl  font-bold '>Episodes</p>
  <div className=' w-full justify-end flex items center'>
  <Menu as="div" className="relative inline-block text-left border-2 font-bold rounded-sm border-[#4d4d4d] bg-[#242424] h-10  w-40">
      <div>
        <Menu.Button className="flex items-center text-lg ml-5 w-full justify-start  h-10 bg-none ">
  <p>Season 1</p>   
          <ChevronDownIcon className="-mr-1 ml-6 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 border-2 border-[#4d4d4d] z-10  w-52 origin-top-right bg-[#242424] overflow-y-auto max-h-56 hide-scrollbar shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          <Menu.Item>
  {({ active }) => (
    <Link
      href=""
      className={classNames(
        active ? ' ' : 'text-white',
        ' px-2 py-2 text-sm flex items-center' 
      )}
    >
    <p className='text-lg mr-3'>Season 2</p>
      (6 Episodes)
    </Link>
  )}
</Menu.Item>
<Menu.Item>
  {({ active }) => (
    <Link
      href=""
      className={classNames(
        active ? ' ' : 'text-white',
        ' px-2 py-2 text-sm flex items-center' 
      )}
    >
    <p className='text-lg mr-3'>Season 3</p>
      (6 Episodes)
    </Link>
  )}
</Menu.Item>
<Menu.Item>
  {({ active }) => (
    <Link
      href=""
      className={classNames(
        active ? ' ' : 'text-white',
        ' px-2 py-2 text-sm flex items-center' 
      )}
    >
    <p className='text-lg mr-3'>Season 4</p>
      (6 Episodes)
    </Link>
  )}
</Menu.Item>
<Menu.Item>
  {({ active }) => (
    <Link
      href=""
      className={classNames(
        active ? ' ' : 'text-white',
        ' px-2 py-2 text-sm flex items-center' 
      )}
    >
    <p className='text-lg mr-3'>Season 5</p>
      (6 Episodes)
    </Link>
  )}
</Menu.Item>
<Menu.Item>
  {({ active }) => (
    <Link
      href=""
      className={classNames(
        active ? ' ' : 'text-white',
        ' px-2 py-2 text-sm flex items-center' 
      )}
    >
    <p className='text-lg mr-3'>Season 6</p>
      (6 Episodes)
    </Link>
  )}
</Menu.Item>

<Menu.Item>
  {({ active }) => (
    <>
      <p className='text-[#4a4946] flex justify-center'>__________________________</p>
      <Link
        href="#"
        className={classNames(
          active ? 'underline' : 'text-white',
          'px-4 py-2 text-lg flex items-center '
        )}
      >
        
      See All Episodes
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
<div className='w-full text-white flex items-center my-2'>
<p className='font bold'>Season 1:</p> <p className='border w-9 mx-2 flex justify-center text-xs items-center'>18+</p> <p className='text-xs'>violence, language, substances</p>
</div>
<div className='flex-col w-full  justify-center'>
  <div className='h-32  border-b rounded-sm flex items-center px-8  text-white  border-[#4d4d4d] bg-[#333333]'><p className='font-semibold text-xl mr-4'>1</p><Image className='rounded-sm' src={pb} height={130} width={130} alt="thomas"></Image><div className=' ml-4 h-16 w-full '><div className='flex w-full font-bold '><p className='w-28'>Episode 1</p><p className='w-full justify-end flex mr-10'>57m</p></div>
  <p className='text-[#d2d2d2] mt-2'>Ambitious gang leader Thomas Shelby recognizes an opportunity to move &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  up in the world thanks to a missing crate of guns.</p></div></div>
  <div className='h-32  border-b rounded-sm flex items-center px-8  text-white  border-[#4d4d4d]'><p className='font-semibold text-xl mr-4'>2</p><Image className='rounded-sm' src={pb2} height={130} width={130} alt="thomas"></Image><div className=' ml-4 h-16 w-full '><div className='flex w-full font-bold '><p className='w-28'>Episode 2</p><p className='w-full justify-end flex mr-10'>57m</p></div>
  <p className='text-[#d2d2d2] mt-2'>Ambitious gang leader Thomas Shelby recognizes an opportunity to move &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  up in the world thanks to a missing crate of guns.</p></div></div>
  <div className='h-32  border-b rounded-sm flex items-center px-8  text-white  border-[#4d4d4d]'><p className='font-semibold text-xl mr-4'>3</p><Image className='rounded-sm' src={pb3} height={130} width={130} alt="thomas"></Image><div className=' ml-4 h-16 w-full '><div className='flex w-full font-bold '><p className='w-28'>Episode 3</p><p className='w-full justify-end flex mr-10'>55m</p></div>
  <p className='text-[#d2d2d2] mt-2'>Ambitious gang leader Thomas Shelby recognizes an opportunity to move &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  up in the world thanks to a missing crate of guns.</p></div></div>
  <div className='h-32  border-b rounded-sm flex items-center px-8  text-white  border-[#4d4d4d]'><p className='font-semibold text-xl mr-4'>4</p><Image className='rounded-sm' src={pb4} height={130} width={130} alt="thomas"></Image><div className=' ml-4 h-16 w-full '><div className='flex w-full font-bold '><p className='w-28'>Episode 4</p><p className='w-full justify-end flex mr-10'>58m</p></div>
  <p className='text-[#d2d2d2] mt-2'>Ambitious gang leader Thomas Shelby recognizes an opportunity to move &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  up in the world thanks to a missing crate of guns.</p></div></div>
  <div className='h-32  border-b rounded-sm flex items-center px-8  text-white  border-[#4d4d4d]'><p className='font-semibold text-xl mr-4'>5</p><Image className='rounded-sm' src={pb5} height={130} width={130} alt="thomas"></Image><div className=' ml-4 h-16 w-full '><div className='flex w-full font-bold '><p className='w-28'>Episode 5</p><p className='w-full justify-end flex mr-10'>56m</p></div>
  <p className='text-[#d2d2d2] mt-2'>Ambitious gang leader Thomas Shelby recognizes an opportunity to move &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  up in the world thanks to a missing crate of guns.</p></div></div>
  <div className='h-32  border-b rounded-sm flex items-center px-8  text-white  border-[#4d4d4d]'><p className='font-semibold text-xl mr-4'>6</p><Image className='rounded-sm' src={pb6} height={130} width={130} alt="thomas"></Image><div className=' ml-4 h-16 w-full '><div className='flex w-full font-bold '><p className='w-28'>Episode 6</p><p className='w-full justify-end flex mr-10'>54m</p></div>
  <p className='text-[#d2d2d2] mt-2'>Ambitious gang leader Thomas Shelby recognizes an opportunity to move &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  up in the world thanks to a missing crate of guns.</p></div></div>
</div>
</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
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
            <Link href='/user'className='justify-start flex items-end hover:text-[#b3b3b3] px-4'>Home</Link>
            <Link href='/user/tvShows' className='justify-start flex items-end hover:text-[#b3b3b3] w-20 '>TV Shows</Link>
            <Link href='/user/movies' className='justify-start flex items-end hover:text-[#b3b3b3] px-1'>Movies</Link>
            <Link href='/user/latest' className='justify-start flex items-end hover:text-[#b3b3b3] px-4'>Latest</Link>
            <Link href='/user/myList' className='justify-start flex items-end hover:text-[#b3b3b3] px-1'>My List</Link>
            <Link href='/user/bbl' className='justify-start flex items-end hover:text-[#b3b3b3] px-3'>Browse by Languages</Link>
          </div>
         
        </div>
        <div className='inline-flex  w-1/2 justify-end text-white '>
            <div className='inline-flex px-12 h-full '>
        <Search/>
        <Link href='user/kids' className='px-5 text-sm flex items-center h-6'>Kids</Link>
        <span className='flex items-start '>
        <Bell  />
        </span>
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full ml-4 justify-center gap-x-1.5 bg-none border-none">
        <Image src={user} alt='user' className='size-7 rounded-sm shadow-2xl z-10'></Image>    
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

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
      href="#"
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
      href="#"
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
      href="#"
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
        href="#"
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
 