import { CustomColorPicker } from 'reader/atoms';
import styled from 'styled-components';

interface Props {
    openPicker: boolean;
    width: string;
    color: string;
    colorsPalette?: Array<string>;

    onChangeComplete(color: any): void;
}

const AddCustomPicker = ({ openPicker, width, color, onChangeComplete, colorsPalette }: Props) => {
    return (openPicker && <PickerWrapper>
        <CustomColorPicker width={width} color={color} colorsPalette={colorsPalette} onChangeComplete={onChangeComplete} />
    </PickerWrapper>)
}

export default AddCustomPicker

const PickerWrapper = styled.div`
    padding: 0px 10px;
`