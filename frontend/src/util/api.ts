// @ts-ignore
import toast from "./toast";
import { InteractionRequiredAuthError } from "@azure/msal-browser";

export const Api = {
    getDenoise: () => {
        return fetchFromServer("GET", "/denoise");
    },
    postImage: (name: string) => {
        return fetchFromServer("POST", "/image/" + name);
    },
};

const fetchFromServer = async(method: string, path: string, data: any = undefined, stringify = true) => {
    let options = buildRequest(method, data, stringify);
    try {
        let response = await fetch(process.env.NEXT_PUBLIC_API_URL + path, options);
        if (Math.floor(response.status / 100) !== 2) {
            const res = await response.json();
            if (res.Errors) {
                console.log("An error occurred: " + res.Errors);
            }
        }
    } catch (error) {
        let message = "Something went wrong! Try again later.";
        if (error instanceof Error) message = error.message;
        if (error instanceof InteractionRequiredAuthError || message === "Failed to fetch") {
            toast("info", "Authentication session expired! Re-authenticating now...");
        } else {
            toast("error", message);
        }
        return false;
    }
};

const getDataStream = (path: string) => {
    const url = process.env.NEXT_PUBLIC_API_URL + path;
    if ("EventSource" in window) {
        let source = new EventSource(url, { withCredentials: true });
        source.addEventListener("open", function(e) {
            console.log("Connected to the stream!");
        }, false);
    }
};

const buildRequest = (method: string, data: any = undefined, stringify: boolean) => {
    return {
        method,
        body: typeof data !== "undefined" ?
            (stringify ? JSON.stringify(data) : data)
            :
            void 0,
        headers: {
            ...(stringify && { "Content-Type": "application/json" }),
            ...(sessionStorage?.getItem('authKey') && { "Authorization": `Bearer ${sessionStorage.getItem("authKey")}` }),
        }
    };
};