import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import {movieApi} from "../../api";

const HomeContainer = () => {
    
    const [movieData, setMovieData] = useState({
        nowPlaying : null,
        upcoming : null,
        popular : null
    })

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        getMovieData()
    }, [])

    const getMovieData = async () => {
        
        setLoading(true);
        try{
           const {data : {results : nowPlaying}} = await movieApi.nowPlaying();
           const {data : {results : upcoming}} = await movieApi.upcoming();
           const {data : {results : popular}} = await movieApi.popular();
        
           setMovieData({
               ...movieData,
               nowPlaying : nowPlaying,
               upcoming : upcoming,
               popular : popular
           })

        }catch{
            setError("Can't find movie data")
        }finally{
            setLoading(false);
        }
        
    }

    return(
        <HomePresenter movieData={movieData} loading={loading} error={error}></HomePresenter>
    )
}

export default HomeContainer;
