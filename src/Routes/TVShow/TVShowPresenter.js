import React from "react";
import Loader from "../../Components/Loader"
import Section from "../../Components/Section"
import Poster from "../../Components/Poster"
import styled from "styled-components";

const Container = styled.div`
    padding : 20px;
`

const TVShowPresenter = ({tvData : {topRated, popular, airingToday}, loading, error}) => {
    return(
        <>
            {loading ? <Loader /> : 
                <Container>
                    {topRated && topRated.length > 0 &&
                        <Section title="Top Rated">
                            {topRated.map(tv=>
                                <Poster
                                    key={tv.id}
                                    id={tv.id}
                                    image={tv.poster_path}
                                    title={tv.name}
                                    rating={tv.vote_average}
                                    year={tv.first_air_date && tv.first_air_date.split("-")[0]}
                                ></Poster>)}
                        </Section>
                     }
                     {popular && popular.length > 0 &&
                        <Section title="Popular">
                            {popular.map(tv=>
                                <Poster
                                    key={tv.id}
                                    id={tv.id}
                                    image={tv.poster_path}
                                    title={tv.name}
                                    rating={tv.vote_average}
                                    year={tv.first_air_date && tv.first_air_date.split("-")[0]}
                                ></Poster>)}
                        </Section>
                     }
                     {airingToday && airingToday.length > 0 &&
                        <Section title="Airing Today">
                            {airingToday.map(tv=>
                                <Poster
                                    key={tv.id}
                                    id={tv.id}
                                    image={tv.poster_path}
                                    title={tv.name}
                                    rating={tv.vote_average}
                                    year={tv.first_air_date && tv.first_air_date.split("-")[0]}
                                ></Poster>)}
                        </Section>
                     }
                </Container>
            }
        </>
    )
}

export default TVShowPresenter;
