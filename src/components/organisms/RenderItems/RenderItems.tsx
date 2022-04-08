import { RenderImage, RenderText } from "reader/molecules"

interface Props {
    type: string;
}

const RenderItems = ({ type }: Props) => {
    switch (type) {
        case 'text':
            return <RenderText />
        case 'image':
            return <RenderImage />
        default:
            break;
    }
}
export default RenderItems