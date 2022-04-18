import React from 'react'
import { CustomColorPicker } from 'reader/atoms';

interface Props {
    openPicker: boolean;
    width: string;
    height: string;
    color: string;
    onChangeComplete(color: any): void;
}

const AddCustomPicker = ({ openPicker, width, height, color, onChangeComplete }: Props) => {
    return (openPicker && <div style={{ padding: '0px 10px' }}>
        <CustomColorPicker width={width} color={color} height={height} onChangeComplete={onChangeComplete} />
    </div>)
}

export default AddCustomPicker