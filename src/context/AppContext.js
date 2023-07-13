/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import  Context  from './Context'
import { fetchData } from '../API/YoutubeAPI'

const AppContext = (props) => {

    const [loading,setLoading] = useState(true);
    const [selectCategory,setSelectedCategory] = useState('Bhajans');
    const [mainpageVideos,setMainPagevideos] = useState('');
    const [searchResult,setSearchResults] = useState('');
    const [searchcategory,setSearchcategory] = useState('Goldmines');
    const [channel,setChannel] = useState('');
    const [shortscategory,setShortsCategory] = useState('Bhajans');
    const [theme,setTheme] = useState('light');

    

    
    useEffect(()=>
    {
        fetchDataforSelectedCategory(selectCategory);
        setShortsCategory(selectCategory);
        themeChanger(theme);
    },[selectCategory,theme])

    const themeChanger = (color)=>
    {
      if(theme === 'light')
      {
         document.body.style.backgroundColor = 'white';
      }
      else
      {
        document.body.style.backgroundColor = 'black';
      }
    }
   const fetchDataforSelectedCategory = ()=>
   {
    setLoading(true);
       fetchData(`search?query=${selectCategory}&geo=IN`).then((res)=>
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
      setChannel,
      theme,
      setTheme,
      shortscategory,
      setShortsCategory}
      }>{props.children}</Context.Provider>
  )
}

export default AppContext