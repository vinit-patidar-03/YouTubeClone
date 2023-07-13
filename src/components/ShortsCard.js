import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';

const ShortsCard = (props) => {
  const Navigate = useNavigate();
  const { theme } = useContext(Context)
  const { video} = props;

  const Render = () => {
    Navigate(`/shorts/${video.videoId}`)
  }
  return (
    <>
      <div className={`flex flex-col relative w-[calc(0.5625*(50vh))]  m-3 text-${theme === 'light' ? 'black' : 'white'}`}>
        <div className='w-full relative'>
          <img src={video?.thumbnail[3]?.url || video?.thumbnail[0].url} onClick={Render} className='h-[50vh] w-[calc(0.5625*(50vh))] rounded-xl object-cover cursor-pointer' alt="logo" />
        </div>
        <div className='mt-1 mb-5 text-gray-00 ChannelVideosText'>
          <h4 className='leading-5 font-bold text-xs md:text-sm'>{video?.title}</h4>
          <div className='mt-1'>
            {video.viewCountText && <h4 className='mainpage-channelTitle sm:text-xs'>{video.viewCountText}</h4>}
          </div>
        </div>
      </div>
    </>
  )
}

export default ShortsCard