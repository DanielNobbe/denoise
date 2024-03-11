import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.footer`
  height: 26vh;
  margin: 0 1rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 17vh;
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
  }
`;

const NavLinkItem = styled.li`
  a {
    color: black;
    text-decoration: none;
    text-decoration-color: white;
    transition: all 300ms ease;

    &:hover {
      color: grey;
      text-decoration: underline;
      text-underline-offset: 1rem;
      text-decoration-color: rgb(181, 181, 181);
    }

    @media screen and (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;

const Paragraph = styled.p`
  color: rgb(85, 85, 85);
  text-align: center;
`;

export const Footer = () => {
    return (
        <FooterContainer>
            <Nav>
                <NavLinks>
                    <NavLinkItem><a href="./#services">Services</a></NavLinkItem>
                    <NavLinkItem><a href="./#examples">Examples</a></NavLinkItem>
                    <NavLinkItem><a href="./#about">About</a></NavLinkItem>
                    <NavLinkItem><a href="./#contact">Contact</a></NavLinkItem>
                </NavLinks>
            </Nav>
            <Paragraph>Rediscover lost details and sharpen every pixel with our advanced image enhancement suite</Paragraph>
        </FooterContainer>
    );
};