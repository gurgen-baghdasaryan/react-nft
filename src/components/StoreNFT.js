import React from 'react'

import colors from '../assets/colors';
import styled from "styled-components";
import Img from "./styled/Imgstyles";
import storeImage from '../assets/img/shopImage1.png';
import Button from './styled/Buttonstyle';




const StoreNFTel = styled.section`
    margin-top: 1rem;
    display: flex;
    row-gap: 1rem;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 1.5rem;
`;

const SubTitle = styled.span`
  color: ${colors.Primary};
`;

const InfoContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 1rem;
`;

const ButtonContainer = styled.span`
  display: flex;
  column-gap: 1rem;
`;
const StoreNFT = () => {
    return (
        <StoreNFTel>
            <Img width="30vw" src={storeImage} />
            <InfoContainer>
                <Title>Dimond</Title>
                <SubTitle>Verified Artist</SubTitle>
            </InfoContainer>
            <ButtonContainer>
                <Button>Follow</Button>
                <Button np>Buy now</Button>
            </ButtonContainer>
        </StoreNFTel>
    )
}

export default StoreNFT
