import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Input } from "reader/atoms";

import { DropableContainer, Header, RenderItems, WidgetList } from "reader/organisms";

import { IContent, ISectionItem, IWidgetsList } from "reader/types";

import ViewColumnRoundedIcon from '@mui/icons-material/ViewColumnRounded';
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';

import { FileDetailsWrapper, PagesWrapper, SectionsWrapper, StyledWidgets } from "./styled";
import styled from "styled-components";

interface Props {
    fileDetails?: Array<IContent>,
    setFileDetails: any;
    widgetsList?: Array<IWidgetsList>;
    handleDroppableEvent(dropResult: any): void;
}

const FileDetailsTemplate = ({ fileDetails, setFileDetails, handleDroppableEvent, widgetsList }: Props) => {

    const [itemToEdit, setItemToEdit] = useState<any>({});
    const [sectionToEdit, setSectionToEdit] = useState<any>({});
    const [open, setOpen] = useState<boolean>(false);

    const addPages = (index: any, item: any) => {
        const newTodos = [...fileDetails];
        newTodos.push({ pageId: item, pageName: 'new page', sections: [{ sectionId: 1, items: [] }] })
        setFileDetails(newTodos)
    }

    const addSection = (parentId: number, index: number, displayDirection: string) => {
        console.log(displayDirection)
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

    const handleUpdate1 = (name: any, pageName: any) => {
        const newTodos = [...fileDetails];
        newTodos[pageName - 1].sections[name - 1] = { ...newTodos[pageName - 1].sections[name - 1], displayDirection: 'column' }
        setFileDetails(newTodos)
    }

    return <DndProvider backend={HTML5Backend}>
        <Header />
        <FileDetailsWrapper>
            <PagesWrapper>
                {fileDetails.map((page: any, index: any) => <div style={{ padding: '10px 0px', }}>
                    <Input
                        type='text'
                        defaultValue={page.pageName}
                    />
                </div>)}
                <StyledSpan onClick={() => addPages(fileDetails.length, fileDetails.length + 1)}>+</StyledSpan>
            </PagesWrapper>
            <SectionsWrapper>
                {fileDetails.map((page: any) => <>
                    {page.sections.map((s: any) => <>
                        <DropableContainer handleUpdate1={handleUpdate1} displayDirection={s.displayDirection} pageName={page.pageId} name={s.sectionId} >
                            {s.items.map((item: ISectionItem, index: number) => <div key={index} onClick={() => {
                                setItemToEdit({ item: index, section: s.sectionId, page: page.pageId, itemId: item.itemId })
                            }}>
                                <RenderItems handleUpdate={handleUpdate} item={item} type={item.type} />
                            </div>)}
                        </DropableContainer>
                    </>)}
                    <StyledSpan onClick={() => setOpen(true)}>+</StyledSpan>
                    {open === true && <div style={{ outline: '1px solid lightGrey', width: 'fit-content', padding: '5px 0px', borderRadius: '5px' }}>
                        <TableRowsRoundedIcon onClick={() => addSection(page.pageId - 1, page.sections.length, 'row')} />
                        <ViewColumnRoundedIcon onClick={() => addSection(page.pageId - 1, page.sections.length, 'column')} />
                    </div>}
                </>)}
            </SectionsWrapper>
            <StyledWidgets>
                {widgetsList.map((widget) => <WidgetList fileDetails={fileDetails} handleDroppableEvent={handleDroppableEvent} children={widget.iconName} tipi={widget.type} />)}
            </StyledWidgets>
        </FileDetailsWrapper>
    </DndProvider>
}

export default FileDetailsTemplate;

const StyledSpan = styled.div`
    color: #c1c1c1, 
    fontSize: 22px,
`
