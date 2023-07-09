import React from 'react'
import { useNavigate } from 'react-router-dom'

const SearchResultCard = (props) => {
  const Navigate = useNavigate();
  const { video } = props;
  //   const cropDescription = (text)=>
  // {
  //     if(text.split(' ').length > 10)
  //     {
  //       let newText = text.split(' ').slice(0,15);
  //          return  newText.join(' ');
  //     }
  // }

  const Render = () => {
    Navigate(`/video/${video.videoId}/${video.channelId}`)
  }
  return (
    <>
      <div className='searchResultCard my-2'>
        <div className='flex mb-5 searchResultcard'>
          <div className='thumb1'>
            <img src={video?.thumbnail[0]?.url} className='rounded-xl cursor-pointer searchresultThumbnail' onClick={Render} alt="logo" />
          </div>
          <div className='mx-4 my-1 searchChannelDetails'>
            <h4 className='leading-5 text-sm searchResultTitle'>{video?.title}</h4>
            <div className="searchResultDetails1">
            <h4 className='text-[10px] my-2 text-gray-700'>{video?.viewCount} views • {video?.publishedTimeText}</h4>
            <h5 className='flex items-center my-3 text-xs text-gray-800 searchResultChannelTitle'><img src={video.channelThumbnail[0].url} width='20px' className='rounded-full mr-2' alt="" />{video?.channelTitle} <img src="/images/verify.png" className='self-center mx-2 w-3' alt="verify" />{video.isLive && <p className='flex items-center text-gray-600 text-sm my-2'><img src="/images/live.png" width='20px' className='mr-2' alt="live" /></p>}</h5>
            </div>
            <div className="searchResultDetails">
            <h5 className='flex items-center my-3 text-xs text-gray-800 searchResultChannelTitle'><img src={video.channelThumbnail[0].url} width='20px' className='rounded-full mr-2' alt="" />{video?.channelTitle} <img src="/images/verify.png" className='self-center mx-2 w-3' alt="verify" />{video.isLive && <p className='flex items-center text-gray-600 text-sm my-2'><img src="/images/live.png" width='20px' className='mr-2' alt="live" /></p>}<p className='text-[10px] my-2 text-gray-700'>{video?.viewCount} views • {video?.publishedTimeText}</p></h5>
            </div>
            <h6 className='text-gray-700 text-xs my-2 hide'>{video.description}</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchResultCard