import React, {useState, useEffect} from "react";
import TVShowPresenter from "./TVShowPresenter";
import { tvShowApi } from "../../api";

const TVShowContainer = () => {
    
    const [tvData, setTVData] = useState({
        topRated : null,
        airingToday : null,
        popular : null
    })

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        getTvData()
    }, [])

    const getTvData = async () => {

        setLoading(true);

        try{
           const {data : {results : topRated}} = await tvShowApi.topRated();
           const {data : {results : airingToday}} = await tvShowApi.airingToday();
           const {data : {results : popular}} = await tvShowApi.popular();

           setTVData({
               topRated : topRated,
               airingToday : airingToday,
               popular : popular
           })

        }catch{
            setError("Can't find movie data");
        }finally{
            setLoading(false)
        }
    }

    return(
        <TVShowPresenter tvData={tvData} loading={loading} error={error}></TVShowPresenter>
    )
}

export default TVShowContainer;
