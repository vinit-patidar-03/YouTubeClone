import React, { useContext, useEffect } from 'react'
import Context from '../context/Context';
import SearchResultCard from '../components/SearchResultCard';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../API/YoutubeAPI';

const SearchResults = () => {
    const { searchcategory, searchResult, setSearchResults, setShortsCategory } = useContext(Context);
    const Navigate = useNavigate();

    useEffect(() => {
        fetchSearchResult(searchcategory);
        setShortsCategory(searchcategory);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchcategory])



    const fetchSearchResult = (e) => {
        fetchData(`search?query=${e}`).then((res) => {
            setSearchResults(res.data.data);
        })
    }

    const watch = (e) => {
        Navigate(`video/${e}`)
    }

    return (
        <>{
            <div className='flex flex-col items-center w-[calc(100vw-83px)] top-[100px] p-3 left-[65px] relative searchresultpage mb-[120px]'>
                {
                    searchResult &&
                    searchResult.map((elem, index) => {
                        if (elem.type !== 'video') {
                            return false;
                        }
                        return <SearchResultCard video={elem} onClick={() => { watch(elem.videoId) }} key={index} />
                    })

                }
            </div>
        }
        </>
    )
}

export default SearchResults