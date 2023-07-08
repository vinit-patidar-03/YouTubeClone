import React from 'react'
import { useNavigate } from 'react-router-dom'

const SuggestVideoCard = (props) => {
  const {video} = props;
  const Navigate = useNavigate();
  const Render = () =>
  {
    Navigate(`/video/${video.videoId}/${video.channelId}`)
  }
  return (
    <>
      <div className='w-[80%]'>
        <div className='flex mb-5'>
          <div className='thumb'>
            <img src={video?.thumbnail[0]?.url} className='rounded-xl cursor-pointer' onClick={Render} style={{ width: "200px" }} alt="logo" />
          </div>
          <div className='mx-3'>
            <h4 className='leading-3 mt-2 font-semibold text-[10px]'>{video?.title}</h4>
            <h5 className='flex items-center text-xs'>{video?.channelTitle} <img src="/images/verify.png" width="20px" className='self-center mx-2' alt="verify" /></h5>
            {video.isLive ? <h6 className='flex items-center text-gray-600 text-xs my-2'><img src="/images/live.png" width='20px' className='mr-2' alt="live" /></h6> : <h6 className='text-gray-600 text-xs my-2'>{video?.viewCount} views </h6>}
            {/* <h6 className='text-gray-600 text-sm my-2'>{video.descriptionSnippet && cropDescription(video.descriptionSnippet)}</h6> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default SuggestVideoCard