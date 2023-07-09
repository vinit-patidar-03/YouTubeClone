import React from 'react'
import { useNavigate } from 'react-router-dom'

const SuggestVideoCard = (props) => {
  const {video} = props;
  const Navigate = useNavigate();
  const Render = () =>
  {
    Navigate(`/video/${video.videoId}/${video.channelId}`)
  }

  const cropDescription = (text)=>
  {
      if(text.split(' ').length > 5)
      {
        let newText = text.split(' ').slice(0,5);
           return  newText.join(' ');
      }
      else
      {
        return text;
      }
  }
  return (
    <>
      <div className='suggestVideoCard'>
        <div className='flex mb-5 suggestCardBody'>
          <div className='thumb'>
            <img src={video?.thumbnail[1]?.url} className='rounded-xl cursor-pointer suggestVideoThumbnail' onClick={Render} alt="logo" />
          </div>
          <div className='mx-3'>
            <h4 className='leading-3 mt-2 font-semibold text-[10px] suggestVideoTitle'>{video?.title}</h4>
            <h4 className='leading-3 mt-2 font-semibold text-[10px] suggestVideoTitle1'>{video?.title}</h4>
            <div className="suggestvideoDetail">
            <h5 className='flex items-center suggestVideoChannelTitle'>{video?.channelTitle} <img src="/images/verify.png" className='self-center mx-2 w-3' alt="verify" /></h5>
            {video.isLive ? <h6 className='flex items-center text-gray-600 text-xs my-2'><img src="/images/live.png" width='20px' className='mr-2' alt="live" /></h6> : <h6 className='text-gray-600 text-[10px] my-1 suggestVideoCount'>{video?.viewCount} views • {video?.publishedTimeText}</h6>}
            </div>
            <div className="suggestvideoDetail1">
            <h5 className='flex items-center my-3 text-xs text-gray-800 searchResultChannelTitle'>{video.channelThumbnail.length !==0 && <img src={video.channelThumbnail[0].url} width='20px' className='rounded-full mr-2' alt="" />}{video?.channelTitle} <img src="/images/verify.png" className='self-center mx-2 w-3' alt="verify" />{video.isLive && <p className='flex items-center text-gray-600 text-sm my-2'><img src="/images/live.png" width='20px' className='mr-2' alt="live" /></p>}<p className='text-[10px] my-2 text-gray-700'>{video?.viewCount} views • {video?.publishedTimeText}</p></h5>
            </div>
            {/* <h6 className='text-gray-600 text-sm my-2'>{video.descriptionSnippet && cropDescription(video.descriptionSnippet)}</h6> */}
            {/* <h6 className='text-gray-700 text-xs my-2 '>{video.description}</h6> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default SuggestVideoCard