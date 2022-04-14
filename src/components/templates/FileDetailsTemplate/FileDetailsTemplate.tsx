import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Input } from "reader/atoms";
import { DropableContainer, Header, RenderItems, WidgetList } from "reader/organisms";
import { IContent, ISectionItem } from "reader/types";
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ImageIcon from '@mui/icons-material/Image';
import { FileDetailsWrapper, PagesWrapper, SectionsWrapper, StyledWidgets } from "./styled";
import { useEffect, useState } from "react";
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';
import ViewColumnRoundedIcon from '@mui/icons-material/ViewColumnRounded';


interface Props {
    fileDetails?: Array<IContent>,
    setFileDetails: any;
    handleDroppableEvent(dropResult: any): void;
}


const FileDetailsTemplate = ({ fileDetails, setFileDetails, handleDroppableEvent }: Props) => {

    const [itemToEdit, setItemToEdit] = useState<any>({});
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
        console.log(passedItem)
        const editableItem = { ...itemToEdit }
        const newTodos = [...fileDetails];
        newTodos.find((page: any) => {
            if (page.pageId === editableItem.page) {
                page.sections.find((section: any) => {
                    if (section.sectionId === editableItem.section) {
                        section.items.find((item: any) => {
                            if (item.itemId === editableItem.itemId) {
                                newTodos[editableItem.page - 1].sections[editableItem.section - 1].items[editableItem.item] = passedItem
                            }
                        })
                    }
                })
            }
        })
        setFileDetails(newTodos)
    }

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <Header />
                <FileDetailsWrapper>
                    <PagesWrapper>
                        {fileDetails.map((page: any, index: any) => <div style={{ padding: '10px 0px', }}>
                            <Input
                                type='text'
                                defaultValue={page.pageName}
                            />
                        </div>)}
                        <span style={{ color: 'rgb(180 180 180)', fontSize: '22px' }} onClick={() => addPages(fileDetails.length, fileDetails.length + 1)}>+</span>
                    </PagesWrapper>
                    <SectionsWrapper>
                        {fileDetails.map((page: any) => <>
                            {page.sections.map((s: any) => <>
                                <DropableContainer displayDirection={s.displayDirection} pageName={page.pageId} name={s.sectionId} >
                                    {s.items.map((item: ISectionItem, index: number) => <div key={index} onClick={() => {
                                        setItemToEdit({ item: index, section: s.sectionId, page: page.pageId, itemId: item.itemId })
                                    }}>
                                        <RenderItems handleUpdate={handleUpdate} item={item} type={item.type} />
                                    </div>)}
                                </DropableContainer>
                            </>)}
                            <span style={{ color: '#c1c1c1', fontSize: '22px' }} onClick={() => setOpen(true)}>+</span>
                            {open === true && <div style={{ outline: '1px solid lightGrey', width: 'fit-content', padding: '5px 0px', borderRadius: '5px' }}>
                                <TableRowsRoundedIcon onClick={() => addSection(page.pageId - 1, page.sections.length, 'row')} />
                                <ViewColumnRoundedIcon onClick={() => addSection(page.pageId - 1, page.sections.length, 'column')} />
                            </div>}
                        </>)}
                    </SectionsWrapper>
                    <StyledWidgets>
                        <WidgetList fileDetails={fileDetails} handleDroppableEvent={handleDroppableEvent} children={<TextFieldsIcon />} tipi={'text'} />
                        <WidgetList fileDetails={fileDetails} handleDroppableEvent={handleDroppableEvent} children={<ImageIcon />} tipi={'image'} />
                    </StyledWidgets>
                </FileDetailsWrapper>
            </DndProvider>
        </>
    )
}

export default FileDetailsTemplate;
