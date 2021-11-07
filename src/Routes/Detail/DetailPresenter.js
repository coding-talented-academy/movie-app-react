import React, {useEffect} from "react";

const DetailPresenter = ({detailData, error, loading}) => {
    useEffect(()=>{
        console.log(detailData)
    },[detailData])

    return(
        "detail presenter"
    )
}

export default DetailPresenter;
