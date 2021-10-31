import React, {useEffect} from "react";
import Section from "../../Components/Section";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Poster from "../../Components/Poster";

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

    // (조건문) ? (true 일때 실행) : (false 일때 실행)
    console.log(movieData)
    //release_date: "2021-07-07"

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
                            id={movie.id}
                            title={movie.title}
                            image={movie.poster_path}
                            rating={movie.vote_average}
                            year={movie.release_date.split("-")[0]}
                            >
                        
                        </Poster>
                    )}
                </Section>
               }               

               {tvData && tvData.length > 0 && 
                    <Section title="TVShow Results">
                        {tvData.map(tv=>
                            <span key={tv.id}>{tv.name}</span>
                        )}
                    </Section>
               }
               
            </>
            }
            
        </Container>
    )
}

export default SearchPresenter;
