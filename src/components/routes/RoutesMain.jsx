import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from '../Pages/Profile'
import Friends from '../Pages/Friends'
import Feeds from '../Pages/Feeds'
import Saved from '../Pages/Saved'
import Memories from '../Pages/Memories'
import Groups from '../Pages/Groups'
import Video from '../Pages/Video'
import Marketplace from '../Pages/Marketplace'
import Events from '../Pages/Events'
import AdsManager from '../Pages/AdsManager'
import AdCenter from '../Pages/AdCenter'
import BloodDonations from '../Pages/BloodDonations'
import ClimateCenter from '../Pages/ClimateCenter'
import Fundraiser from '../Pages/Fundraiser'
import Messenger from '../Pages/Messenger'
import GammingVideo from '../Pages/GammingVideo'
import SideBar from '../Elements/SideBar/SideBar'
import Header from '../Head/Header'
import LandingMain from '../Elements/LandingPage/LandingMain'



function RoutesMain() {
  return (
    <>
    <Header/>
    <div className='grid grid-cols-4 gap-20 bg-[#f0f2f5]'>
    <div className='col-span-1 '>
    <SideBar/>
    </div>
    <div className='col-span-2'>
    <Routes>
    <Route path='Home' element={<LandingMain/>}></Route>
    <Route path='Profile' element={<Profile/>}></Route>
    <Route path='Friends' element={<Friends/>}></Route>
    <Route path='Feeds' element={<Feeds/>}></Route>
    <Route path='Memories' element={<Memories/>}></Route>
    <Route path='Saved' element={<Saved/>}></Route>
    <Route path='Groups' element={<Groups/>}></Route>
    <Route path='Video' element={<Video/>}></Route>
    <Route path='Marketplace' element={<Marketplace/>}></Route>
    <Route path='Events' element={<Events/>}></Route>
    <Route path='AdsManager' element={<AdsManager/>}></Route>
    <Route path='AdCenter' element={<AdCenter/>}></Route>
    <Route path='BloodDonations' element={<BloodDonations/>}></Route>
    <Route path='ClimateCenter' element={<ClimateCenter/>}></Route>
    <Route path='Fundraiser' element={<Fundraiser/>}></Route>
    <Route path='GammingVideo' element={<GammingVideo/>}></Route>
    <Route path='Messenger' element={<Messenger/>}></Route>  
    </Routes>
    </div>
    </div>
    </>
  )
}

export default RoutesMain
