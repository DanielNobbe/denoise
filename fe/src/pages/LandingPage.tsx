import React from 'react';
import styled, { css } from 'styled-components';

const ProfileSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 5rem;
  height: 80vh;
  @media screen and (max-width: 1400px) {
    height: 83vh;
    margin-bottom: 6rem;
  }
  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

const PicContainer = styled.div`
  display: flex;
  height: 400px;
  width: 400px;
  margin: auto 0;
  @media screen and (max-width: 1200px) {
    width: 275px;
    height: 275px;
    margin: 0 auto 2rem;
  }
  @media screen and (max-width: 600px) {
    width: auto;
    height: 46vw;
    justify-content: center;
  }
`;

const TextContainer = styled.div`
  align-self: center;
  text-align: center;
  p {
    font-weight: 600;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const TextParagraph = styled.p`
  &.section__text__p1 {
    text-align: center;
  };
  &.section__text__p2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  };
`;

const TextParagraph2 = styled.p`
  text-align: center;
`;

const TextParagraph3 = styled.p`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const Button = styled.button`
  font-weight: 600;
  transition: all 300ms ease;
  padding: 1rem;
  width: 8rem;
  border-radius: 2rem;
  &.btn-color-1,
  &.btn-color-2 {
    border: rgb(53, 53, 53) 0.1rem solid;
  }
  &.btn-color-1:hover,
  &.btn-color-2:hover {
    cursor: pointer;
  }
  &.btn-color-1,
  &.btn-color-2:hover {
    background: rgb(53, 53, 53);
    color: white;
  }
  &.btn-color-1:hover {
    background: rgb(0, 0, 0);
  }
  &.btn-color-2 {
    background: none;
  }
  &.btn-color-2:hover {
    border: rgb(255, 255, 255) 0.1rem solid;
  }
`;

const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
`;

const Icon = styled.img`
  cursor: pointer;
  height: 2rem;
`;

const Arrow = styled.img`
  height: 2rem;
  position: absolute;
  right: -5rem;
  bottom: 2.5rem;
  cursor: pointer;
`;

export const LandingPage = () => {
    return (
        <ProfileSection>
            <PicContainer>
                <img src="/cover_image.png" alt="Cover image" />
            </PicContainer>
            <TextContainer>
                <TextParagraph className="section__text__p1">Hello, we're</TextParagraph>
                <Title>Denoise</Title>
                <TextParagraph className="section__text__p2">Rediscover lost details and sharpen every pixel with our advanced image enhancement suite</TextParagraph>
                <TextParagraph className="section__text__p1">Find our backend at &nbsp;&nbsp; https://denoise-be.fly.dev/</TextParagraph>
                <Title>&nbsp;</Title>
                <BtnContainer>
                    <Button className="btn-color-2">
                        Action item
                    </Button>
                    <Button className="btn-color-1" onClick={() => window.location.href = './index.html#contact'}>
                        Contact Info
                    </Button>
                </BtnContainer>
                <SocialsContainer>
                    <Icon
                        src="/linkedin.png"
                        alt="Denoise LinkedIn"
                        onClick={() => window.location.href = 'https://linkedin.com/'}
                    />
                    <Icon
                        src="/website_icon.png"
                        alt="Denoise Website"
                        onClick={() => window.location.href = 'https://denoise.netlify.app/'}
                    />
                </SocialsContainer>
            </TextContainer>
            <Arrow src="/arrow.png" alt="Arrow icon" onClick={() => window.location.href = './index.html#services'} />
        </ProfileSection>
    );
};