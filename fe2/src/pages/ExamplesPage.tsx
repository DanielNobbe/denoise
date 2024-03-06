import React from 'react';
import styled from 'styled-components';

const ExamplesSection = styled.section`
  position: relative;
  padding-top: 4vh;
  height: 96vh;
  margin: 0 10rem;
  box-sizing: border-box;
  min-height: fit-content;
  @media screen and (max-width: 1200px) {
    height: fit-content;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const ServicesDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ArticleContainer = styled.div`
  display: flex;
  text-align: initial;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-around;
`;

const ServicesSubTitleWithProjectTitle = styled.h2`
  font-weight: 600;
  font-size: 1.75rem;
  margin: 1rem;
  color: black;
  @media screen and (max-width: 600px) {
    font-size: 1.25rem;
  }
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

const ExampleImg = styled.img`
  border-radius: 2rem;
  width: 90%;
  height: 500px;
`;

const ProjectTitle = styled.h2`
  margin: 1rem;
  color: black;
`;

const SectionText = styled.p`
  text-align: center;
`;

const AboutContainer = styled.div`
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

const Arrow = styled.img`
  height: 2rem;
  position: absolute;
  right: -5rem;
  bottom: 2.5rem;
  cursor: pointer;
`;

const DetailsContainerWithColor = styled.div`
  padding: 1.5rem;
  flex: 1;
  border-radius: 2rem;
  border: 0.1rem solid rgb(163, 163, 163);
  text-align: center;
  background: rgb(250, 250, 250);

`;

export const ExamplesPage = () => {
    return (
        <ExamplesSection id="examples">
            <SectionText>Check out some of our</SectionText>
            <Title>Examples</Title>
            <ServicesDetailsContainer>
                <AboutContainer>
                    <DetailsContainerWithColor>
                        <ArticleContainer>
                            <ExampleImg
                                src="/low-light-image.png"
                                alt="low-light-image"
                            />
                        </ArticleContainer>
                        <ServicesSubTitleWithProjectTitle>Low light</ServicesSubTitleWithProjectTitle>
                        <BtnContainer>
                            <Button className="btn-color-2">
                                Action item
                            </Button>
                            <Button
                                className="btn-color-2"
                                onClick={() => { window.location.href = 'https://en.wikipedia.org/wiki/Noise_reduction/'; }}
                            >
                                Try it out
                            </Button>
                        </BtnContainer>
                    </DetailsContainerWithColor>
                    <DetailsContainerWithColor>
                        <ArticleContainer>
                            <ExampleImg
                                src="/fast_motion.png"
                                alt="fast-motion-image"
                            />
                        </ArticleContainer>
                        <ServicesSubTitleWithProjectTitle>Fast motion</ServicesSubTitleWithProjectTitle>
                        <BtnContainer>
                            <Button className="btn-color-2">
                                Action item
                            </Button>
                            <Button
                                className="btn-color-2"
                                onClick={() => { window.location.href = 'https://en.wikipedia.org/wiki/Deblurring/'; }}
                            >
                                Try it out
                            </Button>
                        </BtnContainer>
                    </DetailsContainerWithColor>
                    <DetailsContainerWithColor>
                        <ArticleContainer>
                            <ExampleImg
                                src="/scanned_image.png"
                                alt="scanned-image"
                            />
                        </ArticleContainer>
                        <ServicesSubTitleWithProjectTitle>Scanned images</ServicesSubTitleWithProjectTitle>
                        <BtnContainer>
                            <Button className="btn-color-2">
                                Action item
                            </Button>
                            <Button
                                className="btn-color-2"
                                onClick={() => { window.location.href = 'https://en.wikipedia.org/wiki/Noise_reduction/'; }}
                            >
                                Try it out
                            </Button>
                        </BtnContainer>
                    </DetailsContainerWithColor>
                </AboutContainer>
            </ServicesDetailsContainer>
            <Arrow src="/arrow.png" alt="Arrow icon" onClick={() => window.location.href = './index.html#about'} />
        </ExamplesSection>
    );
};