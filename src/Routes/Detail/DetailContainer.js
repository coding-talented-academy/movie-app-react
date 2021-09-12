import React, {useEffect, useState} from "react";
import { movieApi, tvShowApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = ({match : {params : {id}, path}, history : {push}}) => {

    useEffect(()=>{
        if(isNaN(id)){
            return push("/home");
        }
        getDetailData();
    },[id])

    const [detailData, setDetailData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getDetailData = async () => {
        
        setLoading(true);

        try{
            if(path.includes("/movie")){
                const {data} = await movieApi.detail(id);
                setDetailData(data);

            }else if(path.includes("/tv")){
                const {data} = await tvShowApi.detail(id)
                setDetailData(data);
            }
        }catch{
            setError("Can't find anything..");
        }finally{
            setLoading(false)
        }

    }


    return(
        <DetailPresenter detailData={detailData} error={error} loading={loading}></DetailPresenter>
    )
}

export default DetailContainer;
