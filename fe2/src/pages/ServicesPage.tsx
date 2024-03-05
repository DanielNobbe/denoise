import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  position: relative;
  @media screen and (max-width: 1200px) {
    //margin-top: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const ServicesSubTitle = styled.h2`
  color: rgb(85, 85, 85);
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 2rem;
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
  gap: 1rem;
  justify-content: space-around;
`;

const Icon = styled.img`
  cursor: default;
  height: 2rem;
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
  padding: 1.5rem;
  flex: 1;
  background: white;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
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
        <ServicesSection>
            <SectionText>Explore our</SectionText>
            <Title>Services</Title>
            <ServicesDetailsContainer>
                <AboutContainer>
                    <DetailsContainer>
                        <ServicesSubTitle>De-noise</ServicesSubTitle>
                        <ArticleContainer>
                            <article>
                                <Icon src="/checkmark.png" alt="Experience icon" />
                                <div>
                                    <h3>Tech 1</h3>
                                    <p>One-liner</p>
                                </div>
                            </article>
                            <article>
                                <Icon src="/checkmark.png" alt="Experience icon" />
                                <div>
                                    <h3>Tech 2</h3>
                                    <p>One-liner</p>
                                </div>
                            </article>
                        </ArticleContainer>
                        <TextContainer>
                            <p>
                                De-noising is a digital image processing technique aimed at reducing or eliminating noise, such as graininess or pixelation, from images, resulting in clearer and smoother visuals by enhancing the signal-to-noise ratio.
                            </p>
                        </TextContainer>
                    </DetailsContainer>
                    <DetailsContainer>
                        <ServicesSubTitle>De-blur</ServicesSubTitle>
                        <ArticleContainer>
                            <article>
                                <Icon src="/checkmark.png" alt="Experience icon" />
                                <div>
                                    <h3>Tech 1</h3>
                                    <p>One-liner</p>
                                </div>
                            </article>
                            <article>
                                <Icon src="/checkmark.png" alt="Experience icon" />
                                <div>
                                    <h3>Tech 2</h3>
                                    <p>One-liner</p>
                                </div>
                            </article>
                        </ArticleContainer>
                        <TextContainer>
                            <p>
                                De-blurring is an image enhancement process designed to restore sharpness and clarity to blurred or out-of-focus images, utilizing algorithms to reverse the effects of motion blur or lens imperfections, thereby improving overall image quality and detail.
                            </p>
                        </TextContainer>
                    </DetailsContainer>
                    <DetailsContainer>
                        <ServicesSubTitle>Color correction</ServicesSubTitle>
                        <ArticleContainer>
                            <article>
                                <Icon src="/checkmark.png" alt="Experience icon" />
                                <div>
                                    <h3>Tech 1</h3>
                                    <p>One-liner</p>
                                </div>
                            </article>
                            <article>
                                <Icon src="/checkmark.png" alt="Experience icon" />
                                <div>
                                    <h3>Tech 2</h3>
                                    <p>One-liner</p>
                                </div>
                            </article>
                        </ArticleContainer>
                        <TextContainer>
                            <p>
                                Color correction is the process of adjusting and balancing colors in an image to ensure accurate and consistent representation, correcting any color casts, improving overall color fidelity, and enhancing the visual appeal of the image.
                            </p>
                        </TextContainer>
                    </DetailsContainer>
                </AboutContainer>

                <DetailsContainer>
                    <ServicesSubTitle>Methods combined</ServicesSubTitle>
                    <ArticleContainer>
                        <article>
                            <Icon src="/checkmark.png" alt="Experience icon" />
                            <div>
                                <h3>Tech 1</h3>
                                <p>One-liner</p>
                            </div>
                        </article>
                        <article>
                            <Icon src="/checkmark.png" alt="Experience icon" />
                            <div>
                                <h3>Tech 2</h3>
                                <p>One-liner</p>
                            </div>
                        </article>
                    </ArticleContainer>
                    <TextContainer>
                        <p>
                            Combining de-noising, de-blurring, and color correction technologies, our image enhancement solution delivers unparalleled results by first eliminating noise and blur, then refining color accuracy and balance. This holistic approach ensures that images are not only clearer and sharper but also exhibit vibrant, true-to-life colors, resulting in stunning visual transformations.
                        </p>
                    </TextContainer>
                </DetailsContainer>
            </ServicesDetailsContainer>
            <Arrow src="/arrow.png" alt="Arrow icon" onClick={() => window.location.href = './index.html#examples'} />
        </ServicesSection>
    );
};