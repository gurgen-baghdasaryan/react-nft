import React from 'react'


import styled from "styled-components";
import bidImage from '../assets/img/bidImage.png'
import colors from "../assets/colors";
import Img from "./styled/Imgstyles";

const MyBidsListEl = styled.div`
  padding: 0 1rem;
  margin-top: 1rem;
`;

const Title = styled.h3`
  font-weight: 500;
  margin-bottom: 1rem;
`;
const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const BidItemEl = styled.span`
  display: flex;
  padding: 0.5rem;
  cursor: pointer;
  width: 100%;
  align-items: center;
  transition-property: background-color, border-radius;
  transition-duration: 0.5s;
  &:hover {
    background-color: ${colors.GrayBorder};
    border-radius: 12px;
  }
`;

const BidData = styled.span`
  margin-left: 1rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  row-gap: 0.5rem;
  justify-content: center;
`;

const BTitle = styled.span`
  font-weight: 500;
`;

const BDes = styled.span`
  color: ${colors.Gray};
`;

const BidAmount = styled.span`
  font-weight: 500;
`;

function BidItem() {
  return (
    <BidItemEl>
      <Img width="4rem" height="4rem" borderRadius="12px" src={bidImage} />
      <BidData>
        <BTitle>Clay boyz Ho</BTitle>
        <BDes>Waldo</BDes>
      </BidData>
      <BidAmount>1.4 ETH</BidAmount>
    </BidItemEl>
  );
}

 function MyFavorits() {
  return (
    <MyBidsListEl>
      <Title>Favorites</Title>
      <ItemList>
        <BidItem />
        <BidItem />
      </ItemList>
    </MyBidsListEl>
  );
}

export default MyFavorits





