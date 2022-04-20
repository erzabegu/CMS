import React from 'react';
import styled from 'styled-components';
import { StyledInput } from './styled';

interface Props {
    type: string;
    defaultValue?: string | number;
    autoFoucus?: boolean;
    style?: any;
    fontSize?: string;
    fontWeight?: number;
    lineHeight?: string;
    color?: string;
    textAlign?: string;
    margin?: string;
    padding?: string;
    ref?: any;
    outline?: any;
    fontStyle?: any;
    accept?: string;
    width?: string;
    contenteditable?: boolean;
    max?: number;
    min?: number;
    value?: string | number;

    onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
    onBlur?(): void
    onClick?(): void
    onFocus?(e: any): void;
}



const Input = (props: Props) => {
    return <>
        {(props.type === 'text' || props.type === 'number') && <StyledInput {...props} />}
    </>
}

export default Input
