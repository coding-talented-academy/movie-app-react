import React, {useEffect} from "react";
import Section from "../../Components/Section";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Poster from "../../Components/Poster";
import { MOVIE_TYPE, TV_SHOW_TYPE } from "../../Components/Type";
import Message from "../../Components/Message";

const Container = styled.div`
    padding : 20px;
`;

const Form = styled.form`
    width : 100%;
    margin-bottom : 50px;
`;

const Input = styled.input`
    all : unset;
    width : 100%;
    font-size : 30px;
`


const SearchPresenter = ({searchData : {movieData, tvData}, loading, error, handleSubmit}) => {
   
    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="Search Movies or TVShows..."></Input>
            </Form>

            {loading===true ? <Loader/> : 
            <>
               {movieData && movieData.length > 0 &&
                <Section title="Movie Results">
                    {movieData.map(movie => 
                        <Poster
                            key={movie.id}
                            type={MOVIE_TYPE}
                            id={movie.id}
                            title={movie.title}
                            image={movie.poster_path}
                            rating={movie.vote_average}
                            year={movie.release_date && movie.release_date.split("-")[0]}
                            >
                        
                        </Poster>
                    )}
                </Section>
                }               

               {tvData && tvData.length > 0 && 
                    <Section title="TVShow Results">
                        {tvData.map(tv=>
                            <Poster
                                key={tv.id}
                                type={TV_SHOW_TYPE}
                                id={tv.id}
                                title={tv.name}
                                image={tv.poster_path}
                                rating={tv.vote_average}
                                year={tv.first_air_date && tv.first_air_date.split("-")[0]}
                            >

                            </Poster>
                        )}
                    </Section>
               }
               {error && <Message text={error} color="red"></Message>}
               {tvData && movieData && tvData.length===0 && movieData.length===0 &&
                <Message text="No Search Result..." color="yellow"></Message>
               }
            </>
            }
            
        </Container>
    )
}

export default SearchPresenter;
