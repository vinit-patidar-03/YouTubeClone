import React from 'react'
import { useNavigate } from 'react-router-dom'

const PlaylistCard = (props) => {
    const {video} = props;
   const Navigate = useNavigate();
    const Render = () => {
        Navigate(`/playlist/${video.playlistId}`)
      }
  return (
    <>
        <div className='flex flex-col relative w-60 m-3 ChannelVideosCard'>
        <div className='w-full relative'>
          <img src={video?.thumbnail[3]?.url || video?.thumbnail[0].url} title='Playlist' onClick={Render} className='w-full rounded-xl object-cover cursor-pointer ChannelVideosThumbnail' alt="logo" />
          <div className='text-white text-center absolute right-2 bottom-2'>
             <img src="/images/playlist.png" className='w-7' alt="playlist" />
          </div>
        </div>
        <div className='mt-1 mb-5 text-gray-00 ChannelVideosText'>
          <h4 className='leading-5 font-bold text-xs md:text-sm'>{video?.title}</h4>
          {/* <div className='mt-1'>
            {video.isLive ? <img src='/images/live.png' className='w-4' alt='live' /> : <h4 className='mainpage-channelTitle sm:text-xs'>{video.viewCount} • {video.publishedTimeText} </h4>}
          </div> */}
        </div>
      </div>
    </>
  )
}

export default PlaylistCard