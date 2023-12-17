'use client'

import { ConfigProvider, Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { BookOutlined, HomeOutlined, LinkOutlined } from "@ant-design/icons";
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
    getItem("Denoise", "denoise", <BookOutlined />),
    getItem("Links", "links", <LinkOutlined />, [
        getExternalItem("External source", "//wikipedia.com"),
    ]),
];

export default function LayoutElement( { children }: IComponentChildren) {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const { instance } = useMsal();
    const { setDenoise, setLoadingDenoise } = useStore();

    useEffect(() => {
        document.documentElement.style.setProperty("--primary-color", process.env.NEXT_PUBLIC_PRIMARY_COLOR as string);
        instance.initialize().then(() => {
            instance.handleRedirectPromise().then(() => {
                const accounts = instance.getAllAccounts();
                if (accounts.length === 0) {
                    instance.loginRedirect();
                } else {
                    const config = {
                        scopes: [process.env.NEXT_PUBLIC_AZURE_AD_SCOPE as string],
                        account: accounts[0],
                    };
                    instance.acquireTokenSilent(config).then((response: any) => {
                        sessionStorage.setItem("authKey", response.accessToken);
                        fetchAppData();
                        setIsLoading(false);
                        interceptApi();
                    }).catch(() => {
                        window.location.reload();
                        return instance.acquireTokenRedirect(config);
                    });
                }
            }).catch((err: any) => {
                console.log(err);
            });
        })
    }, []);

    const interceptApi = () => {
        const { fetch: originalFetch } = window;
        window.fetch = async (...args) => {
            let [resource, config] = args;
            try {
                const response = await originalFetch(resource, config);
                return response;
            } catch (err: any) {
                if (err instanceof InteractionRequiredAuthError || err.message === "Failed to fetch") {
                    const accounts = instance.getAllAccounts();
                    const request = {
                        scopes: [process.env.NEXT_PUBLIC_AZURE_AD_SCOPE as string],
                        accounts: accounts[0],
                    }
                    return instance.acquireTokenSilent(request).then((response: any) => {
                        sessionStorage.setItem("authKey", response.accessToken);
                        return originalFetch(resource, config).then((response) => {
                            return response as Response;
                        });
                    }).catch(async () => {
                        window.location.reload();
                        instance.acquireTokenRedirect(request);
                        const response = await originalFetch(resource, config);
                        return response as Response;
                    })
                }
                return err;
            }
        };
    }

    const fetchAppData = async () => {
        await Api.getDenoise().then((denoise) => {
            if (denoise !== false) {
                setDenoise(denoise);
                setLoadingDenoise(false);
            }
        });
    };

    return (
        <Layout style={{ minHeight: "100vh", maxHeight: "100vh", overflow: "hidden" }}>
            <ConfigProvider theme={{token: { colorPrimary: process.env.NEXT_PUBLIC_PRIMARY_COLOR } }}>
                <div className={isLoading ? "wrapper" : "wrapper wrapper__hidden"} >
                    <RippleElement color={process.env.NEXT_PUBLIC_PRIMARY_COLOR as string} />
                </div>
                <Sider style={{background: "#fff", boxShadow: "2px 0 12px -9px rgba(0, 0, 0, 0.75)"}}>
                    <Menu
                        defaultSelectedKeys={[window.location.pathname.replaceAll("/", "")]}
                        mode="inline"
                        items={items}
                        onClick={(e: any) => e.item.props.external === "true" ? window.open(e.key, "_blank") : router.push(e.key)}
                    />
                </Sider>
                <div className="w-full overflow-y-auto">
                    {children}
                </div>
                <ToastContainer />
            </ConfigProvider>
        </Layout>
    )
}