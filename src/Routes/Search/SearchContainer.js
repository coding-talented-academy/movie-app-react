import React, {useState} from "react";
import { movieApi, tvShowApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {

    const [searchData, setSearchData] = useState({
        movieData : null,
        tvData : null
    })
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();
        
        let keyword = event.target[0].value;
        
        getSearchData(keyword)
    }

    const getSearchData = async (keyword) => {

        setLoading(true);

        try{
            const {data : movieData} = await movieApi.search(keyword);
            const {data : tvData} = await tvShowApi.search(keyword);
            
            setSearchData({
                movieData : movieData,
                tvData : tvData
            })

        }catch{
            setError("Can't find search result")
        }finally{
            setLoading(false)
        }
    }

    return(
        <SearchPresenter 
            searchData={searchData} 
            loading={loading} 
            error={error} 
            handleSubmit={handleSubmit}>
        </SearchPresenter>
    )
}

export default SearchContainer;
