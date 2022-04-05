import React from "react";
import { Input } from "reader/atoms";
import { Container } from "reader/layouts";
import { IContent } from "reader/types";
import styled from "styled-components";
interface Props {
    fileDetails?: Array<IContent>,
    setFileDetails?: any;
}


const FileDetailsTemplate = ({ fileDetails, setFileDetails }: Props) => {

    const addPages = (index: any, item: any) => {
        console.log(index)
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
        <Container>
                <div style={{ display: 'flex' }}>
                    <div style={{ flexGrow: 4 }}>
                        {fileDetails.map((page: any, index: any) => <div key={index} style={{ backgroundColor: '#f7f7f7', display: 'flex', justifyContent: 'space-between' }}>
                            <PagesWrapper><Input
                                type='text'
                                defaultValue={page.pageId}
                                onClick={() => console.log('clicked')}
                            /></PagesWrapper>
                            <SectionWrapper>{page.sections.map((s: any) => <>
                                <StyledSection> section {s.sectionId}
                                    {s.items.map((item: any) => <Input
                                        type='text'
                                        defaultValue={item.text}
                                        onClick={() => console.log('clicked')}
                                    />)}<span onClick={() => console.log('duhet me add ni item')}>+</span>
                                </StyledSection>
                            </>
                            )}
                                <div onClick={() => addSection(page.pageId - 1, page.sections.length)} >+</div>
                            </SectionWrapper>
                        </div>)}
                        <div onClick={() => addPages(fileDetails.length, { pageId: fileDetails.length + 1, sections: [{ sectionId: 1, items: [{ itemId: 1, type: "", text: "", fontSize: '' }] }] })}>+</div>
                    </div>
                    <div style={{ flexGrow: 1 }}>

                    </div>
                </div>
        </Container>
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
    border: 1px solid grey;
    &:hover {
        background-color: #fefefe,
    }
`
