import React, {useState} from 'react';
import {ImgComparisonSlider} from "@img-comparison-slider/react";
import styled from "styled-components";

const ServicesSection = styled.section`
  margin-top: -80px;
  min-height: 0vh;
  position: relative;
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

const TextParagraph = styled.p`
  text-align: center;
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

const MissingUploadText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
  border: rgb(0, 0, 0) 0.1rem solid;
  border-radius: 10px;
  transition: all 300ms ease;
  &:hover {
    background-color: rgb(0, 0, 0);
    color: white;
  }
`;

const MissingProcessText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  width: 100%;
`;

const FileInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const ServicePage = () => {
    const [isImageUploaded, setIsImageUploaded] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isImageProcessed, setIsImageProcessed] = useState(false);
    const [processedImage, setProcessedImage] = useState("");

    const processImage = async () => {
        setIsImageProcessed(true);
        try {
            const response = await fetch('https://denoise-be-black-waterfall-4620-small-waterfall-9942.fly.dev/prediction');
            if (!response.ok) return;
            const data = await response.text();
            console.log(data);
            setProcessedImage(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleImageChange = (e: any) => {
        setIsImageUploaded(true);
        const file = e.target.files[0];
        if (file) {
            const reader: any = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <ServicesSection id="services">
            <SectionText>Explore our</SectionText>
            <Title>Service</Title>
            <TextParagraph>using de-blur</TextParagraph>
            <ServicesDetailsContainer>
                <AboutContainer>
                    <DetailsContainer>
                        <ServicesSubTitle>Before</ServicesSubTitle>
                        {!selectedImage ?
                            <>
                                <MissingUploadText>
                                    <FileInput type="file" id="file-upload" accept="image/*" onChange={handleImageChange} />
                                    <label style={{cursor: "pointer"}} htmlFor="file-upload">Upload image</label>
                                </MissingUploadText>
                                <img src="/transparent_image.png" style={{height: "400px", width: "400px"}} />
                            </>
                            :
                            <img src={selectedImage} style={{height: "400px", width: "400px"}} />
                        }
                    </DetailsContainer>
                    <DetailsContainer>
                        <ServicesSubTitle>After</ServicesSubTitle>
                        {!selectedImage ?
                            <MissingProcessText>Waiting for image upload</MissingProcessText>
                        : processedImage === "" ?
                            <MissingUploadText onClick={processImage}>
                                Process image
                            </MissingUploadText>
                        :
                            <img src={`data:image/png;base64,${processedImage}`} style={{height: "400px", width: "400px"}} />
                        }
                    </DetailsContainer>
                    <DetailsContainer>
                        <ServicesSubTitle>Comparison</ServicesSubTitle>
                        {!selectedImage || !isImageProcessed ?
                            <MissingProcessText>Waiting for {!isImageUploaded ? "image upload" : "image processing"}</MissingProcessText>
                            :
                            <ImgComparisonSlider hover={true} style={{}}>
                                <img slot="first" src={selectedImage} style={{height: "400px", width: "400px"}} />
                                <img slot="second" src={`data:image/png;base64,${processedImage}`} style={{height: "400px", width: "400px"}} />
                            </ImgComparisonSlider>
                        }
                    </DetailsContainer>
                </AboutContainer>
            </ServicesDetailsContainer>
        </ServicesSection>
    );
};