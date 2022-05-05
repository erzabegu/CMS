import { useEffect } from "react";
import { RenderChart, RenderCode, RenderImage, RenderLineChart, RenderList, RenderText } from "reader/molecules"


interface Props {
    type: string;
    item: any;
    handleUpdate?(passedItem: any): void;
    handleUpdateWithSection?(passedItem: any, pageId: any, sectionId: any, itemId: any): void;
    sectionId: any;
    pageId: any;
}


const RenderItems = ({ type, item, handleUpdate, handleUpdateWithSection, sectionId, pageId }: Props) => {
    useEffect(() => {
        console.log(type, "type")
    }, [type])
    const handleComponent = () => {
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
            case 'lineChart':
                return <RenderLineChart item={item} handleUpdate={handleUpdate}  />;
            default:
                break;
        }
    }
    return <>
        {handleComponent()}
    </>
}
export default RenderItems