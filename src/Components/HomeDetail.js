import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 75vh;
`;

const ContainerBg = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.bgImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; 
    opacity: .2;
    z-index: -1;
`;

const ContainerInfo = styled.div`
    width: calc(100% - 5vw);
    height: 100%;
    margin: 0 2.5vw;
    padding-top: 19vh;
    border-bottom: 1px solid;
    border-image: linear-gradient(to right, #333, #ccc, #333);
    border-image-slice: 1;
    position: relative;
    animation: appearInfo 2s;
    @keyframes appearInfo {
        from{opacity: 0; left: -3rem;}
        to{opacity: 1; left: 0;}
    }
`;

const TagLine = styled.h1`
    font-size: 2.2rem;
    font-style: italic;
    font-weight: 500;
    color: #aaa;
    margin-bottom: 5vh;
    margin-left: -.5vw;
    
`;

const Title = styled.h2`
    font-size: 1.4rem;
    margin-bottom: 2.5vh;
`;

const InfoList = styled.ul`
    
`;

const Infos = styled.li`
    margin-bottom: 1.2vh;
    font-size: .7rem;
`;

const Description = styled.p`
    width: 70%;
    max-width: 50vw;
    line-height: 1.5;
    font-weight: lighter;
    font-size: .9rem;
    margin-top: 2vh;
`;

const DetailLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vw;
    height: 4.5vh;
    background: linear-gradient(156deg, rgba(245,239,88,1) 0%, rgba(60,137,228,1) 100%);
    border-radius: 0 .8rem;
    font-size: .9rem;
    margin-top: 4vh; 
    transition: opacity .5s;
    &:hover{
        opacity: .7;
    }
`;


const HomeDetail = (props) => {
    
    return (
        <Container>
            <ContainerBg bgImg={`https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`} />
            <ContainerInfo>
                <TagLine>{props.movie.tagline ? `"${props.movie.tagline}"` : `"Movie is always right"` }</TagLine>
                <Title>{props.movie.title}</Title>
                <InfoList>
                    <Infos>{props.movie.genres.map((genre, index) => index === props.movie.genres.length -1 ? genre.name : genre.name + " · ")}</Infos>
                    <Infos>{props.movie.release_date.slice(0, 4)} · {props.movie.runtime} min</Infos>
                    <Infos>⭐️ {props.movie.vote_average}</Infos>
                    <Infos><Description>{props.movie.overview}</Description></Infos>
                </InfoList>
                <DetailLink to={`/movie-detail/${props.movie.id}`}>Movie Detail</DetailLink>
            </ContainerInfo>
        </Container>
    )
};

export default HomeDetail;