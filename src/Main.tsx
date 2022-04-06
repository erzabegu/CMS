import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "reader/routes"
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles";
import { Provider } from "react-redux";
import { store } from "./store";

const Main = () => {
    return <>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <Routes />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </>
}

export default Main