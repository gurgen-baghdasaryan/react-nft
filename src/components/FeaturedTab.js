import React from 'react'

import { BiChevronDown } from "react-icons/bi";
import { useNavigate } from "react-router";
import styled from "styled-components";
import colors from '../assets/colors'

import image1 from '../assets/img/image1.png'
import image2 from '../assets/img/image2.png'
import image3 from '../assets/img/image3.png'
import image4 from '../assets/img/image4.png'
import Img from "./styled/Imgstyles";


const items = [
  { id: 1, title: "Nftverso", subTitle: "Maketi", image: image1 },
  { id: 2, title: "Eve Lu", subTitle: "Lea Kovaseva", image: image2 },
  { id: 3, title: "TITLE3", subTitle: "SubTitle3", image: image3 },
  { id: 4, title: "TITLE4", subTitle: "SubTitle4", image: image4 },
];


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
  align-content: center;
  position: absolute;
  cursor: pointer;
  left: 0;
  bottom: 0;
  width: 100%;
  backdrop-filter: blur(17px);
  color:${colors.Gray};
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
  const nav = useNavigate();

  return (
    <FeaturedTabEl>
      {items.map(item => {
        return <Item key={item.id}
          onClick={()=>{
            nav("./product")
          }}
        >
          <Img src={item.image} />
          <Title>{item.title}</Title>
          <SubTitle>{item.subTitle}</SubTitle>
          
        </Item>
      })}
      <BottomFade />
      <ShowMore>
        <BiChevronDown />
      </ShowMore>
    </FeaturedTabEl>
  )
}

export default FeaturedTab
