import React from 'react'
import { useNavigate } from 'react-router-dom'

const BottomNavbar = () => {
    const Navigate = useNavigate();
  return (
    <>
    <div className="BottomNavbar z-10">
        <nav className='fixed bottom-0 w-full h-[50px] flex items-center bg-white'>
            <ul className='flex justify-evenly w-full'>
            <li className='flex flex-col items-center cursor-pointer' onClick={()=>{Navigate('/')}}><i className="fa-solid fa-house fa-lg my-2"></i><h6 className=' text-[0.6rem]'>Home</h6></li>
                <li className='flex flex-col items-center cursor-pointer' onClick={()=>{Navigate('shorts/:id')}}><i className="fa-solid fa-play fa-lg my-2"></i><h6 className=' text-[0.6rem]'>Shorts</h6></li>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default BottomNavbar