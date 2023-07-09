import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../API/YoutubeAPI';
import SuggestVideoCard from './SuggestVideoCard';

const SuggestVideo = () => {

  const {id} = useParams();
  const [related,setRelated] = useState('');

  useEffect(()=>
  {
     fetchRelatedContent(id)
  },[id])

  const fetchRelatedContent = (Id)=>
  {
     fetchData(`related?id=${Id}`).then((res)=>
     {
      console.log(res.data.data);
          setRelated(res.data.data);
     })
  }
  return (
    <>
        <div className='absolute right-0 top-20 w-[400px]'>
            {
                related.length !==0 && related.map((elem,index)=>
                {
                    return <SuggestVideoCard video={elem} key={index}/>
                })
            }
        </div>
    </>
  )
}

export default SuggestVideo;