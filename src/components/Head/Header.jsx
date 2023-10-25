import { AiOutlineSearch } from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import { TbBuildingStore } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { CgGames, CgMenuGridO } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { RiNotification3Fill } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import { fetchProfiles } from "../../api/profiles";
import { Link } from "react-router-dom";



function Header() {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["profiles"],
        queryFn: fetchProfiles
    })

 if(isLoading) return "Loading...."
 if(isError) return `Error: ${error.message}`

    return ( <div className="sticky top-0">
           {data.map((profile) => (
        <div className='flex bg-white items-center justify-between py-1 px-3 ' key={profile.id}>
        <div className='flex items-center' >
                <Link to='Home'><div className='w-12'><img src="/logo.png" alt="" className='w-full' /></div></Link>
                <div className='flex items-center px-4 bg-[#f0f2f5] rounded-full'>
                    <AiOutlineSearch size={"20px"} />
                    <input className='outline-none py-2 px-1 bg-[#f0f2f5] placeholder-gray-700' type="text" placeholder='Search Facebook' />
                </div>
            </div>
                <div className='flex gap-28'>
               <Link to='Home' className=""> <FiHome size={"28px"} /></Link>
                <Link to='Marketplace'><TbBuildingStore size={"28px"} /></Link>
                <Link to='Groups'><HiOutlineUserGroup size={"28px"} /></Link>
                <Link to='GammingVideo'><CgGames size={"28px"} /></Link>
            </div>

        <div className='flex gap-2 items-center'>
        <div className='p-2 rounded-full bg-[#E4E4EB] cursor-pointer hover:bg-gray-300'><CgMenuGridO size={"24px"} /></div>
        <div className='p-2 rounded-full bg-[#E4E4EB] cursor-pointer hover-bg-gray-300'><FaFacebookMessenger size={"24px"} /></div>
        <div className='p-2 rounded-full bg-[#E4E4EB] cursor-pointer hover-bg-gray-300'><RiNotification3Fill size={"24px"} /></div>         
        <Link to='Profile'><img src={profile.logo}  alt="" className='w-10 h-10 rounded-full'/></Link>
    </div>
        </div>
    ) )}
    </div>
    )
}

export default Header;
