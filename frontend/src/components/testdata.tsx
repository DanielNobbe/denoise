'use client'

import {ReactCompareSlider, ReactCompareSliderHandle, ReactCompareSliderImage} from 'react-compare-slider';
import styled from "styled-components";

const imageWidth: number = 400;
const imageHeight: number = 200;

export const CardDescription = styled.div`
    font-weight: normal;
    font-size: 13px;
    width: ${imageWidth}px;
`;
export const CardTitleButton = styled.div`
    margin-left: auto;
    margin-right: 0;
    text-align: center;
    font-weight: normal;
    font-size: 12px;
    border: 2px solid #aaaaaa;
    border-radius: 5px;
    background-color: #dddddd;
    width: 60px;
    height: 23px;
    cursor: pointer;
`;
export const CardTitle = styled.div`
    font-weight: bold;
    font-size: 18px;
`;
export const CardsContainer = styled.div`
    display: flex;
`;

export default function Testdata() {
    return (
        <div style={{marginTop: "50px"}}>
            <CardsContainer>
                <div>
                    <CardsContainer>
                        <CardTitle>
                            De-noise
                        </CardTitle>
                        <CardTitleButton>
                            Try it out!
                        </CardTitleButton>
                    </CardsContainer>
                    <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage src="after.png" srcSet="after.png" alt="Image one" style={{height: `${imageHeight}px`, width: `${imageWidth}px`}} />}
                        itemTwo={<ReactCompareSliderImage src="before.png" srcSet="before.png" alt="Image two" style={{height: `${imageHeight}px`, width: `${imageWidth}px`}} />}
                        changePositionOnHover={true}
                        handle={<ReactCompareSliderHandle buttonStyle={{height: "35px", width: "35px"}} />}
                    />
                    <CardDescription>
                        De-noising is a digital image processing technique aimed at reducing or eliminating noise, such as graininess or pixelation, from images, resulting in clearer and smoother visuals by enhancing the signal-to-noise ratio.
                    </CardDescription>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                    <CardsContainer>
                        <CardTitle>
                            De-blur
                        </CardTitle>
                        <CardTitleButton>
                            Try it out!
                        </CardTitleButton>
                    </CardsContainer>
                    <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage src="after.png" srcSet="after.png" alt="Image one" style={{height: `${imageHeight}px`, width: `${imageWidth}px`}} />}
                        itemTwo={<ReactCompareSliderImage src="before.png" srcSet="before.png" alt="Image two" style={{height: `${imageHeight}px`, width: `${imageWidth}px`}} />}
                        changePositionOnHover={true}
                        handle={<ReactCompareSliderHandle buttonStyle={{height: "35px", width: "35px"}} />}
                    />
                    <CardDescription>
                        De-blurring is an image enhancement process designed to restore sharpness and clarity to blurred or out-of-focus images, utilizing algorithms to reverse the effects of motion blur or lens imperfections, thereby improving overall image quality and detail.
                    </CardDescription>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                    <CardsContainer>
                        <CardTitle>
                            Color correction
                        </CardTitle>
                        <CardTitleButton>
                            Try it out!
                        </CardTitleButton>
                    </CardsContainer>
                    <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage src="after.png" srcSet="after.png" alt="Image one" style={{height: `${imageHeight}px`, width: `${imageWidth}px`}} />}
                        itemTwo={<ReactCompareSliderImage src="before.png" srcSet="before.png" alt="Image two" style={{height: `${imageHeight}px`, width: `${imageWidth}px`}} />}
                        changePositionOnHover={true}
                        handle={<ReactCompareSliderHandle buttonStyle={{height: "35px", width: "35px"}} />}
                    />
                    <CardDescription>
                        Color correction is the process of adjusting and balancing colors in an image to ensure accurate and consistent representation, correcting any color casts, improving overall color fidelity, and enhancing the visual appeal of the image.
                    </CardDescription>
                </div>
            </CardsContainer>
            &nbsp;
            <div>
                <CardsContainer style={{width: `${imageWidth + 418}px`}}>
                    <CardTitle style={{marginLeft: "418px"}}>
                        Methods combined
                    </CardTitle>
                    <CardTitleButton>
                        Try it out!
                    </CardTitleButton>
                </CardsContainer>
                <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src="after.png" srcSet="after.png" alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src="before.png" srcSet="before.png" alt="Image two" />}
                    changePositionOnHover={true}
                    handle={<ReactCompareSliderHandle buttonStyle={{height: "35px", width: "35px"}} />}
                    style={{height: `${imageHeight}px`, width: `${imageWidth}px`, margin: "0 auto"}}
                />
                <CardDescription style={{marginLeft: "418px"}}>
                    Combining de-noising, de-blurring, and color correction technologies, our image enhancement solution delivers unparalleled results by first eliminating noise and blur, then refining color accuracy and balance. This holistic approach ensures that images are not only clearer and sharper but also exhibit vibrant, true-to-life colors, resulting in stunning visual transformations.
                </CardDescription>
            </div>
        </div>
    );
}
