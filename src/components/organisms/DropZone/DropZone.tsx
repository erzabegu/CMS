import { useState } from "react";
import { useDrop } from "react-dnd";

import { EditIcon } from '@chakra-ui/icons'
import { EditSectionDialog } from "reader/molecules";
import { Styled, StyledDroppableContainer } from "./styled";

interface DropResult {
    name: string;
    children?: any;
    pageName: any;
    displayDirection: string;
    alignItems: string;
    background?: string;
    handleNewFeatures(name: any, pageName: any, feature: {}): void;
}


const DropZone = ({ name, children, pageName, displayDirection, handleNewFeatures, alignItems, background }: DropResult) => {

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

    //qikjo s bon
    const isActive = canDrop && isOver
    let bg = '#f6f4f4'
    if (isActive) {
        bg = '#d98cb3'
    } else if (canDrop) {
        bg = '#d9d9d9'
    }

    return <>
        <StyledDroppableContainer ref={drop} role={'box'} displayDirection={displayDirection} alignItems={alignItems} background={background} style={{ background: background }} >
            {children}
            <Styled onClick={() => {
                setSectionToEdit({ section: name, page: pageName })
                setSectionDialog(!openSectionDialog)
            }}><EditIcon style={{ color: 'rgb(73 72 72)' }} /></Styled>
        </StyledDroppableContainer>
        <EditSectionDialog openDialog={openSectionDialog && name === sectionToEdit.section} sectionToEdit={sectionToEdit} handleNewFeatures={handleNewFeatures} displayDirection={displayDirection} />
    </>
}

export default DropZone
