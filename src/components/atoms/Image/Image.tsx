import React from 'react'
import { IDefaultImage } from 'reader/types';
import styled from 'styled-components'

interface Props {
    src: string;
    height?: number;
    maxWidth?: number;
    onClick?(): void;
    style?: any;
}

const Image = ({ src, height, maxWidth, onClick, style }: Props) => {
    return <StyledImage style={style} src={src} height={height} maxWidth={maxWidth} onClick={onClick} />
}

export default Image

const StyledImage = styled.img<IDefaultImage>`
    width:  ${({ maxWidth, theme }) => !!maxWidth ? `${maxWidth}px` : `${theme.imageSize.width}px`};
    height:  ${({ height, theme }) => !!height ? `${height}px` : `${theme.imageSize.height}px`};
    // object-fit: contain;
    position: relative;
`