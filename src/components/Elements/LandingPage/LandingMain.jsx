import React from 'react'
import LandingTop from './LandingTop'
import LandingBottom from './LandingBottom'

function LandingMain() {
  return (
    <div className='flex flex-col gap-5'>
        <LandingTop/>
        <LandingBottom/>
    </div>
  )
}

export default LandingMain
