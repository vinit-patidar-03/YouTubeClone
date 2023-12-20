import React, { useContext, useEffect, useState } from 'react'
import { fetchData } from '../API/YoutubeAPI';
import VideoCard from '../components/VideoCard';
import ShortsCard from '../components/ShortsCard';
import Context from '../context/Context';

const Trending = () => {

    const { theme } = useContext(Context);
    const [trendingvideos, settrendingVideos] = useState('');
    const [page, setPage] = useState(0);

    useEffect(() => {
        fetchTrendingVideos();
        moveTotop();
    }, []);

    const fetchTrendingVideos = () => {
        fetchData(`trending?geo=IN`).then((res) => {
            settrendingVideos(res.data.data);
        })
    }

    const moveTotop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const ChangePage = (e) => {
        if (e === 'incr' && page !== trendingvideos.filter((elem) => { return elem.type === 'video_listing' }).length - 1) {
            setPage(page + 1);
        }
        else if (page !== 0) {
            setPage(page - 1);
        }

    }

    return (
        <>
            {trendingvideos &&
                <div className='mt-[60px] mb-[50px]'>

                    <div className={`my-3 text-${theme === 'light' ? 'black' : 'white'}`}>
                        <ul className='flex justify-evenly'>
                            <li className='font-semibold'><a href="#Recent">Recent Trendings</a></li>
                            <li className='font-semibold'><a href="#TrendV">Trendings</a></li>
                            <li className='font-semibold'><a href="#TrendS">Trending shorts</a></li>
                        </ul>
                    </div>
                    <hr />
                    {trendingvideos && <section className='flex flex-col py-[60px] items-center' id='Recent'>
                        <h1 className={`font-bold text-${theme === 'light' ? 'black' : 'white'} mb-5`}>Recently Trending Videos</h1>
                        <div className='flex flex-wrap justify-center'>
                            {trendingvideos.filter((elem) => { return elem.type === 'video_listing' })[page] &&
                                trendingvideos.filter((elem) => { return elem.type === 'video_listing' })[page].data.map((elem, index) => {
                                    return <VideoCard video={elem} key={index} />
                                })
                            }
                        </div>
                        <div className='w-full flex justify-evenly'>
                            <button onClick={() => { ChangePage('decr') }} className='py-2 px-5 bg-black text-white rounded-full font-semibold'>Previous</button>
                            <button onClick={() => { ChangePage('incr') }} className='py-2 px-5 bg-black text-white rounded-full font-semibold'>Next</button>
                        </div>
                    </section>
                    }
                    <hr className='my-2' />
                    {trendingvideos && <section className='flex flex-col py-[60px] items-center' id='TrendV'>
                        <h1 className={`font-bold text-${theme === 'light' ? 'black' : 'white'} mb-5`}>Trending Videos</h1>
                        <div className='flex flex-wrap justify-center'>
                            {
                                trendingvideos.map((elem, index) => {
                                    if (elem.type !== 'video') {
                                        return false;
                                    }
                                    return <VideoCard video={elem} key={index} />
                                })
                            }
                        </div>

                    </section>}

                    <hr />

                    {trendingvideos && <section className='flex flex-col py-[60px] items-center' id='TrendS'>
                        <h1 className={`font-bold text-${theme === 'light' ? 'black' : 'white'} mb-5`}>Trending Shorts</h1>
                        <div className='flex flex-wrap justify-center'>
                            {
                                trendingvideos.filter((elem) => { return elem.type === 'shorts_listing' })[0].data.map((elem, index) => {
                                    return <ShortsCard video={elem} key={index} />
                                })
                            }
                        </div>
                    </section>}
                    <div className={`fixed right-[10px] bottom-[55px] cursor-pointer flex justify-center items-center rounded-full w-10 h-10 bg-${theme === 'light' ? 'white' : 'black'}`} onClick={moveTotop}>
                        <i className={`fa-solid fa-arrow-up fa-lg text-${theme === 'light' ? 'black' : 'white'}`}></i>
                    </div>
                </div>
            }
        </>
    )
}

export default Trending