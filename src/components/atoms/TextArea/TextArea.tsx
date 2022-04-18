import { TextareaAutosize } from '@mui/material';
import React from 'react';
import { IDefaultText } from 'src/types/IDefaultText';
import styled from 'styled-components';

interface Props {
    onBlur?(): void
    onClick?(): void
    onFocus?(e: any): void;
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
    children?: string;
    defaultValue?: string;
    placeholder?: string;
}

const TextArea = (props: Props) => {
    return <TextareaAutosize
        {...props}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
    />
}

export default TextArea


const StyledTextArea = styled.div`
    border: none;
    padding: 5px 10px;
    text-align: center;
    transition: 1s all;
    margin: 0px auto;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 7px;
    &:focus {
        outline: none;
        background-color: #F0EEF0;
    }

`