import React from "react";
import { Input, Label } from "reader/atoms";
import styled from "styled-components";

interface Props {
    labelName: string;
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
}

const InputWrapper = (props: Props) => {
    return <Inputwrapper>
        <Label labelName={props.labelName} />
        <Input type={props.type} defaultValue={props.defaultValue} {...props} />
    </Inputwrapper>
}

export default InputWrapper

const Inputwrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`