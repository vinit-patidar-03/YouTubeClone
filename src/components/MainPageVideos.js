import React, { useContext } from 'react'
import  Context  from '../context/Context'
import VideoCard from './VideoCard';

const MainPageVideos = () => {
    const context = useContext(Context);
    const {mainpageVideos,loading} = context;

  return (
    <>
        <div className='flex flex-wrap justify-center relative'>
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