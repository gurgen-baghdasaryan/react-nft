import React from 'react'

import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";
import colors from "../../assets/colors";


const SearchBarEl = styled.div`
  background-color: ${colors.CardBackground};
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 12px;
  margin: 0 1rem 2rem 1rem;
  & > svg {
    font-size: 1.5rem;
    color: ${colors.Gray};
  }
`;

const Input = styled.input`
  font-size: 1rem;
  border: none;
  flex: 1;
  :focus {
    outline: none;
  }
`;




const Searchstyle = () => {
    return (
        <div>
            <Input placeholder="Search on HoHo" />
            <RiSearchLine />
        </div>
    )
}

export default Searchstyle
