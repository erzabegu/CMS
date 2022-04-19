import { IDefaultText } from "src/types/IDefaultText";
import styled from "styled-components";

const StyledButton = styled.span<IDefaultText>`
    color: ${({ theme, color }) => color || theme.colors.primary.black};
    fontSize: ${({ theme, color }) => color || theme.fontSize.xxl};
    cursor: pointer;
`

export { StyledButton }