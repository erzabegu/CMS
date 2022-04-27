import { TextareaAutosize } from '@mui/material';
import { IDefaultAttributes } from 'src/types/IDefaultAttributes';

interface Props {
    style?: IDefaultAttributes;
    children?: string;
    defaultValue?: string;
    placeholder?: string;
    ref?: any;

    onBlur?(): void;
    onClick?(): void;
    onFocus?(): void;
    onChange?(e?: any): void;
}

const TextArea = (props: Props) => {
    return <TextareaAutosize {...props} />
}

export default TextArea