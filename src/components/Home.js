import React from 'react'
import colors from '../assets/colors'
import styled from "styled-components";
import Searchstyle from './styled/Searchstyle';

const div = styled.div`
background-color:${colors.Primary};
`
const Title = styled.h1`
  font-family: "DM Mono";
  font-weight: normal;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;


const Home = () => {
    return (
        <div>
            <Title>HoHo-NFT</Title>
            <Searchstyle/>
        </div>
    )
}

export default Home
