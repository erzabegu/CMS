import React from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";

interface DropResult {
    name: string;
    children?: any;
    pageName: any;
    displayDirection: string;
}
interface StyledSection {
    displayDirection: string;
}

const DropableContainer = ({ name, children, pageName, displayDirection }: DropResult) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'box',
        drop: () => ({ name: name, pageName: pageName }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

    const isActive = canDrop && isOver
    let backgroundColor = '#f6f4f4'
    if (isActive) {
        backgroundColor = '#d98cb3'
    } else if (canDrop) {
        backgroundColor = '#d9d9d9'
    }
    return <StyledDroppableContainer ref={drop} role={'1'} displayDirection={displayDirection} style={{ backgroundColor: backgroundColor }} >{children}</StyledDroppableContainer>
}

export default DropableContainer

const StyledDroppableContainer = styled.div<StyledSection>` 
    display: flex;
    flex-direction: ${(props) => props.displayDirection};
    align-items: center;
    border-radius: 5px;
    margin: 5px;
    padding: 10px 0px;
    min-height: 70px;
`   