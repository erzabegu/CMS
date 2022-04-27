import { RenderChart, RenderCode, RenderImage, RenderList, RenderText } from "reader/molecules"
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'


interface Props {
    type: string;
    item: any;
    handleUpdate?(passedItem: any): void;
    handleUpdateWithSection?(passedItem: any, pageId: any, sectionId: any, itemId: any): void;
    sectionId: any;
    pageId: any;
}


const RenderItems = ({ type, item, handleUpdate, handleUpdateWithSection, sectionId, pageId }: Props) => {
    switch (type) {
        case 'text':
            return <RenderText item={item} handleUpdate={handleUpdate} />
        case 'image':
            return <RenderImage item={item} handleUpdate={handleUpdate} />
        case 'chart':
            return <RenderChart item={item} handleUpdate={handleUpdate} />
        case 'list':
            return <RenderList item={item} handleUpdate={handleUpdate} handleUpdateWithSection={handleUpdateWithSection} sectionId={sectionId} pageId={pageId} />
        case 'code':
            return <RenderCode item={item} handleUpdate={handleUpdate} />
        default:
            break;
    }
}
export default RenderItems