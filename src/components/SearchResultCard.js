import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context';

const SearchResultCard = (props) => {
  const Navigate = useNavigate();
  const { video } = props;
  const { theme } = useContext(Context);

  const Render = () => {
    Navigate(`/video/${video.videoId}/${video.channelId}`)
  }
  return (
    <>
      <div className='searchResultCard my-2'>
        <div className='flex mb-5 searchResultcard'>
          <div className='thumb1 relative'>
            <img src={video?.thumbnail[0]?.url} className='rounded-xl cursor-pointer searchresultThumbnail' onClick={Render} alt="logo" />
            <div className='text-white text-center absolute right-2 bottom-2'>
              <h5 className={`${video.lengthText === 'LIVE' ? 'bg-red-600' : 'bg-black'} px-1  rounded-[7px] text-xs`}>{video.isLive ? <p> • {video.lengthText}</p> : <p>{video.lengthText}</p>}</h5>
            </div>
          </div>
          <div className='mx-4 my-1 searchChannelDetails text-g'>
            <h4 className={`leading-5 text-sm searchResultTitle font-bold text-${theme === 'light' ? 'black' : 'white'}`}>{video?.title}</h4>

            <div className={`text-${theme === 'light' ? 'black' : 'white'} searchResultDetails1`}>
              <h4 className='text-[10px] my-2'>{video?.viewCount} views • {video?.publishedTimeText}</h4>
              <div className='flex items-center my-3 text-xs searchResultChannelTitle'>
                <img src={video.channelThumbnail[0].url} width='20px' className='rounded-full mr-2' alt="" />
                <h5 className='font-semibold'>{video?.channelTitle}</h5>
                <img src="/images/verify.png" className='self-center mx-2 w-3' alt="verify" />
                {video.isLive &&
                  <p className='flex items-center text-sm my-2'>
                    <img src="/images/live.png" width='20px' className='mr-2' alt="live" />
                  </p>}
              </div>
            </div>

            <div className={`text-${theme === 'light' ? 'black' : 'white'} searchResultDetails `}>
              <div className='flex items-center my-3 text-xs searchResultChannelTitle'>
                {<img src={video.channelThumbnail[0].url} width='20px' className='rounded-full mr-2' alt="" />}
                <h5>{video?.channelTitle}</h5>
                <img src="/images/verify.png" className='self-center mx-2 w-3' alt="verify" />
                {video.isLive &&
                  <p className='flex items-center text-sm my-2'>
                    <img src="/images/live.png" width='20px' className='mr-2' alt="live" />
                  </p>}
                <p className='text-[10px] my-2'>{video?.viewCount} views • {video?.publishedTimeText}</p>
              </div>
            </div>

            <h6 className={`text-${theme === 'light' ? 'black' : 'white'} text-xs my-2 hide`}>{video.description}</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchResultCard