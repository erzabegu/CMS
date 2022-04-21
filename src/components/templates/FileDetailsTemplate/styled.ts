import styled from "styled-components"

const FileDetailsWrapper = styled.div`
    display: flex;
    box-sizing: border-box; 
    justify-content: stretch;
`
const SectionsWrapper = styled.div`
    flex-grow: 10;
    max-width: 900px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`
const StyledWidgets = styled.div`
    flex-grow: 1;
    background-color: rgb(240 231 234);
    max-width: 40px;
    border-radius: 5px;
    padding: 6px 2px;
`
export { FileDetailsWrapper, StyledWidgets, SectionsWrapper }