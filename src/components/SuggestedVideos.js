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
          setRelated(res.data.data);
     })
  }

  console.log(related);
  return (
    <>
        <div className='suggestVideopage scroll-track mt-0'>
            {
                related.length !==0 && related.map((elem,index)=>
                {
                    if(elem.type !== 'video')
                    {
                        return false;
                    }
                    return <SuggestVideoCard video={elem} key={index}/>
                })
            }
        </div>
    </>
  )
}

export default SuggestVideo;