import React from "react";
import Loader from "../../Components/Loader";
import styled from "styled-components";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import { MOVIE_TYPE } from "../../Components/Type";
import Message from "../../Components/Message";

const Container = styled.div`
    padding : 20px;
`;


const HomePresenter = ({movieData : {nowPlaying, popular, upcoming}, loading, error}) => {

    return(
        <>
        {loading ? <Loader /> : 
            <Container>
                {nowPlaying && nowPlaying.length > 0 && (
                    <Section title="Now Playing">
                        {nowPlaying.map(movie=>
                            <Poster
                                key={movie.id}
                                type={MOVIE_TYPE}
                                id={movie.id}
                                image={movie.poster_path}
                                title={movie.title}
                                rating={movie.vote_average}
                                year={movie.release_date && movie.release_date.split("-")[0]}
                            >
                            
                            </Poster>
                        )}
                    </Section>
                )}
                {popular && popular.length > 0 && (
                    <Section title="Popular">
                        {popular.map(movie=>
                            <Poster
                                key={movie.id}
                                type={MOVIE_TYPE}
                                id={movie.id}
                                image={movie.poster_path}
                                title={movie.title}
                                rating={movie.vote_average}
                                year={movie.release_date && movie.release_date.split("-")[0]}
                            >
                            
                            </Poster>
                        )}
                    </Section>
                )}
                {upcoming && upcoming.length > 0 && (
                    <Section title="Upcoming">
                        {nowPlaying.map(movie=>
                            <Poster
                                key={movie.id}
                                type={MOVIE_TYPE}
                                id={movie.id}
                                image={movie.poster_path}
                                title={movie.title}
                                rating={movie.vote_average}
                                year={movie.release_date && movie.release_date.split("-")[0]}
                            >
                            
                            </Poster>
                        )}
                    </Section>
                )}
            
                {error && <Message text={error} color="red"></Message>}

            </Container>
        }
        </>
    )
}

export default HomePresenter;
