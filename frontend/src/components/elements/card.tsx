'use client'

import React from 'react';
import { ICardProps } from "@/interfaces/common";
import { Card } from "antd";

export default function CardElement({ children, title, onClick }: ICardProps) {
    return (
        <Card
            title={title}
            onClick={onClick}
        >
            {children}
        </Card>
    )
};