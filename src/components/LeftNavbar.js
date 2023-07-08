import React from 'react'
import { useNavigate } from 'react-router-dom'

const LeftNavbar = () => {

  const Navigate = useNavigate();
  return (
    <>
        <nav className=' h-[93vh] bg-white w-[65px] flex flex-col items-center fixed left-0 top-[60px]'>
            <ul>
                <li className='my-5 flex flex-col items-center cursor-pointer' onClick={()=>{Navigate('/')}}><i className="fa-solid fa-house fa-lg my-3"></i><h6 className=' text-[0.6rem]'>Home</h6></li>
                <li className='my-5 flex flex-col items-center cursor-pointer'><i className="fa-solid fa-play fa-lg my-3"></i><h6 className=' text-[0.6rem]'>Shorts</h6></li>
                <li className='my-5 flex flex-col items-center cursor-pointer'><i className="fa-solid fa-book fa-lg my-3"></i><h6 className=' text-[0.6rem]'>Subscriptions</h6></li>
                <li className='my-5 flex flex-col items-center cursor-pointer'><i className="fa-solid fa-photo-film fa-lg my-3"></i><h6 className=' text-[0.6rem]'>Library</h6></li>
            </ul>
        </nav>
    </>
  )
}

export default LeftNavbar