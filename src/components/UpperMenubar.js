import React,{useContext} from 'react'
import Menulist from '../API/UpperMenulist'
import Context from '../context/Context'

const UpperMenubar = () => {
  const {setSelectedCategory,theme} = useContext(Context);
  return (
    <>
        <nav className={`w-[100%] h-12 scroll-track overflow-x-scroll bg-${theme === 'light'?'white':'black'} flex items-center fixed top-[60px] z-20 upperMenubar`}>
            <ul className='flex scroll-track items-center pr-2'>
            {
                 Menulist.map((elem,index)=>
                 {
                     return <li className={`rounded-lg bg-slate-300  cursor-pointer hover:bg-red-600 hover:text-white ml-1 mr-4 py-1 px-5`} onClick={()=>
                     {
                       setSelectedCategory(elem)
                     }} key={index}>{elem}</li>
                 })
            }
            </ul>
        </nav>
    </>
  )
}

export default UpperMenubar