import React from 'react'
  
import { BiChevronDown } from "react-icons/bi"; 
import { useNavigate } from "react-router";
import styled from "styled-components";
import colors from 'colors.js'

import image1  from '../assets/img/image1.png'
import image2  from '../assets/img/image2.png'
import image3  from '../assets/img/image3.png'
import image4  from '../assets/img/image4.png'
import Img from "./styled/imgstyles";

const FeaturedTabEl = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  height: 400px;
`;

const FeaturedTab = () => {
    return (
       <FeaturedTabEl>
       
       </FeaturedTabEl>
    )
}

export default FeaturedTab
