import React from 'react'
import { useNavigate } from 'react-router-dom';

const ChannelVideos = (props) => {

  const Navigate = useNavigate();
  const {video,cid} = props;

  const Render = () => {
    Navigate(`/video/${video.videoId}/${cid}`)
  }

  return (
    <>
      <div className='flex flex-col relative w-60 m-3 ChannelVideosCard'>
        <div className='w-full'>
          <img src={video?.thumbnail[3]?.url || video?.thumbnail[0].url} onClick={Render} className='w-full rounded-xl object-cover cursor-pointer ChannelVideosThumbnail' alt="logo" />
        </div>
        <div className='mt-1 mb-5 text-gray-00 ChannelVideosText'>
          <h4 className='leading-5 font-semibold text-xs md:text-sm'>{video?.title}</h4>
          <h4>{video.isLive && <img src='/images/live.png' className='w-4' alt='live' />}</h4>
        </div>
      </div>
    </>
  )
}

export default ChannelVideos