import React from "react";
import { IDefaultText } from "src/types/IDefaultText";
import styled from "styled-components";

interface Props {
    value: any;
    onClick?(): void;
    color?: string;
}
const Button = ({ value, onClick, color }: Props) => {
    return <StyledSpan onClick={onClick} color={color}>
        {value}
    </StyledSpan>
}

export default Button;

const StyledSpan = styled.div<IDefaultText>`
    color: ${({ theme, color }) => color || theme.colors.primary.black};
    fontSize: 30px,
`