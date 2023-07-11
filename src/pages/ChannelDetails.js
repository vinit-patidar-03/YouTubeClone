/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import Context from '../context/Context'
import ChannelVideos from '../components/ChannelVideos';
import { useParams } from 'react-router-dom';
import ShortsCard from '../components/ShortsCard';
import { fetchData } from '../API/YoutubeAPI';
import PlaylistCard from '../components/PlaylistCard';
import Channels from '../components/Channels';

const ChannelDetails = () => {

  const { cid } = useParams();
  const [playlist, setPlaylist] = useState('');
  const [videopage, setVideoPage] = useState(0);
  const [playlistpage, setPlaylistPage] = useState(0);
  const [channelVideos, setChannelVideos] = useState('')
  const { channel, setChannel, theme } = useContext(Context);


  useEffect(() => {
    fetchChannel(cid);
    fetchMoreChannelVideos(cid);
    fetchMoreChannelplaylists(cid);
  }, [cid])

  const fetchChannel = (id) => {
    fetchData(`channel/home?id=${id}`).then((res) => {
      setChannel(res.data);
    })
  }

  console.log(channel);

  const ChangePage = (event, type) => {
    if (event === 'incr' && videopage !== channel.data.filter((elem) => { return elem.type === 'video_listing' && elem.title.split(' ')[1] !== 'live' }).length - 1 && type === 'video') {
      setVideoPage(videopage + 1);
    }
    else if (event === 'decr' && videopage !== 0 && type === 'video') {
      setVideoPage(videopage - 1)
    }
    else if (event === 'incr' && playlistpage !== playlist.length - 1 && type === 'playlist') {
      setPlaylistPage(playlistpage + 1);
    }
    else if (event === 'decr' && playlistpage !== 0 && type === 'playlist') {
      setPlaylistPage(playlistpage - 1)
    }
  }

  const fetchMoreChannelVideos = (id) => {
    fetchData(`channel/videos?id=${id}`).then((res) => {
      setChannelVideos(res.data.data)
    })
  }

  const fetchMoreChannelplaylists = (id) => {
    fetchData(`channel/playlists?id=${id}`).then((res) => {
      setPlaylist(res.data.data);
    })
  }

  return (
    <>{channel &&
      <div className={`mb-[50px] text-${theme === 'light' ? 'black' : 'white'}`}>
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
            <li className='cursor-pointer font-semibold'><a href="#Live">Live</a></li>
            <li className='cursor-pointer font-semibold'><a href="#Videos">Videos</a></li>
            <li className='cursor-pointer font-semibold'><a href="#Playlist">Playlists</a></li>
            <li className='cursor-pointer font-semibold'><a href="#Shorts">Shorts</a></li>
            <li className='cursor-pointer font-semibold'><a href="#Channels">Channels</a></li>
          </ul>
        </div>

        <hr />

        <section id='Live' className='my-3'>
          <h1 className='text-center my-5 text-lg font-bold'>Live</h1>
          <div className='flex flex-wrap justify-center my-5'>
            {channel.data.filter((elem) => { return elem.type === 'video_listing' && elem.title.split(' ')[1] === 'live'; }).length !== 0 && channel.data.filter((elem) => { return elem.type === 'video_listing' && elem.title.split(' ')[1] === 'live'; })[0].data.map((elem, index) => {
              return <ChannelVideos video={elem} key={index} cid={cid} />
            })}
            {channel.data.filter((elem) => { return elem.type === 'video_listing' && elem.title.split(' ')[1] === 'live'; }).length === 0 && <h1 className='text-center text-xl'>No Live Videos</h1>}
          </div>
        </section>

        <hr />

        <section id='Videos' className='my-3'>
          <h1 className='text-center my-5 text-lg font-bold'>Videos</h1>
          <div className='flex flex-wrap justify-center my-5'>
            {channelVideos.length !== 0 && channelVideos.map((elem, index) => {
              return <ChannelVideos video={elem} key={index} cid={cid} />
            })}
            {channelVideos.length === 0 && <h1 className='text-center text-xl'>No Videos</h1>}
          </div>
          <hr />
          <h1 className='text-center my-5 text-lg font-bold'>Channel & Other Channel Videos</h1>
          <div className='flex flex-wrap justify-center my-5'>
            {channel.data.filter((elem) => { return elem.type === 'video_listing' && elem.title.split(' ')[1] !== 'live' }).length !== 0 && channel.data.filter((elem) => { return elem.type === 'video_listing' && elem.title.split(' ')[1] !== 'live' })[videopage].data.map((elem, index) => {
              return <ChannelVideos video={elem} key={index} cid={cid} />
            })}
            {channel.data.filter((elem) => { return elem.type === 'video_listing' && elem.title.split(' ')[1] !== 'live' }).length === 0 && <h1 className='text-center text-xl'>No Videos</h1>}
          </div>
          <div className='flex justify-evenly'>
            <button onClick={() => { ChangePage('decr', 'video') }} className={`py-2 px-5 bg-${theme === 'light' ? 'black' : 'white'} text-${theme === 'light' ? 'white' : 'black'} rounded-full font-semibold`}>Previous</button>
            <button onClick={() => { ChangePage('incr', 'video') }} className={`py-2 px-5 bg-${theme === 'light' ? 'black' : 'white'} text-${theme === 'light' ? 'white' : 'black'} rounded-full font-semibold`}>Next</button>
          </div>
        </section>

        <hr className='mt-2' />

        <section id='Playlist' className='my-3'>
          <h1 className='text-center my-5 text-lg font-bold'>Channel Playlists</h1>
          {playlist.length === 0 && <h1 className='text-center text-xl'>No Plylists</h1>}
          {playlist.length !== 0 && playlist[playlistpage].type === 'playlist_listing' ?
            <div>
              <div className='flex flex-wrap justify-center my-5'>
                {playlist[playlistpage].type === 'playlist_listing' ? playlist[playlistpage].data.map((elem, index) => {
                  return <PlaylistCard video={elem} key={index} cid={cid} />
                }) : ''}
              </div>

              <div className='flex justify-evenly'>
                <button onClick={() => { ChangePage('decr', 'playlist') }} className='py-2 px-5 bg-black text-white rounded-full font-semibold'>Previous</button>
                <button onClick={() => { ChangePage('incr', 'playlist') }} className='py-2 px-5 bg-black text-white rounded-full font-semibold'>Next</button>
              </div>
            </div>
            :
            <div className='flex flex-wrap justify-center my-5'>
              {playlist.length !== 0 && playlist.map((elem, index) => {
                return <PlaylistCard video={elem} key={index} cid={cid} />
              })}
            </div>
          }
        </section>

        <hr />

        <section id='Shorts' className='my-3'>
          <h1 className='text-center my-5 text-lg font-bold'>Shorts</h1>
          <div className='flex flex-wrap justify-center my-5'>
            {channel.data.filter((elem) => { return elem.type === 'shorts_listing' }).length !== 0 && channel.data.filter((elem) => { return elem.type === 'shorts_listing' })[0].data.map((elem, index) => {
              return <ShortsCard video={elem} key={index} cid={cid} />
            })}
            {channel.data.filter((elem) => { return elem.type === 'shorts_listing' }).length === 0 && <h1 className='text-center text-xl'>No Shorts Posted</h1>}
          </div>
        </section>

        <hr />

        <section id='Channels'>
          <h1 className='text-center my-5 text-lg font-bold'>Channels</h1>
          <div>
            <div className='flex justify-center flex-wrap'>{
              channel.data.filter((elem) => { return elem.type === 'channel_listing' }).length !== 0 && channel.data.filter((elem) => { return elem.type === 'channel_listing' })[0].data.map((elem, index) => {
                return <Channels video={elem} key={index} />
              })
            }
              {channel.data.filter((elem) => { return elem.type === 'channel_listing' }).length === 0 && <h1 className='text-center text-xl'>No Other Channel</h1>}
            </div>
            <div>

            </div>
          </div>
        </section>
      </div>
    }
    </>
  )
}

export default ChannelDetails