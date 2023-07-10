import React from 'react'
import { useNavigate } from 'react-router-dom';

const ShortsCard = (props) => {
    const Navigate = useNavigate();
    const { video, cid } = props;
  
    const Render = () => {
      Navigate(`/shorts/${video.videoId}`)
    }
  return (
    <>
          <div className='flex flex-col relative w-[calc(0.5625*(50vh))]  m-3'>
        <div className='w-full relative'>
          <img src={video?.thumbnail[3]?.url || video?.thumbnail[0].url} onClick={Render} className='h-[50vh] w-[calc(0.5625*(50vh))] rounded-xl object-cover cursor-pointer' alt="logo" />
          <div className='text-white text-center absolute right-2 bottom-2'>
            <h5 className={`${video.lengthText === 'LIVE' ? 'bg-red-600' : 'bg-black'} px-1  rounded-[7px] text-xs`}>{video.isLive ? <p> • {video.lengthText}</p> : <p>{video.lengthText}</p>}</h5>
          </div>
        </div>
        <div className='mt-1 mb-5 text-gray-00 ChannelVideosText'>
          <h4 className='leading-5 font-bold text-xs md:text-sm'>{video?.title}</h4>
          <div className='mt-1'>
            {video.isLive ? <img src='/images/live.png' className='w-4' alt='live' /> : <h4 className='mainpage-channelTitle sm:text-xs'>{video.viewCount} {video.publishedTimeText} </h4>}
          </div>
        </div>
      </div>
    </>
  )
}

export default ShortsCard