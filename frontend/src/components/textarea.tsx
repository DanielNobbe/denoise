'use client'

import React from 'react';
import { IInputProps } from "@/interfaces/common";
import { Input } from "antd";

const { TextArea } = Input;
export default function TextAreaElement({ placeholder, value, onChange, disabled = false }: IInputProps) {
    return (
        <div
            className="relative pt-4"
        >
            <div
                className="text-xs h-4 absolute"
                style={{top: "0"}}
            >
                {value && value !== "" ? placeholder : ""}
            </div>
            <TextArea
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange && onChange(e.target.value as any)}
                disabled={disabled}
                rows={4}
            />
        </div>
    )
};