import React from 'react'
import {AiOutlineLike,AiOutlineClose} from "react-icons/ai"
import {FaRegComment} from "react-icons/fa"
import {PiShareFat} from "react-icons/pi"
import {BsThreeDots} from "react-icons/bs"
import {BiWorld} from "react-icons/bi"
import { useQuery } from '@tanstack/react-query'
import { fetchProfiles } from '../../../api/profiles'
import { Link } from 'react-router-dom'


function LandingBottom() {
    const { data } = useQuery({
        queryKey: ["profiles"],
        queryFn: fetchProfiles
    })

    return (
        <div className='bg-white shadow-xl rounded-lg'>
            {/* Top content  */}
            <div className='flex justify-between px-4 items-center py-2'>
               {data && data.map((profile) => (
               <Link to='/Profile'  key={profile.id}> <div className='flex items-center gap-2'>
                 <img className="w-10 h-10 rounded-full cursor-pointer" src={profile.logo} alt="image" />
                    <div className='flex flex-col'>
                        <span className='font-semibold hover:underline'>{profile.name}</span>
                        <div className='flex items-center gap-2'>
                            <span className='hover:underline text-sm text-gray-700'>5 hours ago.</span>
                            <span><BiWorld/></span>
                        </div>
                    </div>
                </div></Link>
               ) )}
                <div className='flex gap-2 items-center'>
                    <div className='p-2 text-gray-700 hover:bg-[#f0f2f5] rounded-full cursor-pointer'><BsThreeDots size={"20px"}/></div>
                    <div className='p-2 text-gray-700 hover:bg-[#f0f2f5] rounded-full cursor-pointer'><AiOutlineClose size={"20px"}/></div>
                </div>
            </div>
            {/* Main Image container */}
{data && data.map((profile)=> (
                <div className='' key={profile.id}>
                <img className='w-full h-[600px]' src={profile.img} alt="Image" />
               </div>
) )}

            <div className='flex justify-around'>
                <div className='flex items-center gap-2 px-10 py-1 hover:bg-[#f0f2f5] cursor-pointer rounded  '>
                    <AiOutlineLike size={"20px"}/>
                    <span className='text-gray-700 font-medium '>Like</span>
                    </div>
                <div className='flex items-center gap-2 px-10 py-1 hover:bg-[#f0f2f5] cursor-pointer rounded  '>
                    <FaRegComment size={"20px"}/>
                    <span className='text-gray-700 font-medium '>Comment</span>
                    </div>
                <div className='flex items-center gap-2 px-10 py-1 hover:bg-[#f0f2f5] cursor-pointer rounded '>
                    <PiShareFat size={"20px"}/>
                    <span className='text-gray-700 font-medium '>Share</span>
                    </div>
            </div>

        </div>
    )
}

export default LandingBottom
