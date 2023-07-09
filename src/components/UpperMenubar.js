import React,{useContext} from 'react'
import Menulist from '../API/UpperMenulist'
import Context from '../context/Context'

const UpperMenubar = () => {
  const {setSelectedCategory} = useContext(Context);
  return (
    <>
        <nav className='w-[100%] h-12 scroll-track overflow-x-scroll bg-white flex items-center fixed top-[60px] left-[65px] z-20 upperMenubar'>
            <ul className='flex scroll-track items-center'>
            {
                 Menulist.map((elem,index)=>
                 {
                     return <li className={`rounded-lg bg-slate-300  cursor-pointer hover:bg-red-600 hover:text-white ml-2 mr-2 py-1 px-5`} style={{marginRight:`${index === Menulist.length-1?'80px':''}`}} onClick={()=>
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