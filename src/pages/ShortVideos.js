/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import Context from '../context/Context'
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { fetchData } from '../API/YoutubeAPI';

const ShortVideos = () => {

    const { id } = useParams();
    const { mainpageVideos,setMainPagevideos,selectCategory} = useContext(Context);
    const [shortNo, setShortNo] = useState(0);

    useEffect(() => {
        fetchMainPageData();
    }, [])


    const fetchMainPageData = ()=>
    {
        fetchData(`search?query=${selectCategory}`).then((res)=>
        {
           setMainPagevideos(res.data.data);
        })
    }
    


    const changeShortPage = (e) => {
        if (e === 'incr' && shortNo !== mainpageVideos.filter((elem) => {return elem.type === 'shorts_listing'})[0].data.length - 1) {
            setShortNo(shortNo + 1);
        }
        else if (e === 'decr' && shortNo !== 0) {
            setShortNo(shortNo - 1);
        }
        else if (e === 'incr' && shortNo === mainpageVideos.filter((elem) => {return elem.type === 'shorts_listing'})[0].data.length - 1) {
            setShortNo(0);
        }
        else if (e === 'decr' && shortNo === 0) {
            setShortNo(mainpageVideos.filter((elem) => {return elem.type === 'shorts_listing'})[0].data.length - 1);
        }

    }
    return (
        <>
            {mainpageVideos && mainpageVideos.filter((elem) => {return elem.type === 'shorts_listing'}).length !== 0 && id === ':id'?
                <div className='flex justify-center items-center h-[100vh] relative'>
                    <div className='relative flex justify-center items-center p-3 bg-slate-300 rounded-xl h-[calc(100vh-160px)] w-[calc(0.5625*(100vh-140px))]'>
                        <div className=' w-full h-full shortPlayer'>
                            <ReactPlayer url={`https://www.youtube.com/watch?v=${mainpageVideos.filter((elem) => {return elem.type === 'shorts_listing'})[0].data[shortNo].videoId}`} playing={true} loop={true} width='100%' height='100%'/>
                        </div>
                        <div className=' absolute mx-2 flex justify-between w-[95%]'>
                        <div className='rounded-full mr-3 cursor-pointer' onClick={() => { changeShortPage('decr') }}>
                            <i className="fa-sharp fa-solid fa-arrow-right fa-flip-horizontal fa-2xl text-white py-4 px-1"></i>
                        </div>
                        <div className='rounded-full ml-3 cursor-pointer ' onClick={() => { changeShortPage('incr') }}>
                            <i className="fa-sharp fa-solid fa-arrow-right fa-2xl text-white py-4 px-1"></i>
                        </div>
                    </div>
                    <div className='absolute bottom-5 shortDetails ml-3 w-[95%]'>
                    <h5 className='text-white font-bold text-sm'>{mainpageVideos.filter((elem) => {return elem.type === 'shorts_listing'})[0].data[shortNo].title}</h5>
                    <h6 className='text-white text-xs'>{mainpageVideos.filter((elem) => {return elem.type === 'shorts_listing'})[0].data[shortNo].viewCountText}</h6>
                    </div>
                    </div>
                </div>:
                <div className='flex justify-center items-center relative h-[100vh]'>
                    <div className='relative flex justify-center items-center'>
                        <div className='h-[calc(100vh-120px)] w-[calc(0.5625*(100vh-120px))]'>
                            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} playing={true} loop={true} width='100%' height='100%'/>
                        </div>
                        <div className=' absolute left-0 flex justify-between w-full'>
                        <div className='rounded-full mr-3 cursor-pointer' onClick={() => { changeShortPage('decr') }}>
                            <i className="fa-sharp fa-solid fa-arrow-right fa-flip-horizontal fa-2xl text-white py-4 px-1"></i>
                        </div>
                        <div className='rounded-full ml-3 cursor-pointer ' onClick={() => { changeShortPage('incr') }}>
                            <i className="fa-sharp fa-solid fa-arrow-right fa-2xl text-white py-4 px-1"></i>
                        </div>
                    </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ShortVideos