import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Input } from "reader/atoms";
import { Container } from "reader/layouts";
import { DropableContainer, WidgetList } from "reader/organisms";
import { IContent } from "reader/types";
import styled from "styled-components";

interface Props {
    fileDetails?: Array<IContent>,
    setFileDetails?: any;
}

interface DropResult {
    name: string;
}
const FileDetailsTemplate = ({ fileDetails, setFileDetails }: Props) => {

    const addPages = (index: any, item: any) => {
        const newTodos = [...fileDetails];
        newTodos[index] = item;
        setFileDetails(newTodos);
    }

    const addSection = (parentId: number, index: number) => {
        const newTodos = [...fileDetails];
        newTodos[parentId].sections[index] = { sectionId: index + 1, items: [{ itemId: 1, itemName: 'new item', }] }
        setFileDetails(newTodos)
    }

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <Container>
                    <div style={{ display: 'flex' }}>
                        <div style={{ flexGrow: 4 }}>
                            {fileDetails.map((page: any, index: any) => <div key={index} style={{ backgroundColor: '#f7f7f7', display: 'flex', justifyContent: 'space-between' }}>
                                <PagesWrapper key={index}><Input
                                    type='text'
                                    defaultValue={page.pageId}
                                /></PagesWrapper>
                                <SectionWrapper>{page.sections.map((s: any, index: number) => <>
                                    <StyledSection key={index}> <DropableContainer pageName={page.pageId} name={s.sectionId} >{s.sectionId}</DropableContainer></StyledSection>
                                </>
                                )}
                                    <div onClick={() => addSection(page.pageId - 1, page.sections.length)} >+</div>
                                </SectionWrapper>
                            </div>)}
                            <div onClick={() => addPages(fileDetails.length, { pageId: fileDetails.length + 1, sections: [{ sectionId: 1, items: [{ itemId: 1, }] }] })}>+</div>
                        </div>
                        <div style={{ flexGrow: 1 }}>
                            <WidgetList fileDetails={fileDetails} setFileDetails={setFileDetails} />
                        </div>
                    </div>
                </Container>
            </DndProvider>
        </>
    )
}

export default FileDetailsTemplate;


const PagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 10px;
`
const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    flex-grow: 2;
`

const StyledSection = styled.div`
    height: auto;
    // width: 900px;
    margin: 2px; 
    transition: 0.5s all;
    &:hover {
        background-color: #fefefe,
    }
`
