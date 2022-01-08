import React from 'react'
import { useNavigate } from "react-router-dom";

import { RiSearchLine } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';
import { FiArrowLeft } from 'react-icons/fi';

import styled from "styled-components";
import Tabstyle from './styled/Tabstyle';
import Img from "./styled/Imgstyles";
import storeImage2 from '../assets/img/shopImage2.png';
import StoreNFT from './StoreNFT';
import Pagestyles from './styled/Pagestyles'


const tabs = [
    { id: 1, title: "Artworks", content: <Img src={storeImage2} />, },
    { id: 2, title: "Collections", content: <div>Collections</div>, },
    { id: 3, title: "About", content: <div>About</div>, },
];




const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
  font-size: 1.5rem;
  cursor:pointer;
`;

const StorePage = () => {
    const nav = useNavigate();
    return (
        <Pagestyles>
            <TopMenu>
                <FiArrowLeft onClick={() => {
                    nav(-1);
                }} />
                <span>
                    <RiSearchLine style={{ marginRight: "1.5rem" }} />
                    <BsThreeDots />
                </span>
            </TopMenu>
            <StoreNFT />
            <Tabstyle tabs={tabs} />
        </Pagestyles>
    )
}

export default StorePage
