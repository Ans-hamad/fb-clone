import React from 'react'
import LeftSideLogin from '../Form/LeftSideLogin'
import RightSideLogin from '../Form/RightSideLogin'

function LoginPage() {
  return (
<div className='bg-[#f0f2f5] flex h-screen items-center'>
<div className='grid grid-cols-2 items-center px-60 gap-9'>
      <LeftSideLogin/>
      <div className='flex flex-col gap-4'>
      <RightSideLogin/>
      <div className='flex justify-center'><span><span className='font-bold cursor-pointer hover:underline'>Create a Page</span> for a celebrity, brand or business.</span></div>
      </div>
    </div>
</div>
  )
}

export default LoginPage
