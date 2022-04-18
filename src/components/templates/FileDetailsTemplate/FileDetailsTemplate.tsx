import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { DropZone, Header, PagesWrapper, RenderItems, WidgetList } from "reader/organisms";

import { IContent, ISectionItem, IWidgetsList } from "reader/types";


import { FileDetailsWrapper, SectionsWrapper, StyledWidgets } from "./styled";
import styled from "styled-components";
import { AddSectionDialog } from "reader/molecules";
import { Button } from "reader/atoms";

interface Props {
    fileDetails?: Array<IContent>,
    setFileDetails: any;
    widgetsList?: Array<IWidgetsList>;
    handleDroppableEvent(dropResult: any): void;
    addPages?(index: number, item: any): void;
}

const FileDetailsTemplate = ({ fileDetails, setFileDetails, handleDroppableEvent, widgetsList, addPages }: Props) => {

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

    const _handleNewFeatures = (name: any, pageName: any, feature: {}) => {
        const newTodos = [...fileDetails];
        newTodos[pageName - 1].sections[name - 1] = { ...newTodos[pageName - 1].sections[name - 1], ...feature }
        setFileDetails(newTodos)
    }

    useEffect(() => {
        console.log(fileDetails)
    }, [fileDetails])

    return <DndProvider backend={HTML5Backend}>
        <Header />
        <FileDetailsWrapper>
            <PagesWrapper fileDetails={fileDetails} addPages={addPages} />
            <SectionsWrapper>
                {fileDetails.map((page: any) => <>
                    {page.sections.map((s: any) => <>
                        <DropZone handleNewFeatures={_handleNewFeatures} displayDirection={s.displayDirection} alignItems={s.alignItems} background={s.background} pageName={page.pageId} name={s.sectionId} >
                            {s.items.map((item: ISectionItem, index: number) => <div key={index} onClick={() => {
                                setItemToEdit({ item: index, section: s.sectionId, page: page.pageId, itemId: item.itemId })
                            }}>
                                <RenderItems handleUpdate={handleUpdate} item={item} type={item.type} />
                            </div>)}
                        </DropZone>
                    </>)}
                    <Button onClick={() => setOpen(!open)} value={'+'} color={'#c1c1c1'}></Button>
                    <AddSectionDialog open={open} addSection={addSection} parentId={page.pageId - 1} index={page.sections.length}></AddSectionDialog>
                </>)}
            </SectionsWrapper>
            <StyledWidgets>
                <div style={{ position: 'sticky', top: '0px', height: '100px' }}>
                    {widgetsList.map((widget) => <WidgetList
                        fileDetails={fileDetails}
                        handleDroppableEvent={handleDroppableEvent}
                        children={widget.iconName}
                        tipi={widget.type}
                        src={widget.src} />)}
                </div>
            </StyledWidgets>
        </FileDetailsWrapper>
    </DndProvider>
}

export default FileDetailsTemplate;

const StyledSpan = styled.div`
    color: #c1c1c1, 
    fontSize: 22px,
`