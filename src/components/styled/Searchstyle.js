import React from 'react'

import { RiSearchLine } from "react-icons/ri";
import colors from "../../assets/colors";
import styled from "styled-components";



const SearchBarEl = styled.div`
  background-color: ${colors.Gray};
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 12px;
  margin: 0 1rem 2rem 1rem;
  & > svg {
    font-size: 1.5rem;
    color: ${colors.Background};
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
        <SearchBarEl>
            <Input placeholder="Search on Evelution" />
            <RiSearchLine />
        </SearchBarEl>
    )
}

export default Searchstyle

