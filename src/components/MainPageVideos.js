import React, { useContext, useEffect} from 'react'
import  Context  from '../context/Context'
import VideoCard from './VideoCard';

const MainPageVideos = () => {
    const context = useContext(Context);
    const {mainpageVideos,loading,setShortsCategory,selectCategory} = context;
    useEffect(()=>
    {
        setShortsCategory(selectCategory)
    })

  return (
    <>
        <div className='flex flex-wrap justify-center relative mb-[50px]'>
               {
                 !loading &&
                  mainpageVideos.map((elem,index)=>
                  {
                    if(elem.type !== 'video')
                    {
                      return false;
                    }
                      return <VideoCard video = {elem} key={index}/>
                  })
                 
               }
        </div>
    </>
  )
}

export default MainPageVideos