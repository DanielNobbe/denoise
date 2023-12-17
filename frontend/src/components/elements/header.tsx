'use client'

import React from 'react';
import { IHeader } from "@/interfaces/common";
import InputElement from "./input";

export default function HeaderElement({ title, hasInput = false, inputPlaceholder, inputValue, setInputValue }: IHeader) {
    return (
        <div
            className="p-5 mb-8 min-w-full shadow-md rounded-md flex items-center justify-between"
            style={{background: "#fff"}}
        >
            <h1
                className="text-2x1"
            >
                {title}
            </h1>
            {hasInput &&
                <div
                    style={{width: "300px"}}
                >
                    <InputElement
                        placeholder={inputPlaceholder as string}
                        value={inputValue as string}
                        onChange={(e: any) => setInputValue && setInputValue(e)}
                    />
                </div>
            }
        </div>
    )
};