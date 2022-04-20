import React from 'react'

interface Props {
    iconName: React.ReactNode;
    color?: string;

    onClick?(): void;
}

const Icon = ({ iconName, color, onClick }: Props) => {
    return <span style={{ color: color }} onClick={onClick}>{iconName}</span>
}

export default Icon;

