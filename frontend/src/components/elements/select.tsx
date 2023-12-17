'use client'

import React from 'react';
import { ISelectProps } from "@/interfaces/common";
import { Select } from "antd";

export default function SelectElement({ placeholder, onChange, options, defaultValue, disabled, mode = undefined }: ISelectProps) {
    return (
        <div
            className="relative pt-4"
        >
            <div
                className="text-xs h-4 absolute"
                style={{top: "0"}}
            >
                {((defaultValue && mode !== "multiple" && defaultValue !== "") || (defaultValue && mode === "multiple" && defaultValue.length > 0)) ? placeholder : ""}
            </div>
            <Select
                mode={mode}
                value={defaultValue as any}
                placeholder={placeholder}
                onChange={(e) => onChange(e)}
                options={options}
                style={{width: "100%"}}
                disabled={disabled}
            />
        </div>
    )
};