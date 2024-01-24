

'use client'
import { ArrowLeft, Flag } from 'lucide-react';
import React from 'react';
import ReactPlayer from 'react-player';

const MoviePlayer = () => {
  const handleBackButtonClick = () => {

    window.history.back();
  };

  return (
    <div className='h-screen w-screen relative'>
      <button
        className='bg-transparent absolute top-12 left-4 bg-gray-800 text-white px-4 py-2 rounded'
        onClick={handleBackButtonClick}
      >
        <ArrowLeft className='size-12' />
      </button>
     
      <button
        className='bg-transparent absolute top-12 right-4 bg-gray-800 text-white px-4 py-2 rounded'
        onClick={handleBackButtonClick}
      >
        <Flag className='size-12'/>
      </button>

      <ReactPlayer
        url="https://www.youtube.com/embed/Nsw5WFMltf4?si=Bj45KdSa2uWeNQUl"
        playing={true}   
        controls={true}
        loop={true}  
        width="100%"
        height="100%"
        
      />
    </div>
  );
};

export default MoviePlayer;
