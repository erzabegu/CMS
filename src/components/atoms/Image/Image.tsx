import React from 'react';
import { StyledImage } from './styled';

interface Props {
    src: string;
    height?: number;
    width?: number;
    style?: any;
    onClick?(): void;
}

const Image = ({ src, height, width, onClick, style }: Props) => {
    return <StyledImage style={style} src={src} height={height} width={width} onClick={onClick} />;
}


export default Image
