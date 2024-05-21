import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context';
import { IoHomeSharp } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { FaSun } from 'react-icons/fa6';

const BottomNavbar = () => {
  const Navigate = useNavigate();
  const { theme, setTheme, cid } = useContext(Context);

  return (
    <>
      <div className="z-10">
        <nav className={`fixed bottom-0 w-full h-[50px] flex items-center`} style={{ backgroundColor: `${theme === 'light' ? 'white' : 'black'}` }}>
          <ul className={`flex justify-evenly w-full text-${theme === 'light' ? 'black' : 'white'}`}>

            <li className='flex flex-col justify-center cursor-pointer' onClick={() => { Navigate('/') }} title='Home'>
              <IoHomeSharp className='my-2 text-xl' />
            </li>

            <li className='flex flex-col justify-center cursor-pointer' onClick={() => { Navigate(`shorts/:id/${cid}`) }} title='Shorts'>
              <FaPlay className='my-2 text-xl' />
            </li>

            <li className='flex flex-col justify-center cursor-pointer' onClick={() => { Navigate('trending') }} title='Shorts'>
              <FaFireAlt className='my-2 text-xl' />
            </li>

            <li className='flex flex-col justify-center cursor-pointer' onClick={() => { Navigate('treasure') }} title='Shorts'>
              <IoDiamond className='my-2 text-xl' />
            </li>

            <li className="flex items-center cursor-pointer" onClick={() => { theme === 'light' ? setTheme('dark') : setTheme('light') }}>
              <FaSun className='my-2 text-xl' />
            </li>

          </ul>
        </nav>
      </div>
    </>
  )
}

export default BottomNavbar