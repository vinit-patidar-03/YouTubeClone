import React from 'react'
import Video from '../components/Video'
import SuggestVideo from '../components/SuggestedVideos'


const VideoDetails = () => {
  return (
    <div className='relative flex'>
      <Video />
      <SuggestVideo />
    </div>
  )
}

export default VideoDetails