/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube';
import { fetchData } from '../API/YoutubeAPI';
import { useNavigate, useParams } from 'react-router-dom';
import Context from '../context/Context';

const Video = () => {
    const { channel, setChannel } = useContext(Context);
    const { id, cid } = useParams();
    const Navigate = useNavigate();
    const [videodetail, setVideoDetail] = useState('');
    console.log(id, cid);

    useEffect(() => {
        fetchDetails(id);
        fetchChannel(cid)
    }, [id, cid])

    const gotoChannel = ()=>
    {
       Navigate(`/channelDetails/${cid}`)
    }


    const fetchDetails = (Id) => {
        fetchData(`video/info?id=${Id}`).then((res) => {
            console.log(res);
            setVideoDetail(res.data);
        })
    }

    const fetchChannel = (Id) => {
        fetchData(`channel/home?id=${Id}`).then((res) => {
            console.log(res);
            setChannel(res.data);
        })
    }
    console.log(videodetail);
    return (
        <>
            {videodetail.length !== 0 && channel ?
                <div className='flex flex-col relative Video'>
                    <div className='playedVideo'>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} playing={true} width='100%' height='100%' controls />
                    </div>
                    <h1 className='text-lg font-semibold mt-2 videoTitle'>{videodetail.title}</h1>
                    <div className='flex mt-2 relative items-center videoChannelDetail'>
                        <img src={channel.meta.avatar[0].url} width='40px' className='rounded-full self-start' alt="channel" />
                        <div onClick={()=>{gotoChannel()}}>
                            <h4 className='flex font-bold ml-2 videoChannelTitle cursor-pointer'>{videodetail.channelTitle} <img src="/images/verify.png" width="20px" className='self-center mx-2' alt="verify" /></h4>
                            {channel.meta.subscriberCountText ? <h1 className='ml-2 text-sm videoSubCount'>{channel.meta.subscriberCountText} subscribers</h1> : ' '}
                            <h4 className='text-sm ml-2 videoSubCount'>{videodetail.viewCount} views</h4>
                        </div>
                        <button className='bg-black text-white py-2 font-semibold ml-5 px-4 rounded-full cursor-pointer hover:bg-gray-900 btn'>Subscribe</button>
                    </div>
                </div>
                : ''}
        </>
    )
}

export default Video;