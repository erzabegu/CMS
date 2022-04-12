import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Input } from "reader/atoms";
import { Container } from "reader/layouts";
import { DropableContainer, Header, RenderItems, WidgetList } from "reader/organisms";
import { IContent, ISectionItem } from "reader/types";
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ImageIcon from '@mui/icons-material/Image';
import styled from "styled-components";
import { theme } from 'reader/styles'
import { FileDetailsWrapper, PagesWrapper, SectionsWrapper, StyledWidgets } from "./styled";


interface Props {
    fileDetails?: Array<IContent>,
    setFileDetails: any;
    handleDroppableEvent(dropResult: any): void;
}


const FileDetailsTemplate = ({ fileDetails, setFileDetails, handleDroppableEvent }: Props) => {


    const addPages = (index: any, item: any) => {
        const newTodos = [...fileDetails];
        newTodos.push({ pageId: item, pageName: 'new page', sections: [{ sectionId: 1, items: [] }] })
        setFileDetails(newTodos)
    }

    const addSection = (parentId: number, index: number) => {
        const newTodos = [...fileDetails];
        newTodos[parentId].sections.push({ sectionId: index + 1, items: [] })
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
                        {fileDetails.map((page: any, index: any) => <>
                            {page.sections.map((s: any, index: number) => <>
                                <DropableContainer pageName={page.pageId} name={s.sectionId} >
                                    {s.items.map((item: ISectionItem) => <RenderItems type={item.type} />)}
                                </DropableContainer>
                            </>)}
                            <span style={{ color: '#c1c1c1', fontSize: '22px' }} onClick={() => addSection(page.pageId - 1, page.sections.length)}>+</span>
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
