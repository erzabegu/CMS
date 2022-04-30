import { CustomColorPicker } from 'reader/atoms';
import styled from 'styled-components';
import { PickerWrapper } from './styled';

interface Props {
    openPicker: boolean;
    width: string;
    color: string;
    triangle?: any;
    colorsPalette?: Array<string>;
    onChangeComplete(color: any): void;
}

const AddCustomPicker = ({ openPicker, width, color, onChangeComplete, colorsPalette, triangle }: Props) => {
    return (openPicker && <PickerWrapper>
        <CustomColorPicker width={width} color={color} triangle={triangle} colorsPalette={colorsPalette} onChangeComplete={onChangeComplete} />
    </PickerWrapper>)
}

export default AddCustomPicker
