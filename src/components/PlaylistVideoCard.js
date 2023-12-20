import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
const PlaylistVideoCard = (props) => {
    const { video } = props;
    const Navigate = useNavigate();
    const { theme } = useContext(Context);
    const Render = () => {
        Navigate(`/video/${video.videoId}/${video.channelId}`)
    }
    return (
        <>
            <div className={`flex flex-col w-[330px] m-3 text-${theme === 'light' ? 'black' : 'white'}`}>
                <div className='w-full relative'>
                    <img src={video?.thumbnail[2]?.url || video?.thumbnail[0]?.url} onClick={Render} className='w-full rounded-xl object-cover mainpage-thumbnail cursor-pointer' alt="logo" />
                    <div className='text-white text-center absolute right-2 bottom-2'>
                        <h5 className={`${video.lengthText === 'LIVE' ? 'bg-red-600' : 'bg-black'} px-1  rounded-[7px] text-xs`}>{video.isLive ? <p> • {video.lengthText}</p> : <p>{video.lengthText}</p>}</h5>
                    </div>
                </div>
                <div className='flex px-3 my-2'>
                    <div className='mx-3'>
                        <h4 className='leading-5 font-bold text-xs mainpage-title'>{video?.title}</h4>
                        <div className='my-1 text-gray-00'>
                            <div className='flex sm:text-xs mainpage-channelTitle'>
                                <h4 className='font-semibold'>{video.channelTitle} </h4>
                                <img src="/images/verify.png" className='self-center mx-2 w-3' alt="verify" />
                            </div>
                            <div className='mt-1'>
                                {video.isLive ? <img src='/images/live.png' className='w-4' alt='live' /> : <h4 className='mainpage-channelTitle sm:text-xs'>{video.viewCountText} • {video.publishedTimeText} </h4>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlaylistVideoCard