'use client'

import React from 'react';
import { IRipple } from "@/interfaces/common";

export default function RippleElement({ color = "#fff" }: IRipple) {
    return (
        <div
            className="ripple"
        >
            <div
                style={{borderColor: color}}
            />
            <div
                style={{borderColor: color}}
            />
        </div>
    )
};