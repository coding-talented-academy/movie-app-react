import React from "react";

const SearchPresenter = ({handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit}>
            <input type="text"></input>
        </form>
    )
}

export default SearchPresenter;
