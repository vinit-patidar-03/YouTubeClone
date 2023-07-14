import React, { useContext, useEffect, useState } from 'react'
import { fetchData } from '../API/YoutubeAPI'
import VideoCard from '../components/VideoCard';
import Context from '../context/Context';
import ShortsCard from '../components/ShortsCard'

const TreasureHunt = () => {

  const { theme } = useContext(Context);
  const [treasure, setTreasure] = useState('');

  useEffect(() => {
    fetchHomeData();
  }, [])

  const fetchHomeData = () => {
    fetchData(`home?geo=IN`).then((res) => {
      setTreasure(res.data.data);
    })
  }

  return (
    <>
      <div className='mt-[60px] mb-[50px]'>
        <h4 className={`text-center font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Treasure for You</h4>
        <hr />
        <section>
          <h4 className={`text-center font-bold ${theme === 'light' ? 'text-black' : 'text-white'} py-5`}>Videos</h4>
          <div className='flex flex-wrap justify-center'>
            {treasure &&
              treasure.map((elem, index) => {
                if (elem.type !== 'video') {
                  return false;
                }
                return <VideoCard video={elem} key={index} />
              })
            }
          </div>

          <div className='flex flex-wrap justify-center'>
            {treasure &&
              treasure.filter((elem)=>{return elem.type === 'video_listing'})[0].data.map((elem, index) => {
                if (elem.type !== 'video') {
                  return false;
                }
                return <VideoCard video={elem} key={index} />
              })
            }
          </div>


        </section>
<hr />
        <section>
          <h4 className={`text-center font-bold ${theme === 'light' ? 'text-black' : 'text-white'} py-5`}>Shorts</h4>
          <div className='flex flex-wrap justify-center'>
            {treasure &&
              treasure.filter((elem) => {
                return elem.type === 'shorts_listing'
              })[0].data.map((elem, index) => {
                return <ShortsCard video={elem} key={index} />
              })

            }
          </div>

        </section>
      </div>
    </>
  )
}

export default TreasureHunt