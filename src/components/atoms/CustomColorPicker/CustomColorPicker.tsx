import Github from 'react-color/lib/components/github/Github';

interface Props {
    color: string;
    width?: string;
    colorsPalette?: Array<string>
    onChangeComplete(color: any): void;
}

const CustomColorPicker = ({ color, onChangeComplete, width, colorsPalette }: Props) => {
    return <Github
        width={width}
        color={color}
        colors={colorsPalette}
        onSwatchHover={onChangeComplete}
    />
}

export default CustomColorPicker