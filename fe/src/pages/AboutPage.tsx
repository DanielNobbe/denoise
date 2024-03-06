import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  position: relative;
`;

const SectionText = styled.p`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const SectionContainer = styled.div`
  justify-content: center;
  display: flex;
  gap: 4rem;
  height: 80%;
  @media screen and (max-width: 1200px) {
    display: block;
    height: fit-content;
  }
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const SectionPicContainer = styled.div`
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

const AboutPic = styled.img`
  border-radius: 2rem;
`;

const AboutDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutContainers = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  @media screen and (max-width: 1400px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 1200px) {
    margin-top: 0;
  }
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const DetailsContainer = styled.div`
  padding: 1.5rem;
  flex: 1;
  background: white;
  border-radius: 2rem;
  border: 0.1rem solid rgb(163, 163, 163);
  text-align: center;
`;

const Icon = styled.img`
  height: 2rem;
  cursor: default;
`;

const TextContainer = styled.div`
  text-align: justify;
`;

const Arrow = styled.img`
  height: 2rem;
  position: absolute;
  right: -5rem;
  bottom: 2.5rem;
  cursor: pointer;
`;

export const AboutPage = () => {
    return (
        <AboutSection id="about">
            <SectionText>Get To Know More</SectionText>
            <Title>About Us</Title>
            <SectionContainer>
                <SectionPicContainer>
                    <AboutPic src="/computer_vision.png" alt="Profile picture" />
                </SectionPicContainer>
                <AboutDetailsContainer>
                    <AboutContainers>
                        <DetailsContainer>
                            <Icon src="/experience.png" alt="Experience icon" />
                            <h3>Experience</h3>
                            <p>x light-years <br />training</p>
                        </DetailsContainer>
                        <DetailsContainer className="details-container">
                            <Icon src="/education.png" alt="Education icon" />
                            <h3>Education</h3>
                            <p>0 human-years<br />testing</p>
                        </DetailsContainer>
                    </AboutContainers>
                    <TextContainer>
                        <p>
                            At Denoise, we specialize in breathing new life into your images. Our advanced image enhancement suite utilizes cutting-edge AI technology to rediscover lost details, sharpen every pixel, and elevate your visuals to unprecedented levels of clarity and vibrancy. Whether it's removing noise, correcting colors, or refining textures, Denoise is dedicated to transforming your images into true masterpieces.
                        </p>
                    </TextContainer>
                </AboutDetailsContainer>
            </SectionContainer>
            <Arrow src="/arrow.png" alt="Arrow icon" onClick={() => window.location.href = './index.html#contact'} />
        </AboutSection>
    );
};