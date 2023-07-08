import React from 'react'
import {useNavigate } from 'react-router-dom'

const SearchResultCard = (props) => {
  const Navigate = useNavigate();
    const {video} = props;
  //   const cropDescription = (text)=>
  // {
  //     if(text.split(' ').length > 10)
  //     {
  //       let newText = text.split(' ').slice(0,15);
  //          return  newText.join(' ');
  //     }
  // }

  const Render = () =>
  {
    Navigate(`/video/${video.videoId}/${video.channelId}`)
  }
  return (
    <>
    <div className='w-[80%] my-2'>
        <div className='flex mb-5'>
            <div className='thumb'>
            <img src={video?.thumbnail[0]?.url} className='rounded-xl cursor-pointer' onClick={Render} style={{width:"400px"}} alt="logo" />
          </div>
            <div className='mx-4 my-2'>
            <h4 className='leading-5'>{video?.title}</h4>
            {video.isLive && <h6 className='flex items-center text-gray-600 text-sm my-2'><img src="/images/live.png" width='20px' className='mr-2' alt="live" /></h6>}
            <h5 className='flex items-center my-5'><img src={video.channelThumbnail[0].url} width='40px' className='rounded-full mr-2' alt="" />{video?.channelTitle} <img src="/images/verify.png" width="20px" className='self-center mx-2' alt="verify" /></h5>
             <h6 className='text-gray-600 text-sm my-2'>{video.description}</h6>
            </div>
        </div>
        </div>
    </>
  )
}

export default SearchResultCard