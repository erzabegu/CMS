import React from 'react'
import styled from 'styled-components';

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
    color?: string;
}


const Input = ({type, defaultValue, onChange, onBlur, onClick, onFocus, autoFoucus, style, fontSize, fontWeight, color}: Props) => {
    return <>
        <StyledInput 
            type={type}
            defaultValue={defaultValue}
            onChange={onChange}
            onClick={onClick}
            onBlur={onBlur}
            onFocus={onFocus}
            autoFocus={autoFoucus}
            style={style}
        />
    </>
}

export default Input

const StyledInput = styled.input`


`