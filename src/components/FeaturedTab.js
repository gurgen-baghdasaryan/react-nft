import React from 'react'
  
import { BiChevronDown } from "react-icons/bi"; 
import { useNavigate } from "react-router";
import styled from "styled-components";
import colors from '../assets/colors'

import image1  from '../assets/img/image1.png'
import image2  from '../assets/img/image2.png'
import image3  from '../assets/img/image3.png'
import image4  from '../assets/img/image4.png'
import Img from "./styled/Imgstyles";

const FeaturedTabEl = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  height: 400px;
`;

const Item = styled.div`
  background-color: ${colors.CardBackground};
  padding: 0 0.4rem;
  border-radius: 12px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 1.1rem;
  margin-top: 0.5rem;
`;

const SubTitle = styled.span`
  color: ${colors.Gray};
  font-size: 1rem;
`;

const ShowMore = styled.span`
  text-align: center;
  position: absolute;
  cursor: pointer;
  left: 0;
  bottom: 0;
  width: 100%;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.32);
  padding: 1rem;
  border: 1px solid ${colors.GrayBorder};
  backdrop-filter: blur(17px);
  border-radius: 12px;
`;

const BottomFade = styled.span`
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 25%;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0),
    ${colors.Background}
  );
`;


const FeaturedTab = () => {
    return (
       <FeaturedTabEl>
        Featured TAB
       </FeaturedTabEl>
    )
}

export default FeaturedTab
