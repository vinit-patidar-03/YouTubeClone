import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context';

const SuggestVideoCard = (props) => {
  const { video } = props;
  const Navigate = useNavigate();
  const {theme} = useContext(Context);
  const Render = () => {
    Navigate(`/video/${video.videoId}/${video.channelId}`)
  }

  const ViewConverter = (views)=>
  {
      let count = 0;
      let originalCount = views;
      while(views!==0)
      {
         count++;
         views = parseInt(views/10);      
      }

      if((count-1) === 4 || count-1 === 3)
      {
        return ((originalCount/Math.pow(10,3)).toString().slice(0,4) + 'K')
      }
      else if((count-1) === 5)
      {
        return ((originalCount/Math.pow(10,5)).toString().slice(0,4) + 'lakh')
      }
      else if((count-1) >= 6)
      {
        return ((originalCount/Math.pow(10,6)).toString().slice(0,4) + 'M')
      }
      else
      {
        return originalCount;
      }
  }

  return (
    <>
      <div className={`suggestVideoCard text-${theme === 'light' ? 'black' : 'white'}`}>
        <div className='flex mb-5 suggestCardBody'>
          <div className='thumb relative'>
            <img src={video?.thumbnail[1]?.url} className='rounded-xl cursor-pointer h-full suggestVideoThumbnail' onClick={Render} alt="logo" />
            <div className='text-white text-center absolute right-2 bottom-2'>
              <h5 className={`${video.lengthText === 'LIVE' ? 'bg-red-600' : 'bg-black'} px-1  rounded-[7px] text-xs`}>{video.isLive ? <p> • {video.lengthText}</p> : <p>{video.lengthText}</p>}</h5>
            </div>
          </div>

          <div className='mx-3'>
            <h4 className='leading-3 mt-2 font-semibold text-[10px] suggestVideoTitle'>{video?.title}</h4>
            <h4 className='leading-3 mt-2 font-semibold text-[10px] suggestVideoTitle1'>{video?.title}</h4>
            <div className='suggestvideoDetail'>
              <div className='flex items-center suggestVideoChannelTitle'>
              <h5>{video?.channelTitle} </h5>
              <img src="/images/verify.png" className='self-center mx-2 w-3' alt="verify" />
              </div>
              {video.isLive ? <h6 className='flex items-center text-xs my-2'><img src="/images/live.png" width='20px' className='mr-2' alt="live" /></h6> : <h6 className='text-gray-600 text-[10px] my-1 suggestVideoCount'>{video?.viewCount} views • {video?.publishedTimeText}</h6>}
            </div>
            <div className='suggestvideoDetail1'>
              <div className='flex items-center my-3 text-xs searchResultChannelTitle'>
                {video.channelThumbnail.length !== 0 && <img src={video.channelThumbnail[0].url} width='20px' className='rounded-full mr-2' alt="" />}
                {video?.channelTitle} <img src="/images/verify.png" className='self-center mx-2 w-3' alt="verify" />
                {video.isLive &&
                  <div className='flex items-center text-sm my-2'>
                    <img src="/images/live.png" width='20px' className='mr-2' alt="live" />
                  </div>}
                <p className='text-[10px] my-2'>{ViewConverter(video?.viewCount)} views • {video?.publishedTimeText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SuggestVideoCard