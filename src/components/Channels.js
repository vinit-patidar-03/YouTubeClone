import React from 'react'
import { useNavigate } from 'react-router-dom';

const Channels = (props) => {
    const { video } = props;
    const Navigate = useNavigate();
    return (
        <>
            <div className='flex items-center mx-5 my-3'>
                <div>
                    <img src={video?.thumbnail[1]?.url} className='rounded-full w-[100px]' alt="Channel" />
                </div>
                <div className='ml-5'>
                    <h3 className='font-bold cursor-pointer' onClick={() => { Navigate(`/channelDetails/${video.channelId}`) }}>{video.title}</h3>
                    <div className='flex text-sm'>
                        <h5>{video.subscriberCount} subscribers</h5>
                        <h6 className='ml-3'>{video.videoCount} videos</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Channels