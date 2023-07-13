import React,{useContext, useEffect, useState} from 'react'
import { fetchData } from '../API/YoutubeAPI'
import VideoCard from '../components/VideoCard';
import Context from '../context/Context';

const TreasureHunt = () => {

    const {theme} = useContext(Context);
    const [treasure,setTreasure] = useState('');

    useEffect(()=>
    {
          fetchHomeData();
    },[])
  
    const fetchHomeData = ()=>
    {
      fetchData(`home?geo=IN`).then((res)=>
      {
        setTreasure(res.data.data);
      })
    }
  return (
    <>
      <div className='mt-[60px] mb-[50px]'>
          <h4 className={`text-center font-bold ${theme === 'light'?'text-black':'text-white'}`}>Treasure for You</h4>
          <hr />
          <div className='flex flex-wrap'>
            { treasure &&
               treasure.map((elem,index)=>
               {
                if(elem.type !== 'video')
                {
                    return false;
                }
                   return <VideoCard  video={elem} key={index}/>
               })
            }
          </div>
      </div>
    </>
  )
}

export default TreasureHunt