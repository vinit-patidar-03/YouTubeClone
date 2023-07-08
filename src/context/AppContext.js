import React, { useEffect, useState } from 'react'
import  Context  from './Context'
import { fetchData } from '../API/YoutubeAPI'

const AppContext = (props) => {

     const [loading,setLoading] = useState(true);
    const [selectCategory,setSelectedCategory] = useState('Bhajans');
    const [mainpageVideos,setMainPagevideos] = useState('');
    const [searchResult,setSearResults] = useState('');
    const [searchcategory,setSearchcategory] = useState('');
    const [channel,setChannel] = useState('');

    
    useEffect(()=>
    {
        fetchDataforSelectedCategory(selectCategory);
    },[selectCategory])

   const fetchDataforSelectedCategory = (query)=>
   {
    setLoading(true);
       fetchData(`search?query=${query}`).then((res)=>
       {
          console.log(res.data.data);
          setMainPagevideos(res.data.data);
          setLoading(false);
       })
   }
  return(
    <Context.Provider value = {{selectCategory,setSelectedCategory,mainpageVideos,setMainPagevideos,loading,setLoading,searchResult,setSearResults,searchcategory,setSearchcategory,channel,setChannel}}>{props.children}</Context.Provider>
  )
}

export default AppContext