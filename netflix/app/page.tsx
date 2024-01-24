'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import neflixBgSignin from '../public/images/netflix-bg-signin3.jpg'
import logo from '../public/images/Logonetflix.png'
import tv from '../public/images/tv.png'
import st from'../public/images/mobile-0819.jpg'
import kids from'../public/images/kids.png'
import { ChevronRight, Languages, Plus } from 'lucide-react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Link from 'next/link';




const register = () => {

  const [visible, setVisible] = useState(false)
  return (
    <div className=' h-screen '>
            <Image src={neflixBgSignin} alt='bg' className='absolute brightness-50  border-b-8 border-[#242424] max-w-screen-2xl  shadow-inner shadow-black '></Image>
            <div className=' w-screen  flex justify-center shadow-inner'>
            <div className='relative w-10/12   px-10 py-4 grid grid-cols-2'>
            <Image src={logo} alt="logo" className=' relative h-12 w-40 '></Image>
            <span className='flex justify-end  px-5 py-2'>
            <button className='bg-[#e80c14] w-20 text-white text-sm  rounded-lg h-9 hover:bg-[#c8141c]'><a href="/login">sign in</a></button>
            </span>          
            </div>
            </div>


            <div className='   w-screen h-5/6 text-white'>
              <br />
              <div className='  w-screen h-full flex justify-center'>
                <div className='relative  grid self-center'>
              <p className='text-5xl font-extrabold'>Unlimited movies, TV shows, and more</p>
              <br />

              <div className=' flex justify-center text-xl'>
              <p>Watch anywhere. Cancel anytime.</p>
              </div>
              <br />
              <div className=' flex justify-center text-lg'>
              <p>Ready to watch? Enter your email to create or restart your membership.</p>
              </div>
<br />
<div className=' flex justify-center '>
  <input type="text" className='bg-black bg-opacity-50 border-2 h-14 rounded-sm w-2/5 p-2' placeholder='Email address'/>
  <Link href="/register" className='bg-[#e80c14] hover:bg-[#c8141c] mx-2 h-14 w-48 text-xl font-semibold rounded-sm flex justify-center items-center'>Get Started <ChevronRight /></Link>
</div>
              </div>
              </div>
            </div>

 
      <div className='bg-black w-screen h-5/6 border-b-8 border-[#242424] flex justify-center'> 
      <div className=' grid grid-cols-2  text-white h-screen self-center w-screen '>
        <div className='flex justify-center '>
      <span className=' grid self-center '><p className='text-5xl font-extrabold flex justify-center'>Enjoy on your TV</p>
      <br />
      <div className='grid grid-cols-4 '>
     <p className=''></p>
      <p className='col-span-3 text-xl font-semibold  '>Watch on Smart TVs, Playstation, Xbox, Chromecast,&nbsp; Apple TV, Blu-ray players, and more.</p>
    
     
      </div>
      </span>
   
     
      </div>
      
      <Image className=' grid self-center w-4/6 h-3/5'  src={tv} alt='tv'/>
      
      </div>
        
      </div>

      {/* ------------------- */}

      <div className='bg-black w-screen h-5/6 border-b-8 border-[#242424] flex justify-center'> 
      <div className=' grid grid-cols-2  text-white h-screen self-center w-screen '>
<div className=' flex justify-end'>
      
      <Image className=' grid self-center w-5/6 h-5/7' src={st} alt='phone'/>
      </div>
 
      <span className=' grid self-center  w-5/6'><p className='text-5xl font-extrabold flex justify-center'>Download your shows to watch offline</p>
      <br />
  
    
      <p className='text-2xl font-semibold w-3/4  '>Save your favorites easily and always have something to watch.</p>
    
      </span>
   
    
      
      </div>
        
      </div>

          {/* ------------------- */}


          <div className='bg-black w-screen h-96 border-b-8 border-[#242424] flex justify-center'> 
      <div className=' grid grid-cols-2  text-white h-screen self-center w-screen '>
      
      <span className=' grid self-center  w-96 px-80'>
        <p></p><p className='text-5xl font-extrabold '>Watch everywhere</p>
      <br />
<br />
      <p className=' text-2xl font-semibold w-96'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
 
      </span>
   
     
      
      
      </div>
        
      </div>


       {/* ------------------- */}

       <div className='bg-black w-screen h-5/6 border-b-8 border-[#242424] flex justify-center'> 
      <div className=' grid grid-cols-2  text-white h-screen self-center w-screen '>
<div className=' flex justify-end'>
      
      <Image className=' grid self-center w-5/6 h-5/7' src={kids} alt='phone'/>
      </div>
 
      <span className=' grid self-center  w-5/6'><p className='text-5xl font-extrabold'>Create profiles for kids</p>
      <br />
  
    
      <p className='text-2xl font-semibold  '>Send kids on adventures with their favorite &nbsp; characters in a space made just for them—free with your membership.</p>
    
      </span>
   
    
      
      </div>
        
      </div>

      
       {/* ------------------- */}

       <div className='bg-black w-screen   border-b-8 border-[#242424] text-white'>
       <br />
        <div className='w-screen py-10 flex justify-center  '>
        
        <p className='text-5xl font-extrabold grid '>Frequently Asked Questions</p>
        </div>
<div className='w-screen flex justify-center'>
        <div className='  w-3/4'>


        <Collapsible className='my-2'>
    <CollapsibleTrigger className='w-full  bg-[#2c2c2c] hover:bg-[#444444] h-20 my-0.5 grid grid-cols-2'><p className='p-6 flex justify-start  text-2xl'>What is Netflix?</p><div className=' flex  justify-end  h-full '><p className='grid self-center px-4'><Plus size={48} strokeWidth={1} /></p></div>
    </CollapsibleTrigger>
    
  <CollapsibleContent className='bg-[#2c2c2c] text-2xl p-6'>
  <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
<br /><p>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
  </CollapsibleContent>
</Collapsible>

         <Collapsible className='my-2'>
    <CollapsibleTrigger className='w-full  bg-[#2c2c2c] hover:bg-[#444444] h-20 my-0.5 grid grid-cols-2'><p className='p-6 flex justify-start  text-2xl'>How much does Netflix cost?</p><div className=' flex  justify-end  h-full '><p className='grid self-center px-4'><Plus size={48} strokeWidth={1} /></p></div>
    </CollapsibleTrigger>
    
  <CollapsibleContent className='bg-[#2c2c2c] text-2xl p-6'>
  <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 4.99 to USD 13.99 a month. No extra costs, no contracts.</p>
 </CollapsibleContent>
</Collapsible>

<Collapsible className='my-2'>
    <CollapsibleTrigger className='w-full  bg-[#2c2c2c] hover:bg-[#444444] h-20 my-0.5 grid grid-cols-2'><p className='p-6 flex justify-start  text-2xl'>Where can I watch?</p><div className=' flex  justify-end  h-full '><p className='grid self-center px-4'><Plus size={48} strokeWidth={1} /></p></div>
    </CollapsibleTrigger>
    
  <CollapsibleContent className='bg-[#2c2c2c] text-2xl p-6'>
  <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
<br /><p>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
  </CollapsibleContent>
</Collapsible>

<Collapsible className='my-2'>
    <CollapsibleTrigger className='w-full  bg-[#2c2c2c]  hover:bg-[#444444] h-20 my-0.5 grid grid-cols-2'><p className='p-6 flex justify-start  text-2xl'>How do I cancel?</p><div className=' flex  justify-end  h-full '><p className='grid self-center px-4'><Plus size={48} strokeWidth={1} /></p></div>
    </CollapsibleTrigger>
    
  <CollapsibleContent className='bg-[#2c2c2c] text-2xl p-6'>
  <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
</CollapsibleContent>
</Collapsible>

<Collapsible className='my-2'>
    <CollapsibleTrigger className='w-full  bg-[#2c2c2c] hover:bg-[#444444] h-20 my-0.5 grid grid-cols-2'><p className='p-6 flex justify-start  text-2xl'>What can I watch on Netflix?</p><div className=' flex  justify-end  h-full '><p className='grid self-center px-4'><Plus size={48} strokeWidth={1} /></p></div>
    </CollapsibleTrigger>
    
  <CollapsibleContent className='bg-[#2c2c2c] text-2xl p-6'>
  <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
 </CollapsibleContent>
</Collapsible>

<Collapsible className='my-2'>
    <CollapsibleTrigger className='w-full  bg-[#2c2c2c] hover:bg-[#444444] h-20 my-0.5 grid grid-cols-2'><p className='p-6 flex justify-start  text-2xl'>Is Netflix good for kids?</p><div className=' flex  justify-end  h-full '><p className='grid self-center px-4'><Plus size={48} strokeWidth={1} /></p></div>
    </CollapsibleTrigger>
    
  <CollapsibleContent className='bg-[#2c2c2c] text-2xl p-6'>
  <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</p>
<br /><p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you dont want kids to see.</p>
  </CollapsibleContent>
</Collapsible>

    </div>
      <br />
      </div>
      <br />
      <div className=' flex justify-center text-lg'>
              <p>Ready to watch? Enter your email to create or restart your membership.</p>
              </div>
<br />
<div className=' flex justify-center '>
  <input type="text" className='bg-[#0c0c0c]  border-2 border-gray-500 h-14 rounded-sm w-96 p-2 ' placeholder='Email address'/>
  <button className='bg-[#e80c14] hover:bg-[#c8141c] mx-2 h-14 w-48 text-xl font-semibold rounded-sm flex justify-center items-center'>Get Started <ChevronRight /></button>
</div>
      <br />
      <br />
      <br />
    </div>



{/* ------------ */}




      <div className='bg-black w-screen  border-b-8 border-[#242424] px-40 py-14 text-[#b3b3b3]'>
        <div className='w-full  grid grid-cols-4 gap-4 text-sm  font-small'>
          <p className=' underline'>Questions? Contact us.</p>
          <p className=' underline'></p>
          <p className=' underline'></p>
          <p className=' underline'></p>
          <p className=' underline'>FAQ</p>
          <p className=' underline'>Help Center</p>
          <p className=' underline'>Account</p>
          <p className=' underline'>Media Center</p>
          <p className=' underline'>Investor Relations</p>
          <p className=' underline'>Jobs</p>
          <p className=' underline'>Ways to Watch</p>
          <p className=' underline'>Terms of Use</p>
          <p className=' underline'>Privacy</p>
          <p className=' underline'>Cookie Preferences</p>
          <p className=' underline'>Corporate Information</p>
          <p className=' underline'>Contact Us</p>
          <p className=' underline'>Speed Test</p>
          <p className=' underline'>Legal Notices</p>
          <p className=' underline'>Only on Netflix</p>
          <p className=' underline'></p>
          <button className='border w-32 rounded-sm h-8 flex items-center px-4 text-white'>
            <Languages className=" " size={20} strokeWidth={1} />&nbsp;English </button>
           <p></p>
           <p></p>
           <p></p>
           <p>Netflix Brunei</p>
        </div>
      </div>

    </div>
  )
}

export default register