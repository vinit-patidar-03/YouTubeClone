/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../API/YoutubeAPI';
import PlaylistVideoCard from '../components/PlaylistVideoCard';
import Context from '../context/Context';
import Spinner from '../components/Spinner';

const PlaylistDetails = (props) => {
    const { pid } = useParams();
    const { theme } = useContext(Context);
    const [channelPlaylistsVideos, setChannelPlaylistsVideos] = useState();
    useEffect(() => {
        fetchPlaylistVideos();
    }, [])

    const fetchPlaylistVideos = () => {
        fetchData(`playlist?id=${pid}`).then((res) => {
            setChannelPlaylistsVideos(res.data);
        })
    }
    return (
        <>{channelPlaylistsVideos ?
            <div className='mb-[50px]'>
                <div className='flex justify-center'>
                    {
                        channelPlaylistsVideos &&
                        <div className={`mt-[80px] rounded-lg w-96 p-5 text-${theme === 'light' ? 'black' : 'white'} border-2 ${theme === 'light' ? 'border-black' : 'border-white'}`} style={{ backgroundColor: `${theme === 'light' ? '#FFFBF5' : '#141414'}` }}>
                            <div className='w-full relative'>
                                <img src={channelPlaylistsVideos.meta.thumbnail[3].url || channelPlaylistsVideos.meta.thumbnail[0].url} className='w-full' alt="thumbnail" />
                                <div className='text-white text-center absolute right-2 bottom-2'>
                                    <img src="/images/playlist.png" className='w-7' alt="playlist" />
                                </div>
                            </div>
                            <div className='ml-3'>
                                <h1 className='font-bold mt-2 text-lg'>{channelPlaylistsVideos.meta.title}</h1>
                                <h3 className='font-semibold mt-2 text-sm'>{channelPlaylistsVideos.meta.channelTitle}</h3>
                                <div className='flex mt-3'>
                                    <h5 className='text-xs'>{channelPlaylistsVideos.meta.videoCountText}</h5>
                                    <h5 className='text-xs ml-3'>{channelPlaylistsVideos.meta.viewCountText}</h5>
                                    <h5 className='text-xs ml-3'>{channelPlaylistsVideos.meta.lastUpdated}</h5>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <hr className='my-3' />

                <div className='flex flex-wrap justify-center'>
                    {
                        channelPlaylistsVideos &&
                        channelPlaylistsVideos.data.map((elem, index) => {
                            return <PlaylistVideoCard video={elem} key={index} />
                        })
                    }
                </div>
            </div>
            :
            <Spinner />
        }
        </>
    )
}

export default PlaylistDetails