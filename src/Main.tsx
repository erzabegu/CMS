import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "reader/routes"
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles";

const Main = () => {
    return <>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Routes />
            </ThemeProvider>
        </BrowserRouter>
    </>
}

export default Main