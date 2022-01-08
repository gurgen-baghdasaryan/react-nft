import React from 'react'

import { BsThreeDots } from 'react-icons/bs';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'

import colors from '../assets/colors';
import styled from "styled-components";
import Button from './styled/Buttonstyle';
import Pagestyles from './styled/Pagestyles'
import ProductCard from './styled/ProductCardstyle';

const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  margin: 0 1.5rem;
`;
const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

const HoldBid = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  background-color: ${colors.Primary};
  color: ${colors.CardBackground};
  border-radius: 12px;
  padding: 1rem;
  margin: 0 0.5rem;
  column-gap: 0.5rem;
  margin-top: 1rem;
  & > svg {
    font-size: 1.5rem;
  }
`;

const HoldBidText = styled.span`
  flex: 1;
`;

const ProductPage = () => {
    const nav = useNavigate();
    return (

        <Pagestyles>
            <TopMenu>
                <FiArrowLeft onClick={() => {
                    nav(-1);

                }} />
                <Title>Artwork</Title>
                <BsThreeDots /> 
            </TopMenu>
            <ProductCard />
            <HoldBid> 
                <AiOutlineShoppingCart/>
                <HoldBidText>
                    Confirm 2.3 Eth bid
                </HoldBidText>
                <Button>Holt to bid</Button>
            </HoldBid>
        </Pagestyles>

    )
}

export default ProductPage
