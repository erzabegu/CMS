import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Input } from "reader/atoms";
import { Container } from "reader/layouts";
import { DropableContainer, Header, RenderItems, WidgetList } from "reader/organisms";
import { IContent, ISectionItem } from "reader/types";
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ImageIcon from '@mui/icons-material/Image';
import styled from "styled-components";


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
                <Container>
                    <div style={{ display: 'flex' }}>
                        {/* <div>{fileDetails.map((file) => <h1>{file.pageId}</h1>)}<span onClick={() => addPages(fileDetails.length, fileDetails.length + 1)}>+</span></div> */}
                        <div style={{ flexGrow: 6 }}>
                            {fileDetails.map((page: any, index: any) => <div key={index} style={{ backgroundColor: '#f7f7f7', display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                                <PagesWrapper><Input
                                    type='text'
                                    defaultValue={page.pageId}
                                /></PagesWrapper>
                                <SectionWrapper>{page.sections.map((s: any, index: number) => <>
                                    <StyledSection key={index}> <DropableContainer pageName={page.pageId} name={s.sectionId} >{1}</DropableContainer>
                                        {s.items.map((item: ISectionItem) => <RenderItems type={item.type} />)}
                                    </StyledSection>
                                </>)}
                                    <span onClick={() => addSection(page.pageId - 1, page.sections.length)}>+</span>
                                </SectionWrapper>
                            </div>)}
                            <span onClick={() => addPages(fileDetails.length, fileDetails.length + 1)}>+</span>
                        </div>
                        <div style={{ flexGrow: 1 }}>
                            <WidgetList fileDetails={fileDetails} handleDroppableEvent={handleDroppableEvent} children={<TextFieldsIcon />} tipi={'text'} />
                            <WidgetList fileDetails={fileDetails} handleDroppableEvent={handleDroppableEvent} children={<ImageIcon />} tipi={'image'} />
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
    flex-grow: 3;
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
