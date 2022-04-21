import React from 'react'
import { StyledSpan } from './styled';

interface Props {
    iconName: React.ReactNode;
    color?: string;
    backgroundColor?: string;

    onClick?(e?: any): void;
}

const Icon = ({ iconName, color, onClick, backgroundColor }: Props) => {
    return <StyledSpan style={{ color: color, backgroundColor: backgroundColor }} onClick={onClick}>{iconName}</StyledSpan>
}

export default Icon;

