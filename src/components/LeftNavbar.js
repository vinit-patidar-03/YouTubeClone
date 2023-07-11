import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context';

const LeftNavbar = () => {

  const {theme} = useContext(Context);

  const Navigate = useNavigate();
  return (
    <>
        <nav className={`h-[93vh] bg-${theme === 'light' ? 'white':'black'} text-${theme === 'light' ? 'black':'white'} w-[65px] flex flex-col items-center fixed left-0 top-[60px] hide z-10`}>
            <ul>
                <li className='my-5 flex flex-col items-center cursor-pointer' onClick={()=>{Navigate('/')}}><i className="fa-solid fa-house fa-lg my-5"></i><h6 className=' text-[0.6rem]'>Home</h6></li>
                <li className='my-5 flex flex-col items-center cursor-pointer' onClick={()=>{Navigate('/shorts/:id')}}><i className="fa-solid fa-play fa-lg my-5"></i><h6 className=' text-[0.6rem]'>Shorts</h6></li>
                {/* <li className='my-5 flex flex-col items-center cursor-pointer'><i className="fa-solid fa-book fa-lg my-5"></i><h6 className=' text-[0.6rem]'>Subscriptions</h6></li>
                <li className='my-5 flex flex-col items-center cursor-pointer'><i className="fa-solid fa-photo-film fa-lg my-5"></i><h6 className=' text-[0.6rem]'>Library</h6></li> */}
            </ul>
        </nav>
    </>
  )
}

export default LeftNavbar