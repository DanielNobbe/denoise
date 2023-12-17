'use client'

import React from 'react';
import { IPopupProps } from "@/interfaces/common";

export default function PopupElement({ children, onClose }: IPopupProps) {
    return (
        <div
            className="fixed top-0 left-0 right-0 w-full h-full flex justify-center items-center z-10"
        >
            <div
                className="absolute w-full h-full cursor-pointer"
                onClick={onClose}
                style={{backgroundColor: "#000000a8"}}
            />
            <div
                className="absolute p-20 roudned-lg"
                style={{backgroundColor: "#fff"}}
            >
                {children}
            </div>
        </div>
    )
};