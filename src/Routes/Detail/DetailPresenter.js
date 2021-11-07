import React, {useEffect} from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader"

const Container = styled.div`
    width : 100%;
`

const BackDrop = styled.div`
    background-image : url(${props=>props.image});
    background-size : cover;
    position : absolute;
    top : 0;
    left : 0;
    height : 100%;
    width : 100%;
    z-index : -1;
    opacity : 0.5;
    filter : blur(3px);
`

const ContentBox = styled.div`
    z-index : 1;
    width : 100%;
    height : 100%;
    display : flex;
`

const Cover = styled.div`
    background-image : url(${props=>props.image});
    background-size : cover;
    width : 30%;
    height : 100%;
    background-position : center center;
    postition : relative;
`
const Data = styled.div`
    width : 70%;
`

const Title = styled.h3`
    font-size : 50px;
`

const InfoBox = styled.div`
`

const InfoItem = styled.span`
`

const Divider = styled.span`
    margin : 0 3px;
`
const Overview = styled.p`
    font-size : 15px;
`

const DetailPresenter = ({detailData, error, loading}) => {

    return(
        <>
        {loading ? <Loader /> : 
            <Container>
                <BackDrop image={detailData.backdrop_path ? `https://image.tmdb.org/t/p/original${detailData.backdrop_path}` : `https://image.tmdb.org/t/p/original${detailData.poster_path}`}></BackDrop>
                
                <ContentBox>
                    <Cover></Cover>
                    <Data>
                        <Title></Title>
                        <InfoBox>
                            <InfoItem>release date</InfoItem>
                            <Divider>/</Divider>
                            <InfoItem>running time</InfoItem>
                            <Divider>/</Divider>
                            <InfoItem>genre</InfoItem>
                        </InfoBox>

                        <Overview></Overview>
                    </Data>
                </ContentBox>
            </Container>
        }
        </>
    )
}

export default DetailPresenter;
