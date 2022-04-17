import React from 'react'
import { IDefaultImage } from 'reader/types';
import styled from 'styled-components'

interface Props {
    src: string;
    height?: number,
    maxWidth?: number
}

const Image = ({ src, height, maxWidth }: Props) => {
    return <StyledImage src={src} height={height} maxWidth={maxWidth} />
}

export default Image

const StyledImage = styled.img<IDefaultImage>`
    max-width:  ${({ maxWidth, theme }) => !!maxWidth ? `${maxWidth}px` : `${theme.imageSize.width}px`};
    height:  ${({ height, theme }) => !!height ? `${height}px` : `${theme.imageSize.height}px`};
    object-fit: contain;
`