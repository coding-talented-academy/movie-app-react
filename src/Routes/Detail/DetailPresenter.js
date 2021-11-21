import React, {useEffect} from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader"
import Message from "../../Components/Message";

const Container = styled.div`
    width : 100%;
    position : relative;
    padding : 50px;
    height : calc(100vh - 50px);
`

const BackDrop = styled.div`
    background-image : url(${props=>props.image});
    background-position : center center;
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
    position : relative;
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
    margin-left : 30px;
`

const Title = styled.h3`
    font-size : 50px;
`

const InfoBox = styled.div`
    margin-top : 30px;
    font-size : 17px;
`

const InfoItem = styled.span`
`

const Divider = styled.span`
    margin : 0 3px;
`
const Overview = styled.p`
    font-size : 15px;
    line-height : 1.5;
    opacity : 0.7;
    width : 50%;
    margin-top : 30px;
`

const IMAGE_PREFIX = "https://image.tmdb.org/t/p/original"

const DetailPresenter = ({type, detailData, error, loading}) => {

    useEffect(()=>{
        if(detailData !== null){
            console.log(detailData)
        }
    },[detailData])

    return(
        <>
        {loading ? <Loader /> : 
            <Container>
                <BackDrop image={detailData.backdrop_path ? `${IMAGE_PREFIX}${detailData.backdrop_path}` : `${IMAGE_PREFIX}${detailData.poster_path}`}></BackDrop>
                
                <ContentBox>
                    <Cover image={detailData.poster_path ? `${IMAGE_PREFIX}${detailData.poster_path}` : require("../../Assets/not-found-image.jpg").default}></Cover>
                    <Data>
                        <Title>{detailData[type.title]}</Title>
                        <InfoBox>
                            <InfoItem>{detailData[type.date]}</InfoItem>
                            <Divider>🔸</Divider>
                            <InfoItem>{Array.isArray(detailData[type.runningTime]) ? detailData[type.runningTime][0] : detailData[type.runningTime]}min</InfoItem>
                            <Divider>🔸</Divider>
                            <InfoItem>{detailData.genres && detailData.genres.map(genre=>genre.name).join(" / ")}</InfoItem>
                        </InfoBox>

                        <Overview>{detailData.overview}</Overview>
                    </Data>
                </ContentBox>
                {error && <Message text={error} color="red"></Message>}

            </Container>
        }

        </>
    )
}

export default DetailPresenter;
