import { ColumnsType } from "antd/es/table";
import {ButtonType} from "antd/es/button";
import {InputProps} from "antd";
import {IDenoise} from "@/interfaces/denoise";

export interface IStore {
    denoise: IDenoise[];
    setDenoise: Function;
    loadingDenoise: boolean;
    setLoadingDenoise: Function;
}

export interface IErrorResponse {
    Message: string;
    Errors: IError[];
};

export interface IError {
    Code: string,
    Message: string,
};

export interface IOption {
    Value: string;
}

export interface IParameter {
    Id: number;
    Value: string;
}

export interface IComponentChildren {
    children: React.ReactNode;
};

export interface ITableProps {
    columns: ColumnsType<any>;
    data: any;
    onClick?: Function;
    expandable?: React.JSX.Element | string | boolean | undefined;
    rowClassName?: any;
    onExpand?: Function;
    expandedRows?: string[] | number[];
};

export interface IHeader {
    title: string;
    hasInput?: boolean;
    inputPlaceholder?: string;
    inputValue?: string;
    setInputValue?: Function;
};

export interface ILoader {
    title?: string;
    actionName?: string;
    action?: React.MouseEventHandler;
};

export interface IRipple {
    color: string;
};

export interface IButtonProps {
    backgroundColor?: string;
    type?: ButtonType;
    content: any;
    onClick?: React.MouseEventHandler;
};

export interface ISelectProps {
    mode?: "multiple" | "tags" | undefined;
    defaultValue: string[] | string | null | undefined;
    placeholder: string;
    onChange: Function;
    options: ISelectOption[];
    disabled?: boolean;
};

export interface ISelectOption {
    value: string;
    label: string;
    disabled?: boolean;
};

export interface IInputProps {
    placeholder: string;
    value: string;
    onChange?: Function;
    disabled?: boolean;
    status?: InputProps["status"];
};

export interface ICardProps {
    children: any;
    title: string;
    onClick?: React.MouseEventHandler;
};

export interface IPopupProps {
    children: any;
    onClose?: React.MouseEventHandler;
}