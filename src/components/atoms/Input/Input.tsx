import React from 'react'
import { IDefaultText } from 'src/types/IDefaultText';
import styled from 'styled-components';
import { theme } from 'reader/styles'
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
}



const Input = ({ type, defaultValue, onChange, onBlur, onClick, onFocus, autoFoucus, style, fontSize, fontWeight, color, lineHeight, textAlign, margin, padding, ref }: Props) => {
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
            fontSize={fontSize}
            fontWeight={fontWeight}
            color={color}
            lineHeight={lineHeight}
            textAlign={textAlign}
            margin={margin}
            padding={padding}
            ref={ref}
        />
    </>
}

export default Input
