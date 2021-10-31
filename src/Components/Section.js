import styled from "styled-components"


const Container = styled.div`
`;

const Title = styled.span`
    font-size : 15px;
    font-weight : 500;
`;


const Grid = styled.div`
    display : grid;
    grid-template-columns : repeat(auto-fill, 125px);
    grid-gap : 20px;
`;

const Section = ({title, children}) => {
    return(
        <Container>
            <Title>{title}</Title>
            <Grid>{children}</Grid>
        </Container>
    )
}

export default Section;