import React, {useEffect, useState} from "react";
import { movieApi, tvShowApi } from "../../api";
import DetailPresenter from "./DetailPresenter";
import {MOVIE_TYPE, TV_SHOW_TYPE} from "../../Components/Type"

const DetailContainer = ({match : {params : {id}, path}, history : {push}}) => {

    useEffect(()=>{
        if(isNaN(id)){
            return push("/home");
        }
        getDetailData();
    },[id])

    const [detailData, setDetailData] = useState(null);
    const [type, setType] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getDetailData = async () => {
        
        setLoading(true);

        try{
            if(path.includes("/movie")){
                const {data} = await movieApi.detail(id);
                setDetailData(data);
                setType(MOVIE_TYPE);

            }else if(path.includes("/tv")){
                const {data} = await tvShowApi.detail(id)
                setDetailData(data);
                setType(TV_SHOW_TYPE)
            }
        }catch{
            setError("Can't find anything..");
        }finally{
            setLoading(false)
        }

    }


    return(
        <DetailPresenter detailData={detailData} type={type} error={error} loading={loading}></DetailPresenter>
    )
}

export default DetailContainer;
