import React from 'react'
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

const ShortVideos = (props) => {
    // const { video } = props;
    const {id} = useParams();
    
    return (
        <>
            <div className='flex justify-center relative mt-[60px] items-center'>
            <div className='bg-gray-500 rounded-full mr-3'>
            <i className="fa-sharp fa-solid fa-arrow-right fa-flip-horizontal fa-2xl text-white py-4 px-1"></i>
            </div>
                <div className='relative flex justify-center'>
                    <div className='h-[650px] w-[370px]'>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} playing={true} loop={true} width='100%' height='100%' controls />
                    </div>
                </div>
                 <div className='bg-gray-500 rounded-full ml-3 '>
                 <i className="fa-sharp fa-solid fa-arrow-right fa-2xl text-white py-4 px-1"></i>
                 </div>
            </div>
        </>
    )
}

export default ShortVideos