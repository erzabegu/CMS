import React from 'react';
import styled from "styled-components";

interface Props {
    maxWidth?: string;
    displayDirection?: string;
    children: React.ReactNode;
}

export default function Container({ children, maxWidth, displayDirection }: Props) {
    return <>
        <StyledContainer maxWidth={maxWidth} displayDirection={displayDirection}>
            {children}
        </StyledContainer>
    </>;
}

const StyledContainer = styled.div<{ maxWidth?: string; displayDirection?: string }>`
  max-width: ${props => props.maxWidth ? props.maxWidth : '1320px'};
  display: ${props => props.displayDirection && props.displayDirection};
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: border-box;
`;