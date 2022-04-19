import { IDefaultImage } from "reader/types";
import styled from "styled-components";

const StyledImage = styled.img<IDefaultImage>`
    width:  ${({ width, theme }) => width ? `${width}px` : `${theme.imageSize.width}px`};
    height:  ${({ height, theme }) => height ? `${height}px` : `${theme.imageSize.height}px`};
    // object-fit: contain;
    position: relative;
`
export { StyledImage }