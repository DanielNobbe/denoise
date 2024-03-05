import styled, { css } from 'styled-components';
import {useState} from "react";

const DesktopNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 17vh;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const HamburgerNav = styled.nav`
  display: none;
  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 17vh;
  }
`;

const LogoContainer = styled.div`
  font-size: 2rem;
  &:hover {
    cursor: default;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const HamburgerMenu = styled.div`
  position: relative;
  display: inline-block;
`;

const HamburgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;
  cursor: pointer;

  span {
    width: 100%;
    height: 2px;
    background-color: black;
    transition: all 0.3s ease-in-out;
  }

  /* Animation for open state */
  &.open {
    span:first-child {
      transform: rotate(45deg) translate(10px, 5px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:last-child {
      transform: rotate(-45deg) translate(10px, -5px);
    }
  }
`;

const MenuLinks = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  width: fit-content;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  /* Animation for open state */
  &.open {
    max-height: 300px;
  }
`;

const MenuItem = styled.li`
  list-style: none;
  a {
    display: block;
    padding: 10px;
    text-align: center;
    font-size: 1.5rem;
    color: black;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  font-size: 1.5rem;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    li a {
      font-size: 1rem;
    }
  }
`;

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <DesktopNav>
                <LogoContainer>Denoise</LogoContainer>
                <div>
                    <NavLinks>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#examples">Examples</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </NavLinks >
                </div>
            </DesktopNav>
            <HamburgerNav>
                <LogoContainer>Denoise</LogoContainer>
                <HamburgerMenu>
                    <HamburgerIcon className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </HamburgerIcon>
                    <MenuLinks className={`menu-links ${isOpen ? 'open' : ''}`}>
                        <MenuItem><a href="#services">Services</a></MenuItem>
                        <MenuItem><a href="#examples">Examples</a></MenuItem>
                        <MenuItem><a href="#about">About</a></MenuItem>
                        <MenuItem><a href="#contact">Contact</a></MenuItem>
                    </MenuLinks>
                </HamburgerMenu>
            </HamburgerNav>
        </>
    );
};