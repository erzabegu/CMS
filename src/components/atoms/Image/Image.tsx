import React from 'react'
import styled from 'styled-components'

interface Props {
    src: string;
}

const Image = ({ src }: Props) => {
    return <StyledImage src={src} />
}

export default Image

const StyledImage = styled.img`
    max-width: 100px;
    height: 50px;
    object-fit: contain;
`