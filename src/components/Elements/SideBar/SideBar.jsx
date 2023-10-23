import React from 'react'
import { FcBarChart, FcBookmark, FcAdvertising, FcCalendar, FcClock, FcStart, FcNews, FcDepartment, FcFilledFilter, FcGlobe, FcLike, FcReddit } from "react-icons/fc"
import { HiUsers } from "react-icons/hi"
import { PiUsersThreeFill } from "react-icons/pi"
import { BsMessenger } from "react-icons/bs"
import { useQuery } from '@tanstack/react-query'
import { fetchProfiles } from '../../../api/profiles'
import { Link } from 'react-router-dom'



function SideBar() {
    const { data } = useQuery({
        queryKey: ["profiles"],
        queryFn: fetchProfiles
    })

    return (

        <div className='h-screen flex flex-col gap-1 hover:overflow-auto  bg-[#f0f2f5] pl-4 pt-2'>
            {data &&
                data.map((profile) => (
                    <Link to='/Profile'>
                        <div className='flex gap-3 py-2 px-2 hover:cursor-pointer hover:bg-gray-200 rounded' key={profile.id}>
                            <img className='w-6 rounded-full' src={profile.logo} alt='' />
                            <span className='font-semibold'>{profile.name}</span>
                        </div>
                    </Link>
                ))}
            <Link to='/Friends'>
                <div className='flex gap-3 py-2 px-2 hover:cursor-pointer hover:bg-gray-200 rounded'>
                    <HiUsers size={"24px"} />
                    <span className='font-semibold'>Friends</span>
                </div>
            </Link>
            <Link to='/Feeds'>
                <div className='flex gap-3  py-2 px-2 hover:cursor-pointer hover:bg-gray-200 rounded'>
                    <FcNews size={"24px"} />
                    <span className='font-semibold'>Feeds</span>
                </div>
            </Link>
            <Link to='/Memories'>
                <div className='flex gap-3  py-2 px-2 hover:cursor-pointer hover:bg-gray-200 rounded'>
                    <FcClock size={"24px"} />
                    <span className='font-semibold'>Memories</span>
                </div>
            </Link>
            <Link to='/Saved'>
                <div className='flex gap-3  py-2 px-2 hover:cursor-pointer hover:bg-gray-200 rounded'>
                    <FcBookmark size={"24px"} />
                    <span className='font-semibold'>Saved</span>
                </div>
            </Link>
            <Link to='/Groups'>
                <div className='flex gap-3  py-2 px-2 hover:cursor-pointer hover:bg-gray-200 rounded'>
                    <PiUsersThreeFill size={"24px"} />
                    <span className='font-semibold'>Groups</span>
                </div>
            </Link>
            <Link to='/Video'>
                <div className='flex gap-3  py-2 px-2 hover:cursor-pointer hover:bg-gray-200 rounded'>
                    <FcStart size={"24px"} />
                    <span className='font-semibold'>video</span>
                </div>
            </Link>
            <Link to='/MarketPlace'>
                <div className='flex gap-3  py-2 px-2 hover:cursor-pointer hover:bg-gray-200 rounded'>
                    <FcDepartment size={"24px"} />
                    <span className='font-semibold'>Marketplace</span>
                </div>
            </Link>
            <Link to='/Events'>
                <div className='flex gap-3  py-2 px-2 hover:cursor-pointer hover:bg-gray-200 rounded'>
                    <FcCalendar size={"24px"} />
                    <span className='font-semibold'>Events</span>
                </div>
            </Link>
            <Link to='/AdsManager'>
                <div className='flex gap-3  py-2 px-2 hover:cursor-pointer hover:bg-gray-200 rounded'>
                    <FcBarChart size={"24px"} />
                    <span className='font-semibold'>Ads Manager</span>
                </div>
            </Link>
            <Link to='/AdCenter'>
                <div className='flex gap-3  py-2 px-2 hover:cursor-pointer hover:bg-gray-200 rounded'>
                    <FcAdvertising size={"24px"} />
                    <span className='font-semibold'>Ad Center</span>
                </div>
            </Link>
            <Link to='/BloodDonations'>
                <div className='flex gap-3  py-2 px-2 hover:cursor-pointer hover:bg-gray-200 rounded'>
                    <FcFilledFilter size={"24px"} />
                    <span className='font-semibold'>Blood Donations</span>
                </div>
            </Link>
            <Link to='/ClimateCenter'>
                <div className='flex gap-3  py-2 px-2 hover:cursor-pointer hover:bg-gray-200 rounded'>
                    <FcGlobe size={"24px"} />
                    <span className='font-semibold'>Climate Science Center</span>
                </div>
            </Link>
            <Link to='/Fundraiser'>
                <div className='flex gap-3  py-2 px-2 hover:cursor-pointer hover:bg-gray-200 rounded'>
                    <FcLike size={"24px"} />
                    <span className='font-semibold'>Fundraisers</span>
                </div>
            </Link>
            <Link to='/GammingVideo'>
                <div className='flex gap-3  py-2 px-2 hover:cursor-pointer hover:bg-gray-200 rounded'>
                    <FcReddit size={"24px"} />
                    <span className='font-semibold'>Gamming Video</span>
                </div>
            </Link>
            <Link to='/Messenger'>
                <div className='flex gap-3  py-2 px-2 hover:cursor-pointer hover:bg-gray-200 rounded'>
                    <BsMessenger size={"24px"} />
                    <span className='font-semibold'>Messenger</span>
                </div>
            </Link>

        </div>
    )
}

export default SideBar
