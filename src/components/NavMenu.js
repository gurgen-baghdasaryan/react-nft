import React from 'react'
import styled from "styled-components";
import { FiHome } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
import { BiStore } from 'react-icons/bi'
import colors from '../assets/colors'
import { useLocation, useNavigate } from "react-router";

const NavMneuEl = styled.nav`
  display: flex;
  background-color: rgba(255, 255, 255, 0.01);
  position: absolute;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10%;
  backdrop-filter: blur(50px);
`;

const Link = styled.a`
  font-size: 1.7rem;
  ${(p) => (p.active ? `color:${colors.Primary};` : "")}
  position: relative;
  cursor: pointer;
  ::before {
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


const NavMenu = () => {
    return (
        <NavMneuEl>
            <Link>
                <FiHome />
            </Link>
            <Link>
                <BiStore />
            </Link>
            <Link>
                <AiOutlineUser />
            </Link>
        </NavMneuEl>
    )
}

export default NavMenu
