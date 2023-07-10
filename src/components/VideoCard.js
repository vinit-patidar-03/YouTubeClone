import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = (props) => {

  const { video } = props;
  // const cropDescription = (text) => {
  //   if (text.split(' ').length > 10) {
  //     let newText = text.split(' ').slice(0, 10);
  //     return newText.join(' ');
  //   }
  //   else {
  //     return text;
  //   }
  // }
  return (
    <>
      <Link to={`video/${video.videoId}/${video.channelId}`} className='mx-2 my-4 w-[330px] mainpage-Card'>
        <div className='flex flex-col'>
          <div className='w-full relative'>
            <img src={video?.thumbnail[0]?.url} className='w-full rounded-xl object-cover mainpage-thumbnail' alt="logo" />
            <div className='text-white text-center absolute right-2 bottom-2'>
          <h5 className={`${video.lengthText === 'LIVE'? 'bg-red-600':'bg-black'} px-1  rounded-[7px] text-xs`}>{video.isLive ? <p> • {video.lengthText}</p>:<p>{video.lengthText}</p>}</h5>
        </div>
          </div>
          <div className='flex px-3 my-2'>
            <img src={video.channelThumbnail[0].url} className='rounded-full self-start mainpage-channelThumbnail' alt="" />
            <div className='mx-3'>
              <h4 className='leading-5 font-bold text-xs mainpage-title'>{video?.title}</h4>
              <div className='my-1 text-gray-00'>
                <div className='flex sm:text-xs mainpage-channelTitle'>
                  <h4 className='font-semibold'>{video.channelTitle} </h4>
                  <img src="./images/verify.png" className='self-center mx-2 w-3' alt="verify" />
                </div>
                <div className='mt-1'>
                    {video.isLive ? <img src='/images/live.png' className='w-4' alt='live' /> : <h4 className='mainpage-channelTitle sm:text-xs'>{video.viewCount} • {video.publishedTimeText} </h4>}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default VideoCard