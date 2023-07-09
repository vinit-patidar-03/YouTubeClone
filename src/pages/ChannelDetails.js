/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import Context from '../context/Context'
import ChannelVideos from '../components/ChannelVideos';
import { useParams } from 'react-router-dom';

const ChannelDetails = () => {

  const {cid} = useParams();
  const [live, setLive] = useState('');
  const [videos, setVideos] = useState('');
  const [playlist, setPlaylist] = useState('');
  const [shorts, setShorts] = useState('')
  const [channels, setChannels] = useState('')
  const [page,setPage] = useState(0);
  const { channel } = useContext(Context);
  console.log(channel);

  useEffect(() => {
    filterLive();
    filterChannel();
    filterPlaylist();
    filterVideos();
    filterShorts();
  }, [])

  const filterLive = () => {
    setLive(
      channel.data.filter((elem) => {
        return elem.type === 'video_listing' && elem.title.split(' ')[1] === 'live';
      })
    )
  }

  const filterVideos = () => {
    setVideos(
      channel.data.filter((elem) => {
        return elem.type === 'video_listing' && elem.title.split(' ')[1] !== 'live'
      })
    )
  }

  const filterPlaylist = () => {
    setPlaylist(
      channel.data.filter((elem) => {
        return elem.type === 'playlist_listing'
      })
    )
  }

  const filterChannel = () => {
    setChannels(
      channel.data.filter((elem) => {
        return elem.type === 'channel_listing'
      })
    )
  }

  const filterShorts = () => {
    setShorts(
      channel.data.filter((elem) => {
        return elem.type === 'shorts_listing'
      })
    )
  }

  const ChangePage = (e)=>
  {
    if(e ==='incr' && page !== videos.length-1)
    {
      setPage(page+1);
    }
    else if(e === 'decr' && page !== 0)
    {
      setPage(page-1)
    }
  }

  console.log(live)
  console.log(videos)
  console.log(playlist)
  console.log(shorts)
  console.log(channels)
  return (
    <>
      <div>
        <div className='mt-[60px]'>
          {channel.meta.banner && <img src={channel.meta.banner[0].url} className='w-full' alt="banner" />}
        </div>
        <div className='flex my-2 ml-5'>
          <div className='flex'>
            <img src={channel.meta.avatar[1].url} className='rounded-full ChannelDetailpageAvatar' alt="avatar" />
          </div>
          <div className='ml-5 mt-3'>
            <div className='flex items-center'>
              <h3 className='font-bold'>{channel.meta.title}</h3>
              <img src='/images/verify.png' className='w-5 ml-2' alt="verify" />
            </div>
            <div className='flex ChannelDetailpageText'>
              <h5>{channel.meta.channelHandle}</h5>
              <h5 className='ml-3'>{channel.meta.subscriberCountText} subscribers</h5>
              <h5 className='ml-3'>{channel.meta.videosCount} videos</h5>
            </div>
            <div className='mt-2 text-xs'>
              <p>{channel.meta.description.split(' ')[0]}...</p>
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <ul className='flex justify-evenly'>
            <li className='cursor-pointer font-semibold'>Live</li>
            <li className='cursor-pointer font-semibold'>Videos</li>
            <li className='cursor-pointer font-semibold'>Playlist</li>
            <li className='cursor-pointer font-semibold'>Shorts</li>
            <li className='cursor-pointer font-semibold'>Channels</li>
          </ul>
        </div>
        <hr />

        <section>
          <h1 className='text-center my-5 text-lg font-bold'>Live</h1>
          <div className='flex flex-wrap justify-center my-5'>
            {live.length !== 0 && live[0].data.map((elem, index) => {
              return <ChannelVideos video={elem} key={index} cid={cid}/>
            })}
            {live.length === 0 && <h1 className='text-center text-xl'>No Live Videos</h1>}
          </div>
        </section>

        <section>
          <h1 className='text-center my-5 text-lg font-bold'>Videos</h1>
          <div className='flex flex-wrap justify-center my-5'>
            {videos.length !== 0 && videos[page].data.map((elem, index) => {
              return <ChannelVideos video={elem} key={index} cid={cid}/>
            })}
            {videos.length === 0 && <h1 className='text-center text-xl'>No Videos</h1>}
          </div>
          <div className='flex justify-evenly'>
            <button onClick={()=>{ChangePage('decr')}} className='py-2 px-5 bg-black text-white rounded-full font-semibold'>Previous</button>
            <button onClick={()=>{ChangePage('incr')}} className='py-2 px-5 bg-black text-white rounded-full font-semibold'>Next</button>
          </div>
        </section>

        <section>
          <h1 className='text-center my-5 text-lg font-bold'>Shorts</h1>
          <div className='flex flex-wrap justify-center my-5'>
            {shorts.length !== 0 && shorts[0].data.map((elem, index) => {
              return <ChannelVideos video={elem} key={index} cid={cid} />
            })}
            {shorts.length ===0 && <h1 className='text-center text-xl'>No Shorts Posted</h1>}
          </div>
        </section>
      </div>
    </>
  )
}

export default ChannelDetails