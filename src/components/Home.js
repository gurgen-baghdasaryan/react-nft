import React from 'react'
import colors from '../assets/colors'
import styled from "styled-components";
import Searchstyle from './styled/Searchstyle';

const HomeEl = styled.div`
    background-color: ${colors.CardBackground};
    flex: 1;
    padding-bottom:10vh; 
    overflow:auto;
    overflow-x:hidden;
    min-height:min-content;
    padding-top:1rem;
    scrollbar-width: 0;
    ::-webkit-scrollbar{
        display:none; 
    }

`;

const Title = styled.h1`
  font-family: "DM Mono";
  font-weight: normal;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;


const Home = () => {
    return (
        <HomeEl className="home">
            <Title>HoHo-NFT</Title>
            <Searchstyle />
        </HomeEl>
    )
}

export default Home
