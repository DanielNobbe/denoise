'use client'

import React, { useState } from 'react';
import {ReactCompareSlider, ReactCompareSliderHandle, ReactCompareSliderImage} from "react-compare-slider";
import {CardDescription, CardsContainer, CardTitle, CardTitleButton} from "@/components/testdata";

const imageWidth: number = 400;
const imageHeight: number = 200;

export async function handler2(endpoint: string, bearerToken: string, payload: any) {
    console.log('a')
    console.log('b')

    try {
        console.log('c')

        console.log('d')
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearerToken
            },
            body: JSON.stringify(payload)
        });
        console.log('e');
        console.log(response);
        console.log('f');
        const responseData = await response.text();
        return responseData;
    } catch (error: any) {
        console.log('an error occurred ' + error.message)
    }
}

export default function Testdata2() {
    const [responseData, setResponseData] = useState<any>("");
    const [imageUrl, setImageUrl] = useState<any>("");

    const handleClick = async () => {
        try {
            console.log('1');
            const endpoint = 'https://jexy4gj1maynq3r4.eu-west-1.aws.endpoints.huggingfacecloud';
            const bearerToken = 'Bearer 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';
            const payload = {
                "inputs": "Hello world!",
                "parameters": {},
                "image": imageUrl,
                "enable_patching": false
            };
            console.log('2');

            const response = await handler2(endpoint, bearerToken, payload);
            console.log('3');
            console.log('4');

            const responseData = response ?? "";
            setResponseData(responseData);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleImageUpload = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = (reader.result as string).split(",")[1]; // Remove data URL prefix
                setImageUrl(base64String);
            };
            reader.readAsDataURL(file);
        }
        // handleClick();
    };

    return (
        <div style={{marginTop: "25px"}}>
            <div>
                <input type="file" onChange={handleImageUpload} />
                {imageUrl && (
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
                            itemOne={<ReactCompareSliderImage src={`data:image/jpeg;base64,${imageUrl}`} alt="Image one" />}
                            itemTwo={<ReactCompareSliderImage src={`data:image/jpeg;base64,${imageUrl}`} alt="Image two" />}
                            changePositionOnHover={true}
                            handle={<ReactCompareSliderHandle buttonStyle={{height: "35px", width: "35px"}} />}
                            style={{height: `${imageHeight}px`, width: `${imageWidth}px`, margin: "0 auto"}}
                        />
                        <CardDescription style={{marginLeft: "418px"}}>
                            Text...
                        </CardDescription>
                    </div>
                )}
            </div>

        </div>
    );
}
