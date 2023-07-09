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
      <Link to={`video/${video.videoId}/${video.channelId}`} className='mx-2 my-4 w-[330px] h-80] mainpage-Card'>
        <div className='flex flex-col relative'>
          <div className='w-full'>
            <img src={video?.thumbnail[0]?.url} className='w-full rounded-xl object-cover mainpage-thumbnail' alt="logo" />
          </div>
          <div className='flex px-3 my-2'>
            <img src={video.channelThumbnail[0].url} className='rounded-full self-start mainpage-channelThumbnail' alt="" />
            <div className='mx-3'>
              <h4 className='leading-5 font-semibold text-xs md:text-sm mainpage-title'>{video?.title}</h4>
              <div className='my-1 text-gray-00'>
                <h4 className='flex sm:text-xs mainpage-channelTitle'>{video.channelTitle} <img src="./images/verify.png" className='self-center mx-2 w-3' alt="verify" /> </h4>
                <h4>{video.isLive && <img src='/images/live.png' className='w-4' alt='live'/>}</h4>
              </div>
            </div>
          </div>

        </div>
      </Link>
    </>
  )
}

export default VideoCard