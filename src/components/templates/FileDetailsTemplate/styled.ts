import styled from "styled-components"

const FileDetailsWrapper = styled.div`
    display: flex;
    box-sizing: border-box; 
    justify-content: stretch;
`

const PagesWrapper = styled.div`
    flex-grow: 1;
    background-color: rgb(240 231 234);
    padding: 10px;
    border-radius: 5px; 
    align-items: center; 
    min-height: 86.5vh;
    align-self: stretch; 
    text-align: center;
`
const SectionsWrapper = styled.div`
    flex-grow: 10;
    padding: 20px;
    display: flex;
    flex-direction: column;
`
const StyledWidgets = styled.div`
    flex-grow: 1;
    background-color: rgb(240 231 234);
    max-width: 40px;
    border-radius: 5px;
    padding: 6px 2px;
`
export { FileDetailsWrapper, PagesWrapper, SectionsWrapper, StyledWidgets }