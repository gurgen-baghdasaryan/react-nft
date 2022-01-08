import React from 'react'
import { useNavigate } from "react-router-dom";

import { RiSearchLine } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';
import { FiArrowLeft } from 'react-icons/fi';

import colors from '../assets/colors';
import styled from "styled-components";
import Tabstyle from './styled/Tabstyle';
import Img from "./styled/Imgstyles";
import storeImage2 from '../assets/img/shopImage2.png';


const StorePageEl = styled.div`
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

const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
  font-size: 1.5rem;
`;

const StorePage = () => {
    const nav = useNavigate();
    return (
        <StorePageEl>
            <TopMenu>
                <FiArrowLeft onClick={() => {
                    nav(-1);
                }} />
                <span>
                    <RiSearchLine style={{ marginRight:"1.5rem"}}/>
                    <BsThreeDots />
                </span>
            </TopMenu>
        </StorePageEl>
    )
}

export default StorePage
