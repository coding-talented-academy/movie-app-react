import React, {useEffect} from "react";

const HomePresenter = ({movieData, loading, error}) => {

    useEffect(()=>{
        if(movieData!==null){
            console.log(movieData)
        }
        
    },[movieData])

    return(
        "Home presenter"
    )
}

export default HomePresenter;
