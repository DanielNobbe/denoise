'use client'

import {useState} from "react";

export default function Testdata2() {
    const [data, setData] = useState("No data fetched as of yet");

    const fetchData = async () => {
        const req = await fetch('https://catfact.ninja/fact');
        const newData = await req.json();
        return setData(newData);
    };

    const handleClick = (event: any) => {
        return;
        event.preventDefault();
        fetchData();
    };

    return (
        <div style={{marginTop: "25px"}}>
            <div
                onClick={handleClick}
                style={{
                    cursor: "pointer",
                    border: "2px solid red",
                    borderRadius: "10px",
                    width: "100px",
                    textAlign: "center"
                }}
            >
                Fetch data
            </div>
            {data}
        </div>
    );
}
