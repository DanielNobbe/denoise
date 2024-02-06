'use client'

import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import {FileImageOutlined, HighlightOutlined, HomeOutlined, LinkOutlined} from "@ant-design/icons";
import { IComponentChildren } from "@/interfaces/common";
import { useRouter } from 'next/navigation';

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
    getItem(`(${process.env.NEXT_PUBLIC_ENV_NAME}) Home`, "/", <HomeOutlined />),
    getItem("Denoise", "denoise", <HighlightOutlined />),
    getItem("Image Manipulator", "imagemanipulator", <FileImageOutlined />),
    getItem("Links", "links", <LinkOutlined />, [
        getExternalItem("External source", "//wikipedia.com"),
    ]),
];

export default function LayoutElement( { children }: IComponentChildren) {
    const router = useRouter();
    return (
        <Layout style={{ minHeight: "100vh", maxHeight: "100vh", overflow: "hidden" }}>
            <Sider style={{background: "#fff", boxShadow: "2px 0 12px -9px rgba(0, 0, 0, 0.75)"}}>
                <Menu
                    style={{marginTop: "20px"}}
                    defaultSelectedKeys={[window.location.pathname.replaceAll("/", "")]}
                    mode="inline"
                    items={items}
                    onClick={(e: any) => e.item.props.external === 'true' ? window.open(e.key, '_blank') : router.push(e.key)}
                />
            </Sider>
            <div className="w-full overflow-y-auto">
                {children}
            </div>
        </Layout>
    )
}