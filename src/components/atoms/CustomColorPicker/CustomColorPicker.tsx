import Github from 'react-color/lib/components/github/Github';

interface Props {
    color: string;
    width?: string;
    colorsPalette?: Array<string>;
    triangle?: any;
    onChangeComplete(color: any): void;
}

const CustomColorPicker = ({ color, onChangeComplete, width, colorsPalette, triangle }: Props) => {
    return <Github
        width={width}
        color={color}
        colors={colorsPalette}
        onSwatchHover={onChangeComplete}
        triangle={triangle}
    />;
}

export default CustomColorPicker