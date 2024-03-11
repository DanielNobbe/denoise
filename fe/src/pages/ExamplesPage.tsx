import React from 'react';
import styled from 'styled-components';
import {ImgComparisonSlider} from "@img-comparison-slider/react";

const ExamplesSection = styled.section`
  position: relative;
  margin-top: 5rem;
  box-sizing: border-box;
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
  margin-top: 5px;
  color: black;
  @media screen and (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

const SectionText = styled.p`
  text-align: center;
`;

const AboutContainer = styled.div`
  display: flex;
  gap: 2rem;
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
                            <ImgComparisonSlider hover={true} style={{}}>
                                <img slot="first" src="/before_noise_img_round.png" style={{height: "250px", width: "250px"}} />
                                <img slot="second" src="/after_noise_img_round.png" style={{height: "250px", width: "250px"}} />
                            </ImgComparisonSlider>
                        </ArticleContainer>
                        <ServicesSubTitleWithProjectTitle>Low light</ServicesSubTitleWithProjectTitle>
                    </DetailsContainerWithColor>
                    <DetailsContainerWithColor>
                        <ArticleContainer>
                            <ImgComparisonSlider hover={true} style={{}}>
                                <img slot="first" src="/before_noise_img_round.png" style={{height: "250px", width: "250px"}} />
                                <img slot="second" src="/after_noise_img_round.png" style={{height: "250px", width: "250px"}} />
                            </ImgComparisonSlider>
                        </ArticleContainer>
                        <ServicesSubTitleWithProjectTitle>Fast motion</ServicesSubTitleWithProjectTitle>
                    </DetailsContainerWithColor>
                    <DetailsContainerWithColor>
                        <ArticleContainer>
                            <ImgComparisonSlider hover={true} style={{}}>
                                <img slot="first" src="/before_noise_img_round.png" style={{height: "250px", width: "250px"}} />
                                <img slot="second" src="/after_noise_img_round.png" style={{height: "250px", width: "250px"}} />
                            </ImgComparisonSlider>
                        </ArticleContainer>
                        <ServicesSubTitleWithProjectTitle>Scanned images</ServicesSubTitleWithProjectTitle>
                    </DetailsContainerWithColor>
                </AboutContainer>
                <AboutContainer>
                    <DetailsContainerWithColor>
                        <ArticleContainer>
                            <ImgComparisonSlider hover={true} style={{}}>
                                <img slot="first" src="/before_noise_img_round.png" style={{height: "250px", width: "250px"}} />
                                <img slot="second" src="/after_noise_img_round.png" style={{height: "250px", width: "250px"}} />
                            </ImgComparisonSlider>
                        </ArticleContainer>
                        <ServicesSubTitleWithProjectTitle>Low light</ServicesSubTitleWithProjectTitle>
                    </DetailsContainerWithColor>
                    <DetailsContainerWithColor>
                        <ArticleContainer>
                            <ImgComparisonSlider hover={true} style={{}}>
                                <img slot="first" src="/before_noise_img_round.png" style={{height: "250px", width: "250px"}} />
                                <img slot="second" src="/after_noise_img_round.png" style={{height: "250px", width: "250px"}} />
                            </ImgComparisonSlider>
                        </ArticleContainer>
                        <ServicesSubTitleWithProjectTitle>Fast motion</ServicesSubTitleWithProjectTitle>
                    </DetailsContainerWithColor>
                    <DetailsContainerWithColor>
                        <ArticleContainer>
                            <ImgComparisonSlider hover={true} style={{}}>
                                <img slot="first" src="/before_noise_img_round.png" style={{height: "250px", width: "250px"}} />
                                <img slot="second" src="/after_noise_img_round.png" style={{height: "250px", width: "250px"}} />
                            </ImgComparisonSlider>
                        </ArticleContainer>
                        <ServicesSubTitleWithProjectTitle>Scanned images</ServicesSubTitleWithProjectTitle>
                    </DetailsContainerWithColor>
                </AboutContainer>
            </ServicesDetailsContainer>
            <Arrow src="/arrow.png" alt="Arrow icon" onClick={() => window.location.href = './#about'} />
        </ExamplesSection>
    );
};