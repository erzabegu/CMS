import { ReactElement } from "react";
import { RenderChart, RenderCode, RenderImage, RenderLineChart, RenderList, RenderTable, RenderText } from "reader/molecules"
import { ItemType } from "src/enums";
import { RenderItemsWrapper } from "../RenderItemWrarpper";


interface Props {
    type: string;
    item: any;
    pageId: any;
    sectionId: any;
    handleUpdate?(passedItem: any): void;
    handleUpdateWithSection?(passedItem: any, pageId: any, sectionId: any, itemId: any): void;
}


const RenderItems = ({ type, item, handleUpdate, handleUpdateWithSection, sectionId, pageId }: Props) => {

    interface ItemTypeInterface {
        text: ReactElement;
        image: ReactElement;
        chart: ReactElement;
        list: ReactElement,
        code: ReactElement,
        lineChart: ReactElement,
        table: ReactElement
    }

    const handle: ItemTypeInterface = {
        [ItemType.TEXT]: <RenderText item={item} handleUpdate={handleUpdate} />,
        [ItemType.IMAGE]: <RenderImage item={item} handleUpdate={handleUpdate} />,
        [ItemType.CHART]: <RenderChart item={item} handleUpdate={handleUpdate} />,
        [ItemType.LIST]: <RenderList item={item} handleUpdate={handleUpdate} handleUpdateWithSection={handleUpdateWithSection} sectionId={sectionId} pageId={pageId} />,
        [ItemType.CODE]: <RenderCode item={item} handleUpdate={handleUpdate} />,
        [ItemType.LINECHART]: <RenderLineChart item={item} handleUpdate={handleUpdate} />,
        [ItemType.TABLE]: <RenderTable />
    }

    return <RenderItemsWrapper>{handle[type as keyof ItemTypeInterface]}</RenderItemsWrapper>

}
export default RenderItems