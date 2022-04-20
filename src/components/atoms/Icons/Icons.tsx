import React from 'react'
import { StyledSpan } from './styled';

interface Props {
    iconName: React.ReactNode;
    color?: string;

    onClick?(): void;
}

const Icon = ({ iconName, color, onClick }: Props) => {
    return <StyledSpan style={{ color: color }} onClick={onClick}>{iconName}</StyledSpan>
}

export default Icon;

