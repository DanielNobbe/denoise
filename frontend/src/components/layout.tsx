'use client'

import { ConfigProvider, Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import {BookOutlined, FileImageOutlined, HighlightOutlined, HomeOutlined, LinkOutlined} from "@ant-design/icons";
import { IComponentChildren } from "@/interfaces/common";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useStore } from "@/util/store";
import { useMsal } from "@azure/msal-react";
import {InteractionRequiredAuthError} from "@azure/msal-browser";
import {Api} from "@/util/api";
import RippleElement from "@/components/elements/ripple";
import {ToastContainer} from "react-toastify";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

function getExternalItem(
    label: React.ReactNode,
    key: React.Key,
): MenuItem {
    return {
        key,
        label,
        external: "true"
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(`(${process.env.NEXT_PUBLIC_ENV_NAME}) Home`, "", <HomeOutlined />),
    getItem("Denoise", "denoise", <HighlightOutlined />),
    getItem("Image Manipulator", "imagemanipulator", <FileImageOutlined />),
    getItem("Links", "links", <LinkOutlined />, [
        getExternalItem("External source", "//wikipedia.com"),
    ]),
];

export default function LayoutElement( { children }: IComponentChildren) {
    return (
        <Layout style={{ minHeight: "100vh", maxHeight: "100vh", overflow: "hidden" }}>
            <Sider style={{background: "#fff", boxShadow: "2px 0 12px -9px rgba(0, 0, 0, 0.75)"}}>
                <Menu
                    style={{marginTop: "20px"}}
                    defaultSelectedKeys={[window.location.pathname.replaceAll("/", "")]}
                    mode="inline"
                    items={items}
                    onClick={(e: any) => {}}
                />
            </Sider>
            <div className="w-full overflow-y-auto">
                {children}
            </div>
        </Layout>
    )
}