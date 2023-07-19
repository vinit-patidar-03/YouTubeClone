import React, { useContext, useEffect } from 'react'
import Video from '../components/Video'
import SuggestVideo from '../components/SuggestedVideos'
import { useParams } from 'react-router-dom'
import Context from '../context/Context'


const VideoDetails = () => {

  const {theme} = useContext(Context);
  const {id} = useParams();

  useEffect(()=>
  {
      moveTotop()
  },[id])

  const moveTotop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className='flex justify-center relative top-[60px] videoDetailpage'>
      <Video />
      <SuggestVideo />
      <div className={`fixed right-[10px] bottom-[50px] cursor-pointer flex justify-center items-center rounded-full w-10 h-10 bg-${theme === 'light' ? 'white' : 'black'} text-${theme === 'light' ? 'black' : 'white'}`} onClick={moveTotop}>
          <i className="fa-solid fa-arrow-up fa-xl"></i>
        </div>
    </div>
  )
}

export default VideoDetails