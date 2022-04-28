import { IStyledSection } from "reader/types"
import styled from "styled-components"

const StyledDroppableContainer = styled.div<IStyledSection>` 
    display: flex;
    position: relative;
    flex-direction: ${(props) => props.displayDirection ? props.displayDirection : 'row'};
    align-items: ${(props) => props.alignItems ? props.alignItems : 'center'};
    background-color: ${(props) => props.background ? props.background : '#f6f4f4'};
    margin:${(props) => props.margin ? `${props.margin}px` : '5px'};
    justify-content: space-around;
    border-radius: 5px;
    // margin: 5px;
    padding: 10px 0px;
    padding:${(props) => props.padding ? `${props.padding}px` : '10px 0px'};
    min-height: 150px;
    flex-wrap: wrap;
`
const Styled = styled.span` 
    position: absolute;
    top:-10px;
    right: -12px;
`

export { StyledDroppableContainer, Styled } 