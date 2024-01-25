'use client'
import { ArrowLeft, Flag, GaugeCircle, Layers, Maximize, Pause, SkipForward, Subtitles, Volume2 } from 'lucide-react';
import React from 'react';
import ReactPlayer from 'react-player';
import forward from '../../../public/images/forward.png'
import back from '../../../public/images/back.png'
import Image from 'next/image';

const MoviePlayer = () => {
  const handleBackButtonClick = () => {
    window.history.back();
    console.log('Back button clicked');
  };

  

  return (
    <div className='h-screen w-screen relative bg-black'>
  <button className='bg-transparent relative top-4 left-2 bg-gray-800 text-white px-4 py-2 rounded'>
  <ArrowLeft className='size-12' />
</button>


  <button className='bg-transparent absolute top-5 right-4 bg-gray-800 text-white px-4 py-2 rounded'>
  <Flag className='size-10' />
</button>

  <div className='flex w-full absolute bottom-28 z-10 px-7'>
      <div className='bg-red-600 w-1/5 h-1 relative '>
</div>
<div className='bg-[#808080] w-4/5 h-1 relative '></div>
</div>

<div className='flex w-full absolute bottom-7 z-10 text-white px-4 items-center'>
<Pause className='relative size-14' />
<Image src={back} alt='back' className='size-14 ml-6'></Image>
<Image src={forward} alt='forward' className='h-12 w-14 ml-4 mr-2'></Image>
<div className=' bg-transparent h-12 w-24  flex justify-center items-center'><Volume2 strokeWidth={2} className='size-12'/></div>
<div className='flex justify-center w-10/12 '>
<p className='font-bold text-lg'>Peaky Blinders</p>
<p className='px-3 text-lg'>E1</p>
<p className='text-lg'>Episode 1</p>
</div>
<div className='flex w-4/12 items-center    '>
<SkipForward strokeWidth={1.5} className='size-10 mr-6'/>
<Layers className='size-10 mr-10    ' />
<Subtitles strokeWidth={1.5} className='size-10 mr-6' />
<GaugeCircle strokeWidth={1.5} className='size-10 mr-6' />
<Maximize className='size-10 ' />
</div>
</div>
      <ReactPlayer
    url="/images/thomas.mp4"
    playing={true}
    controls={false}
    muted={true}  
    loop={true}
    width="100%"
    height="100%"
    style={{ position: 'absolute', top: 0, left: 0 }}
    fullscreen={true} 
    className="z-0"
/>

    </div>
  );
};

export default MoviePlayer;
