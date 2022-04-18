import React from 'react'
import { HuePicker } from 'react-color'


interface Props {
    color: string;
    onChangeComplete(color: any): void;
    width: string;
    height: string;
}

const CustomColorPicker = ({ color, onChangeComplete, width, height }: Props) => {
    return <>
        <HuePicker
            width={width}
            height={height}
            color={color}
            onChangeComplete={onChangeComplete}
        />
    </>
}

export default CustomColorPicker