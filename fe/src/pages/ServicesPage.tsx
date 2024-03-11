import React from 'react';
import styled from 'styled-components';
import {ImgComparisonSlider} from "@img-comparison-slider/react";
import {Link} from "react-router-dom";

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-weight: 600;
  transition: all 300ms ease;
  padding: 0.25rem;
  width: 80px;
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
    background-color: rgb(53, 53, 53);
    color: white;
  }
  &.btn-color-1:hover {
    background: rgb(0, 0, 0);
  }
  &.btn-color-2 {
    background: none;
  }
`;

const ServicesSection = styled.section`
  position: relative;
  @media screen and (max-width: 1200px) {
    margin-top: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const ServicesSubTitle = styled.h2`
  color: rgb(85, 85, 85);
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

const ServicesDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
    margin-top: 2rem;
  }
`;

const ArticleContainer = styled.div`
  display: flex;
  text-align: initial;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: space-around;
`;

const Icon = styled.img`
  height: 1.4rem;
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

const DetailsContainer = styled.div`
  position: relative;
  padding: 1.5rem;
  flex: 1;
  background: white;
  border-radius: 2rem;
  border: rgb(163, 163, 163) 0.1rem solid;
  text-align: center;
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

export const ServicesPage = () => {
    return (
        <ServicesSection id="services">
            <SectionText>Explore our</SectionText>
            <Title>Services</Title>
            <ServicesDetailsContainer>
                <AboutContainer>
                    <DetailsContainer>
                        <ServicesSubTitle>De-noise</ServicesSubTitle>
                        <ImgComparisonSlider hover={true} style={{}}>
                            <img slot="first" src="/before_noise_img_round.png" style={{height: "250px", width: "250px"}} />
                            <img slot="second" src="/after_noise_img_round.png" style={{height: "250px", width: "250px"}} />
                        </ImgComparisonSlider>
                        <ArticleContainer>
                            <article>
                                <Icon src="/checkmark.png" alt="Experience icon" />
                                <div>
                                    <h4>Shot noise</h4>
                                </div>
                            </article>
                            <article>
                                <Icon src="/checkmark.png" alt="Experience icon" />
                                <div>
                                    <h4>S&P noise</h4>
                                </div>
                            </article>
                            <article>
                                <Icon src="/checkmark.png" alt="Experience icon" />
                                <div>
                                    <h4>Gaussian noise</h4>
                                </div>
                            </article>
                        </ArticleContainer>
                        <TextContainer>
                            <p style={{fontSize: "14px"}}>
                                De-noising is a digital image processing technique aimed at reducing or eliminating noise, such as graininess or pixelation, from images, resulting in clearer and smoother visuals by enhancing the signal-to-noise ratio.
                            </p>
                        </TextContainer>
                        <Button className="btn-color-2">
                            <Link to="/services">Try it out</Link>
                        </Button>
                    </DetailsContainer>
                    <DetailsContainer>
                        <ServicesSubTitle>De-blur</ServicesSubTitle>
                        <ImgComparisonSlider hover={true} style={{}}>
                            <img slot="first" src="/before_blur_img_round.png" style={{height: "250px", width: "250px"}} />
                            <img slot="second" src="/after_blur_img_round.png" style={{height: "250px", width: "250px"}} />
                        </ImgComparisonSlider>
                        <ArticleContainer>
                            <article>
                                <Icon src="/checkmark.png" alt="Experience icon" />
                                <div>
                                    <h4>Directional blur</h4>
                                </div>
                            </article>
                            <article>
                                <Icon src="/checkmark.png" alt="Experience icon" />
                                <div>
                                    <h4>Radical blur</h4>
                                </div>
                            </article>
                            <article>
                                <Icon src="/checkmark.png" alt="Experience icon" />
                                <div>
                                    <h4>Tilt-shift</h4>
                                </div>
                            </article>
                            <article>
                                <Icon src="/checkmark.png" alt="Experience icon" />
                                <div>
                                    <h4>Motion blur</h4>
                                </div>
                            </article>
                        </ArticleContainer>
                        <TextContainer>
                            <p style={{fontSize: "14px"}}>
                                De-blurring is an image enhancement process designed to restore sharpness and clarity to blurred or out-of-focus images, utilizing algorithms to reverse the effects of motion blur or lens imperfections, thereby improving overall image quality and detail.
                            </p>
                        </TextContainer>
                        <Button className="btn-color-2">
                            <Link to="/services">Try it out</Link>
                        </Button>
                    </DetailsContainer>
                    <DetailsContainer>
                        <ServicesSubTitle>Color correction</ServicesSubTitle>
                        <ImgComparisonSlider hover={true} style={{}}>
                            <img slot="first" src="/before_color_img_round.png" style={{height: "250px", width: "250px"}} />
                            <img slot="second" src="/after_color_img_round.png" style={{height: "250px", width: "250px"}} />
                        </ImgComparisonSlider>
                        <ArticleContainer>
                            <article>
                                <Icon src="/checkmark.png" alt="Experience icon" />
                                <div>
                                    <h4>Bleach bypass</h4>
                                </div>
                            </article>
                            <article>
                                <Icon src="/checkmark.png" alt="Experience icon" />
                                <div>
                                    <h4>Color grading</h4>
                                </div>
                            </article>
                            <article>
                                <Icon src="/checkmark.png" alt="Experience icon" />
                                <div>
                                    <h4>Saturation</h4>
                                </div>
                            </article>
                            <article>
                                <Icon src="/checkmark.png" alt="Experience icon" />
                                <div>
                                    <h4>Gamma</h4>
                                </div>
                            </article>
                        </ArticleContainer>
                        <TextContainer>
                            <p style={{fontSize: "14px"}}>
                                Color correction is the process of adjusting and balancing colors in an image to ensure accurate and consistent representation, correcting any color casts, improving overall color fidelity, and enhancing the visual appeal of the image.
                            </p>
                        </TextContainer>
                        <Button className="btn-color-2">
                            <Link to="/services">Try it out</Link>
                        </Button>
                    </DetailsContainer>
                </AboutContainer>
                <DetailsContainer>
                    <ServicesSubTitle>Methods combined</ServicesSubTitle>
                    <ImgComparisonSlider hover={true} style={{}}>
                        <img slot="first" src="/before_combined_img_round.png" style={{height: "250px", width: "1000px"}} />
                        <img slot="second" src="/after_combined_img_round.png" style={{height: "250px", width: "1000px"}} />
                    </ImgComparisonSlider>
                    <ArticleContainer>
                        <article>
                            <Icon src="/checkmark.png" alt="Experience icon" />
                            <div>
                                <h4>De-noise</h4>
                            </div>
                        </article>
                        <article>
                            <Icon src="/checkmark.png" alt="Experience icon" />
                            <div>
                                <h4>De-blur</h4>
                            </div>
                        </article>
                        <article>
                            <Icon src="/checkmark.png" alt="Experience icon" />
                            <div>
                                <h4>Color correction</h4>
                            </div>
                        </article>
                    </ArticleContainer>
                    <TextContainer>
                        <p style={{fontSize: "14px"}}>
                            Combining de-noising, de-blurring, and color correction technologies, our image enhancement solution delivers unparalleled results by first eliminating noise and blur, then refining color accuracy and balance. This holistic approach ensures that images are not only clearer and sharper but also exhibit vibrant, true-to-life colors, resulting in stunning visual transformations.
                        </p>
                    </TextContainer>
                    <Button className="btn-color-2">
                        <Link to="/services">Try it out</Link>
                    </Button>
                </DetailsContainer>
            </ServicesDetailsContainer>
            <Arrow src="/arrow.png" alt="Arrow icon" onClick={() => window.location.href = './#examples'} />
        </ServicesSection>
    );
};