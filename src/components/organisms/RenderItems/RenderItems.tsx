import { RenderImage, RenderText } from "reader/molecules"

interface Props {
    type: string;
    item: any;
    handleUpdate?(passedItem: any): void;
}

const RenderItems = ({ type, item, handleUpdate }: Props) => {
    switch (type) {
        case 'text':
            return <RenderText handleUpdate={handleUpdate} item={item} />
        case 'image':
            return <RenderImage />
        default:
            break;
    }
}
export default RenderItems