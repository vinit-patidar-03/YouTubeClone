import React from 'react'
import Video from '../components/Video'
import SuggestVideo from '../components/SuggestedVideos'


const VideoDetails = () => {
  return (
    <div className='flex justify-center relative top-[80px] videoDetailpage'>
      <Video />
      <SuggestVideo />
    </div>
  )
}

export default VideoDetails