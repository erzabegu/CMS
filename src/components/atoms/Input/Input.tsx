import React from 'react'
import { StyledInput } from './styled';

interface Props {
    type: string;
    defaultValue: string | number;
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
    onBlur?(): void
    onClick?(): void
    onFocus?(e: any): void;
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
}



const Input = (props: Props) => {
    return <>
        <StyledInput type={props.type} defaultValue={props.defaultValue} {...props} />
    </>
}

export default Input
