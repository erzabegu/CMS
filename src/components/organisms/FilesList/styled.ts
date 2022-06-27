import { theme } from 'reader/styles'
import styled from 'styled-components'

const FilesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 0px;
`
const StyledPlus = styled.div`
    position: absolute;
    top: -7px;
    left: 100px;
    height: 20px;
    width: 20px;
    z-index: 999;
    text-align: center;
    border-radius: 50%;
    background-color: ${theme.colors.primary.Pink};
    color:  ${theme.colors.primary.white};
    
`
const StyledBox = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 110px;
    flex-grow: 1;
    width: 100%;
    padding: 10px 0px;
    z-index: 1;
    margin: 10px;
    padding: 5px 0px;
    align-items: center;
    border: 1px solid #959595;
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, #959595 0px 0px 0px 1px;
`

export { FilesWrapper, StyledPlus, StyledBox }