import React, {useEffect} from "react";

const HomePresenter = ({loading, popular}) => {

    return(
        loading ? "loading" : (
            <span>
                {popular && popular.length>0 && console.log(popular)}
            </span>
        )
    )
}

export default HomePresenter;
