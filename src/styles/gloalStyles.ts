import React from "react";
import {createGlobalStyle} from "styled-components";
import {theme} from "./theme";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

  * {
    font-family: 'Lato', sans-serif !important;
  } 
  body {
    overflow-y: scroll !important;
    transition: all 1ms linear;
    box-sizing: border-box;
    padding: 0 !important;
    min-height: 100vh;
    margin: 0;
  }

`;