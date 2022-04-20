import React from 'react';
import { StyledLabel } from './styled';

interface Props {
    labelName: string;
}

const Label = ({ labelName }: Props) => {
    return <StyledLabel>{labelName}</StyledLabel>;
}

export default Label;
