import { IDefaultText } from "src/types/IDefaultText";
import styled from "styled-components";
import { StyledButton } from "./styled";

interface Props {
    value?: string | number;
    color?: string;
    fontSize?: string;
    onClick?(): void;
}

const Button = ({ value, onClick, color, fontSize }: Props) => {
    return <StyledButton onClick={onClick} color={color} fontSize={fontSize}>
        {value}
    </StyledButton>
}

export default Button;
