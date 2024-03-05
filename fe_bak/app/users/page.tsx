import React from 'react';
import * as https from "https";

const UsersPage = async () => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const res = await fetch(
        "https://127.0.0.1:7071/prediction", {
            method: "GET",
            headers: { accept: "application/json" },
        }
    );
    const str: string = await res.json();
    return (
        <>
            <h1>Users</h1>
            <ul>
                {str}
            </ul>
        </>
    );
};

export default UsersPage;