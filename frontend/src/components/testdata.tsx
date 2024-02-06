'use client'
import {useState} from "react";
import {ReactCompareSlider, ReactCompareSliderHandle, ReactCompareSliderImage} from 'react-compare-slider';
import styled from "styled-components";
import {Card} from "antd";

const FlexItem = styled.div`
    text-align: center;
    font-size: 13px;
`;
const CardsContainer = styled.div`
    display: flex;
`;

export default function Testdata() {
    const [data, setData] = useState("No data fetched as of yet");

    const fetchData = async () => {
        const req = await fetch('https://catfact.ninja/fact');
        const newData = await req.json();
        return setData(newData);
    };

    const handleClick = (event: any) => {
        event.preventDefault();
        fetchData();
    };

    return (
        <div>
            <CardsContainer>
                <FlexItem>
                    Method 1
                    <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage src="after.png" srcSet="after.png" alt="Image one" style={{height: "250px", width: "250px"}} />}
                        itemTwo={<ReactCompareSliderImage src="before.png" srcSet="before.png" alt="Image two" style={{height: "250px", width: "250px"}} />}
                        changePositionOnHover={true}
                        handle={<ReactCompareSliderHandle buttonStyle={{height: "35px", width: "35px"}} />}
                    />
                </FlexItem>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <FlexItem>
                    Method 2
                    <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage src="after.png" srcSet="after.png" alt="Image one" style={{height: "250px", width: "250px"}} />}
                        itemTwo={<ReactCompareSliderImage src="before.png" srcSet="before.png" alt="Image two" style={{height: "250px", width: "250px"}} />}
                        changePositionOnHover={true}
                        handle={<ReactCompareSliderHandle buttonStyle={{height: "35px", width: "35px"}} />}
                    />
                </FlexItem>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <FlexItem>
                    Method 3
                    <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage src="after.png" srcSet="after.png" alt="Image one" style={{height: "250px", width: "250px"}} />}
                        itemTwo={<ReactCompareSliderImage src="before.png" srcSet="before.png" alt="Image two" style={{height: "250px", width: "250px"}} />}
                        changePositionOnHover={true}
                        handle={<ReactCompareSliderHandle buttonStyle={{height: "35px", width: "35px"}} />}
                    />
                </FlexItem>
            </CardsContainer>
            &nbsp;
            <FlexItem>
                Methods combined
                <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src="after.png" srcSet="after.png" alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src="before.png" srcSet="before.png" alt="Image two" />}
                    changePositionOnHover={true}
                    handle={<ReactCompareSliderHandle buttonStyle={{height: "35px", width: "35px"}} />}
                    style={{width: "250px", margin: "0 auto"}}
                />
            </FlexItem>

            <FlexItem>
                <button onClick={handleClick} style={{borderStyle: "dotted"}}>FETCH DATA &nbsp;</button>
                {data}
            </FlexItem>
        </div>
    );
}
