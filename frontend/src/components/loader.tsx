'use client'

import React from 'react';
import { ILoader } from "@/interfaces/common";
import RippleElement from "./ripple";
import ButtonElement from "./button";

export default function LoaderElement({ title = "default", actionName, action }: ILoader) {
    return (
        <div
            className="z-10 fixed top-0 left-0 right-0 w-full h-full flex flex-col justify-center items-center"
            style={{backgroundColor: "#000000a8"}}
        >
            <RippleElement
                color={"#fff"}
            />
            <p
                className="text-lg"
                style={{color: "#fff", whiteSpace: "pre-wrap", textAlign: "center"}}
            >
                {title}
            </p>
            {(actionName !== "" && action) &&
                <div
                    className="pt-5"
                >
                    <ButtonElement
                        content={actionName}
                        onClick={action}
                    />
                </div>
            }
        </div>
    )
};