'use client'

import React from 'react';
import { IInputProps } from "@/interfaces/common";
import { Input } from "antd";

export default function InputElement({ placeholder, value, onChange, disabled = false, status }: IInputProps) {
    return (
        <div
            className="relative pt-4"
        >
            <div
                className="text-xs h-4 absolute" style={{top: "0"}}
            >
                {value && value !== "" ? placeholder : ""}
            </div>
            <Input
                placeholder={placeholder}
                value={value}
                status={status}
                onChange={(e) => onChange && onChange(e.target.value as any)}
                disabled={disabled}
            />
        </div>
    )
};