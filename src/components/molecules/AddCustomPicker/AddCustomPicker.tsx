import React from 'react'
import { CustomColorPicker } from 'reader/atoms';
import styled from 'styled-components';

interface Props {
    openPicker: boolean;
    width: string;
    color: string;
    onChangeComplete(color: any): void;
}

const AddCustomPicker = ({ openPicker, width, color, onChangeComplete }: Props) => {
    return (openPicker && <PickerWrapper>
        <CustomColorPicker width={width} color={color} onChangeComplete={onChangeComplete} />
    </PickerWrapper>)
}

export default AddCustomPicker

const PickerWrapper = styled.div`
    padding: '0px 10px'
`