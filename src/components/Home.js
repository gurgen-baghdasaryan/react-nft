import React from 'react'

import styled from "styled-components";
import Searchstyle from './styled/Searchstyle';
import Tabstyle from './styled/Tabstyle';

import FeaturedTab from './FeaturedTab'
import MyFavorits from './MyFavorits';
import Pagestyles from './styled/Pagestyles';


const tabs = [
    { id: 1, title: "Featured", content: <FeaturedTab />, },
    { id: 2, title: "Collections", content: <div>Tab2</div>, },
    { id: 3, title: "Artists", content: <div>Tab3</div>, },
    { id: 4, title: "Tag", content: <div>Tab4</div>, },
];



const Title = styled.h1`
    font-family: "DM Mono";
    font-weight: normal;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 2rem;
`;


const Home = () => {
    return (
        <Pagestyles>
            <Title>EVELUTION NFT</Title>
            <Searchstyle />
            <Tabstyle tabs={tabs} />
            <MyFavorits />
        </Pagestyles>
    )
}

export default Home
