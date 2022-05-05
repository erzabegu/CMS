import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Button } from "reader/atoms";
import { AddSectionDialog } from "reader/molecules";
import { DropZone, Header, PagesWrapper, RenderItems, WidgetList } from "reader/organisms";
import { IContent, ISectionItem, IWidgetsList } from "reader/types";

import { FileDetailsWrapper, SectionsWrapper, StyledWidgets } from "./styled";


interface Props {
    fileDetails?: Array<IContent>,
    setFileDetails: any;
    widgetsList?: Array<IWidgetsList>;
    handleDroppableEvent(dropResult: any): void;
    addPages?(index: number, item: any): void;
    handleNewFeature(name: any, pageName: any, feature: {}): void;
}

const FileDetailsTemplate = ({ fileDetails, setFileDetails, handleDroppableEvent, widgetsList, addPages, handleNewFeature }: Props) => {

    const [itemToEdit, setItemToEdit] = useState<any>({});
    const [open, setOpen] = useState<boolean>(false);


    const addSection = (parentId: number, index: number, displayDirection: string) => {
        const newTodos = [...fileDetails];
        newTodos[parentId].sections.push({ sectionId: index + 1, displayDirection: displayDirection, items: [] })
        setFileDetails(newTodos)
        setOpen(false)
    }

    const handleUpdate = (passedItem: any) => {
        const editableItem = { ...itemToEdit }
        const newTodos = [...fileDetails];
        newTodos[editableItem.page - 1].sections[editableItem.section - 1].items[editableItem.item] = passedItem
        setFileDetails(newTodos)
    }

    const handleUpdateWithSection = (passedItem: any, pageId: any, sectionId: any, itemId: any) => {
        const newTodos = [...fileDetails];
        newTodos[pageId - 1].sections[sectionId - 1].items.push = passedItem
    }


    return <DndProvider backend={HTML5Backend}>
        <Header />
        <FileDetailsWrapper>
            <PagesWrapper fileDetails={fileDetails} addPages={addPages} />
            <SectionsWrapper>
                {fileDetails.map((page: any) => <>
                    {page.sections.map((s: any) => <>
                        <DropZone handleNewFeatures={handleNewFeature} section={s} pageName={page.pageId} name={s.sectionId} margin={s.margin}>
                            {s.items.map((item: ISectionItem, index: number) => <div key={index} onClick={() => {
                                setItemToEdit({ item: index, section: s.sectionId, page: page.pageId, itemId: item.itemId })
                            }}>
                                <RenderItems handleUpdate={handleUpdate} item={item} sectionId={s.sectionId} pageId={page.pageId} type={item.type} handleUpdateWithSection={handleUpdateWithSection} />
                            </div>)}
                        </DropZone>
                    </>)}
                    <Button
                        value={'+'}
                        color={'#c1c1c1'}
                        onClick={() => setOpen(!open)} />
                    <AddSectionDialog open={open} addSection={addSection} parentId={page.pageId - 1} index={page.sections.length}></AddSectionDialog>
                </>)}
            </SectionsWrapper>
            <StyledWidgets>
                {widgetsList.map((widget) => <WidgetList
                    handleDroppableEvent={handleDroppableEvent}
                    children={widget.iconName}
                    tipi={widget.type}
                    chartType={[
                        {
                            "iconName": "ListIcon",
                            "type": "chart1",
                            "src": "List"
                        }]}
                    src={widget.src} />)}
            </StyledWidgets>
        </FileDetailsWrapper>
    </DndProvider>
}

export default FileDetailsTemplate;
