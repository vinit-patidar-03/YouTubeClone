import React from 'react'
import UpperMenubar from '../components/UpperMenubar'
import MainPageVideos from '../components/MainPageVideos'

const Home = () => {
  return (
    <>
        <div className=' w-[calc(100vw-83px)] relative top-[calc(60px+3rem)] p-3 left-[65px] homepage'>
              <UpperMenubar />
              <MainPageVideos />
        </div>
    </>
  )
}

export default Home