import React from 'react'
import { useNavigate } from 'react-router-dom';

const ChannelVideos = (props) => {

  const Navigate = useNavigate();
  const { video, cid } = props;

  const Render = () => {
    Navigate(`/video/${video.videoId}/${cid}`)
  }


  const ViewConverter = (views) => {
    let count = 0;
    let originalCount = views;
    while (views !== 0) {
      count++;
      views = parseInt(views / 10);
    }

    if ((count - 1) === 4 || count - 1 === 3) {
      return ((originalCount / Math.pow(10, 3)).toString().slice(0, 4) + 'K')
    }
    else if ((count - 1) === 5) {
      return ((originalCount / Math.pow(10, 5)).toString().slice(0, 4) + 'lakh')
    }
    else if ((count - 1) >= 6) {
      return ((originalCount / Math.pow(10, 6)).toString().slice(0, 4) + 'M')
    }
    else {
      return originalCount;
    }
  }

  return (
    <>
      <div className='flex flex-col relatives w-full mb-2 lg:w-[calc(25%-0.375rem)] md:w-[calc(33.33%-0.333rem)] sm:w-[calc(50%-0.25rem)] text-sm sm:text-xs'>
        <div className='w-full relative'>
          <img src={video?.thumbnail[3]?.url || video?.thumbnail[0].url} onClick={Render} className='w-full sm:rounded-xl object-cover cursor-pointer' alt="logo" />
          <div className='text-white text-center absolute right-2 bottom-2'>
            <h5 className={`${video.lengthText === 'LIVE' ? 'bg-red-600' : 'bg-black'} px-1  rounded-[7px]`}>{video.isLive ? <p> • {video.lengthText}</p> : <p>{video.lengthText}</p>}</h5>
          </div>
        </div>
        <div className='m-1'>
          <h4 className='font-semibold'>{video?.title}</h4>
          <div>
            {video.isLive ? <img src='/images/live.webp' className='w-4' alt='live' /> : <h4>{ViewConverter(video.viewCount)} • {video.publishedTimeText} </h4>}
          </div>
        </div>
      </div>
    </>
  )
}

export default ChannelVideos