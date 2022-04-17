import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";
import ViewColumnRoundedIcon from '@mui/icons-material/ViewColumnRounded';
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';

interface DropResult {
    name: string;
    children?: any;
    pageName: any;
    displayDirection: string;
    alignItems: string;
    handleNewFeatures(name: any, pageName: any, feature: {}): void;
}

interface StyledSection {
    displayDirection: string;
    alignItems: string;
}

const DropZone = ({ name, children, pageName, displayDirection, handleNewFeatures, alignItems }: DropResult) => {

    const [openSectionDialog, setSectionDialog] = useState<boolean>(false)
    const [sectionToEdit, setSectionToEdit] = useState<any>()

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

    return <>
        <StyledDroppableContainer ref={drop} role={'box'} displayDirection={displayDirection} alignItems={alignItems} style={{ backgroundColor: backgroundColor }} >
            {children}
            <Styled onClick={() => {
                setSectionToEdit({ section: name, page: pageName })
                setSectionDialog(!openSectionDialog)
            }}>click</Styled>
        </StyledDroppableContainer>
        {openSectionDialog === true && name === sectionToEdit.section && <div>
            <ViewColumnRoundedIcon onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { displayDirection: 'column' })} />
            <TableRowsRoundedIcon onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { displayDirection: 'row' })} />
            <span onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { alignItems: 'flex-end' })} >end</span>
            <FormatAlignRightIcon onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { alignItems: 'flex-start' })} />
            <span onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { alignItems: 'center' })} >center</span>
        </div>}
    </>
}

export default DropZone

const StyledDroppableContainer = styled.div<StyledSection>` 
    display: flex;
    position: relative;
    flex-direction: ${(props) => props.displayDirection};
    align-items: ${(props) => props.alignItems ? props.alignItems : 'center'};
    justify-content: space-around;
    border-radius: 5px;
    margin: 5px;
    padding: 10px 0px;
    min-height: 70px;
    
`
const Styled = styled.span` 
    position: absolute;
    bottom: 0;
    right: 0;
`   