/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import  Context  from './Context'
import { fetchData } from '../API/YoutubeAPI'

const AppContext = (props) => {

    const [loading,setLoading] = useState(true);
    const [selectCategory,setSelectedCategory] = useState('Bhajans');
    const [mainpageVideos,setMainPagevideos] = useState('');
    const [searchResult,setSearchResults] = useState('');
    const [searchcategory,setSearchcategory] = useState('GoldMines');
    const [channel,setChannel] = useState('');

    
    useEffect(()=>
    {
        fetchDataforSelectedCategory(selectCategory);
    },[selectCategory])

   const fetchDataforSelectedCategory = ()=>
   {
    setLoading(true);
       fetchData(`search?query=${selectCategory}`).then((res)=>
       {
          setMainPagevideos(res.data.data);
          setLoading(false);
       })
   }

  return(
    <Context.Provider value = {
      {selectCategory,
      setSelectedCategory,
      mainpageVideos,
      setMainPagevideos,
      loading,
      setLoading,
      searchResult,
      setSearchResults,
      searchcategory,
      setSearchcategory,
      channel,
      setChannel}
      }>{props.children}</Context.Provider>
  )
}

export default AppContext