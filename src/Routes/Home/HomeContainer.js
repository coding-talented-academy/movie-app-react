import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import {movieApi} from "../../api";

const HomeContainer = () => {
    
    //react state
    const [movieData, setMovieData] = useState({
        nowPlaying : null,
        upcoming : null,
        popular : null,
        loading : true,
        error : null
    })

    useEffect(()=>{
        getMovieData()
    }, [])

    const getMovieData = async () => {

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
            setMovieData({
                ...movieData,
                error : "Can't find movie data"
            })
        }finally{
            setMovieData({
                ...movieData,
                loading : false
            })
        }
        
    }

    return(
        <HomePresenter movieData={movieData}></HomePresenter>
    )
}

export default HomeContainer;
