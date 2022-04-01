import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "reader/routes"

const Main = () => {
    return <>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </>
}

export default Main