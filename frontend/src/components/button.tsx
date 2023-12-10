'use client'

import React from 'react';
import { IButtonProps } from "@/interfaces/common";
import { Button } from "antd";

export default function ButtonElement({ type = "primary", content, onClick, backgroundColor }: IButtonProps) {
    return (
        <Button
            style={{backgroundColor: backgroundColor || process.env.NEXT_PUBLIC_PRIMARY_COLOR}}
            type={type}
            onClick={(e) => onClick && onClick(e)}
        >
            {content}
        </Button>
    )
};