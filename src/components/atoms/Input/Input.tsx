import React from 'react';
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
    backgroundColor?: string;
    contenteditable?: boolean;
    max?: number;
    min?: number;
    display?: string;
    value?: string | number;

    onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
    onBlur?(): void
    onClick?(): void
    onFocus?(e: any): void;
}

const Input = React.forwardRef((props: Props, ref) => {
    return <StyledInput ref={ref} {...props} />
})

export default Input
