'use client'

import { IComponentChildren } from "@/interfaces/common";
import LayoutElement from "./layout";
import { EventType, PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "@/util/msal";
import { MsalProvider } from "@azure/msal-react";

const msalInstance = new PublicClientApplication(msalConfig);
msalInstance.addEventCallback((event: any) => {
    try {
        if (event.eventType === EventType.LOGIN_SUCCESS && event?.payload?.account) {
            msalInstance.setActiveAccount(event?.payload?.account);
        }
    } catch (error) {
        console.log("Something went wrong in msalInstance.addEventCallback. Error: ", error);
    }
});

export default function AuthenticationLayer({ children }: IComponentChildren) {
    return (
        <MsalProvider instance={msalInstance}>
            <LayoutElement>
                {children}
            </LayoutElement>
        </MsalProvider>
    )
}