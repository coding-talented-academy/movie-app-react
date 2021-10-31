import styled from "styled-components";

const Container = styled.div`
    font-size : 15px;
`

const Image = styled.div`
    background-image : url(${props => props.bgUrl});
    background-size : cover;
    height : 150px;
`

const Rating = styled.span`
    opacity : 0;
`

const ImageContainer = styled.div`
    &:hover {
        ${Image}{
            opacity : 0.5;
        }

        ${Rating}{
            opacity : 1;
        }
    }
    position : relative;
`

const Title = styled.span`
`
const Year = styled.span`

`

const Poster = ({id, title, image, rating, year}) => {
    return (
        <Container>
            <ImageContainer>
                <Image bgUrl={`https://image.tmdb.org/t/p/w500${image}`}></Image>
                <Rating>
                    <span>⭐</span>
                    {rating}/10
                </Rating>
            </ImageContainer>

            <Title>{title}</Title>
            <Year>{year}</Year>
        </Container>
    )
}

export default Poster;