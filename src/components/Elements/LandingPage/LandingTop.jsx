import React from 'react'
import {BsEmojiSmile} from "react-icons/bs"
import {FcImageFile, FcVideoCall} from "react-icons/fc"
import LandingBottom from './LandingBottom'
function LandingTop() {
  return ( 
  <div className='flex flex-col gap-5'>
    <div className='flex flex-col bg-white gap-5 py-4 px-5 shadow-xl rounded-lg mt-4'>
      <div className='flex w-full justify-center '>
         <img className='w-[9%]' src="/logo.png" alt="" />
        <input className='outline-none py-2 px-4 bg-[#f0f2f5] placeholder-gray-700 rounded-full w-[90%]' type="text" placeholder="What's on your mind, Ans?" />
      </div>
      <hr />
      <div className='flex justify-center'>
        <div className='flex items-center gap-1 hover:bg-[#f0f2f5] hover:cursor-pointer py-1 px-5 rounded'>
          <FcVideoCall size={"30px"} />
          <span className='font-medium text-gray-600'>Live video</span>
        </div>
        <div className='flex items-center gap-1 hover:bg-[#f0f2f5] hover:cursor-pointer py-1 px-5 rounded'>
          <FcImageFile size={"28px"} />
          <span className='font-medium text-gray-600'>Photo/video</span>
        </div>
        <div className='flex items-center gap-1 hover:bg-[#f0f2f5] hover:cursor-pointer py-1 px-5 rounded'>
          <BsEmojiSmile size={"24px"} />
          <span className='font-medium text-gray-600'>Feeling/activity</span>
        </div>
      </div>    
    </div>   
  </div>
  )
}

export default LandingTop
