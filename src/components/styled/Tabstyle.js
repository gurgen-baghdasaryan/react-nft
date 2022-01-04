import React from 'react'
import { useState } from "react";
import styled from "styled-components";
import colors from "../../assets/colors";




const TabEl = styled.div`    
    width: 100%;
`;
const TitlesContainer = styled.span`
    display: flex;
    justify-content: space-around;
    margin: 1 1.5rem;
    padding: 0 1rem;

`;
const Title = styled.span`
    padding: 0.5rem 0;
    cursor: pointer;
    position: relative;
${(p) => (p.active ? "" : `color:${colors.GrayBorder};`)}
${(p) => (p.active ? `font-weight:600;` : "")}
::after {
  ${(p) => (!p.active ? "display:none;" : "")}
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0.3rem;
    border-radius: 50%;
    margin-left: 50%;
    transform: translateX(-50%);
    height: 0.3rem;
    background-color: ${colors.Primary};
}
`;
const Content = styled.div`
    margin: 0 0.5rem;
    margin-top: 1rem;`;

const Tabstyle = ({tabs}) => {

    const [currentab, setCurrentab] = useState([0])

    return (
        <TabEl>
            <TitlesContainer>
            {tabs.map((tab)=>{
                return <Title
                onClick={()=>{
                     if (currentab.id  !== tab.id){
                          setCurrentab(tab); 
                     }
                }}
                active={currentab.id===tab.id}>  {tab.title}</Title>
            })}
               
            </TitlesContainer>
            <Content>{currentab.content}</Content>
        </TabEl>
    )
}

export default Tabstyle
