import React from 'react'
import UpperMenubar from '../components/UpperMenubar'
import MainPageVideos from '../components/MainPageVideos'

const Home = () => {
  return (
    <>
        <div className='relative top-[calc(60px+3rem)] p-3 homepage'>
              <UpperMenubar />
              <MainPageVideos />
        </div>
    </>
  )
}

export default Home