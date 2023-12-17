import { Configuration } from "@azure/msal-browser";

export const msalConfig: Configuration = {
    auth: {
        clientId: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT as string,
        authority: process.env.NEXT_PUBLIC_AZURE_AD_AUTHORITY,
        redirectUri: process.env.NEXT_PUBLIC_APP_URL,
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    },
};