import styled from "styled-components"

const FileDetailsWrapper = styled.div`
    display: flex;
    box-sizing: border-box; 
    min-height: calc(100vh - 60px);
    position: relative;
`
const SectionsWrapper = styled.div`
    flex-grow: 10;
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
    position: relative;
`
export { FileDetailsWrapper, StyledWidgets, SectionsWrapper }