import React, {useContext, useEffect, useState } from 'react'
import { fetchData } from '../API/YoutubeAPI';
import VideoCard from '../components/VideoCard';
import ShortsCard from '../components/ShortsCard';
import Context from '../context/Context';

const Trending = () => {

    const {theme} = useContext(Context);
    const [trendingvideos, settrendingVideos] = useState('');

    useEffect(() => {
        fetchTrendingVideos();
    }, []);

    const fetchTrendingVideos = () => {
        fetchData(`trending?geo=IN`).then((res) => {
            settrendingVideos(res.data.data);
        })
    }

    return (
        <>
            <div className='mt-[60px] mb-[50px]'>

            <div className={`my-3 text-${theme === 'light'?'black':'white'}`}>
                <ul className='flex justify-evenly'>
                    <li className='font-semibold'><a href="#Recent">Recent Trendings</a></li>
                    <li className='font-semibold'><a href="#TrendV">Trendings</a></li>
                    <li className='font-semibold'><a href="#TrendS">Trending shorts</a></li>
                </ul>
            </div>
            <hr />
               {trendingvideos && <section className='flex flex-col items-center' id='Recent'>
                    <h1 className={`font-bold text-${theme === 'light'?'black':'white'} my-3`}>Recently Trending Videos</h1>
                    <div className='flex flex-wrap justify-center'>
                        {trendingvideos.filter((elem)=>{return elem.type === 'video_listing'})[1]&&
                            trendingvideos.filter((elem)=>{return elem.type === 'video_listing'})[1].data.map((elem, index) => {
                                return <VideoCard video={elem} key={index} />
                            })
                        }
                    </div>
                </section>}
<hr />
               {trendingvideos && <section className='flex flex-col items-center' id='TrendV'>
                    <h1 className={`font-bold text-${theme === 'light'?'black':'white'} my-3`}>Trending Videos</h1>
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

                { trendingvideos &&<section className='flex flex-col items-center' id='TrendS'>
                    <h1 className={`font-bold text-${theme === 'light'?'black':'white'} my-3`}>Trending Shorts</h1>
                    <div className='flex flex-wrap justify-center'>
                        {
                            trendingvideos.filter((elem) => { return elem.type === 'shorts_listing' })[0].data.map((elem, index) => {
                                return <ShortsCard video={elem} key={index} />
                            })
                        }
                    </div>
                </section>}
            </div>

        </>
    )
}

export default Trending