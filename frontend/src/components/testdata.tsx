'use client'
import {useState} from "react";
import {ReactCompareSlider, ReactCompareSliderHandle, ReactCompareSliderImage} from 'react-compare-slider';

export default function Testdata() {
    const [data, setData] = useState("test");

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
            <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src="before.png" srcSet="before.png" alt="Image one" style={{height: "250px", width: "250px"}} />}
                itemTwo={<ReactCompareSliderImage src="after.png" srcSet="after.png" alt="Image two" />}
                changePositionOnHover={true}
                handle={<ReactCompareSliderHandle buttonStyle={{height: "35px", width: "35px"}} />}
            />
            <button onClick={handleClick}>FETCH DATA</button>
            {data}
        </div>
    );
}