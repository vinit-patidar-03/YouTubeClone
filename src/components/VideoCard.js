import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = (props) => {

  const { video } = props;
  const cropDescription = (text)=>
  {
      if(text.split(' ').length > 10)
      {
        let newText = text.split(' ').slice(0,10);
           return  newText.join(' ');
      }
      else
      {
        return text;
      }
  }
  return (
    <>
      <Link to={`video/${video.videoId}/${video.channelId}`}>
        <div className=' w-80 h-80 flex flex-col items-center mx-2 my-4 mb-10 relative'>
          <div className='w-full'>
            <img src={video?.thumbnail[0]?.url} className='w-full rounded-xl object-cover' alt="logo" />
          </div>
          <div className='flex px-3 my-2'>
            <img src={video.channelThumbnail[0].url} width='40px' className='rounded-full self-start' alt="" />
            <div className='mx-3'>
              <h4 className='leading-5 font-semibold'>{cropDescription(video?.title)}</h4>
              <div className='my-2 text-gray-00 text-sm'>
                <h4 className='flex'>{video.channelTitle} <img src="./images/verify.png" width="20px" className='self-center mx-2' alt="verify" /> </h4>
                <h4>{video.isLive && <img src='/images/live.png' width='20px' alt='live'/>}</h4>
              </div>
            </div>
          </div>

        </div>
      </Link>
    </>
  )
}

export default VideoCard