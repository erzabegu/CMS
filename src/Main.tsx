import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "reader/routes"
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

const Main = () => {
    return <>
        <BrowserRouter>
            {/* <DndProvider backend={HTML5Backend} debugMode={true}> */}
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Routes />
            </ThemeProvider>
            {/* </DndProvider> */}
        </BrowserRouter>
    </>
}

export default Main