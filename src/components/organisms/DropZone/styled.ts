import styled from "styled-components"

interface StyledSection {
    displayDirection: string;
    alignItems: string;
    background?: string;
}

const StyledDroppableContainer = styled.div<StyledSection>` 
    display: flex;
    position: relative;
    flex-direction: ${(props) => props.displayDirection ? props.displayDirection : 'row'};
    align-items: ${(props) => props.alignItems ? props.alignItems : 'center'};
    background-color: ${(props) => props.background ? props.background : '#f6f4f4'};
    justify-content: space-around;
    border-radius: 5px;
    margin: 5px;
    padding: 10px 0px;
    min-height: 150px;
    flex-wrap: wrap;
`
const Styled = styled.span` 
    position: absolute;
    top:-10px;
    right: -3px;
`

export { StyledDroppableContainer, Styled } 