import React from 'react'
import { useState } from "react";
import styled from "styled-components";
import colors from "../../assets/colors";

const i = [
    {id:1, title: "Featured", content: <div>Tab1</div>, },
    {id:2, title: "Collections", content: <div>Tab2</div>, },
    {id:3, title: "Artists", content: <div>Tab3</div>, },
    {id:4, title: "Tag", content: <div>Tab4</div>, },
          ];


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
${(p) => (p.active ? `font-weight:500;` : "")}
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
    background-color: ${colors.GrayBorder};
}
`;
const Content = styled.div`
    margin: 0 0.5rem;
    margin-top: 1rem;`;

const Tabstyle = () => {

    const [currentab, setCurrentab] = useState(i[0])

    return (
        <TabEl>
            <TitlesContainer>
            {i.map(tabs=>{
                return <Title active={currentab.id===tabs.id}>  {tabs.title}</Title>
            })}
                <Title>Featured</Title>
                <Title>Collection</Title>
                <Title>Artists</Title>
                <Title>Tag</Title>
            </TitlesContainer>
            <Content>Content</Content>
        </TabEl>
    )
}

export default Tabstyle
