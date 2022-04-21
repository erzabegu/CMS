import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";

import { EditIcon } from '@chakra-ui/icons'
import { AddCustomPicker } from "reader/molecules";
import { Icon } from "reader/atoms";
import {
    ViewColumnRoundedIcon,
    VerticalAlignCenter,
    AlignVerticalBottom,
    TableRowsRoundedIcon,
    FormatAlignLeftIcon,
    FormatAlignRightIcon,
    FormatColorFillIcon,
    FormatAlignCenterIcon,
    AlignVerticalTopIcon
} from "../../assets/icons/icons";

interface DropResult {
    name: string;
    children?: any;
    pageName: any;
    displayDirection: string;
    alignItems: string;
    background?: string;
    handleNewFeatures(name: any, pageName: any, feature: {}): void;
}

interface StyledSection {
    displayDirection: string;
    alignItems: string;
    background?: string;
}

const DropZone = ({ name, children, pageName, displayDirection, handleNewFeatures, alignItems, background }: DropResult) => {

    const [openSectionDialog, setSectionDialog] = useState<boolean>(false)
    const [sectionToEdit, setSectionToEdit] = useState<any>()
    const [openColorPicker, setOpenColorPicker] = useState<boolean>(false);
    const [erza, setErza] = useState<boolean>(true)

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'box',
        drop: () => ({ name: name, pageName: pageName }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))


    const [pickerColor, setPickerColor] = useState<string>('#f6f4f4')

    const isActive = canDrop && isOver
    let bg = '#f6f4f4'
    if (isActive) {
        bg = '#d98cb3'
    } else if (canDrop) {
        bg = '#d9d9d9'
    }

    useEffect(() => {
        setPickerColor(bg)
    }, [bg])

    return <>
        <StyledDroppableContainer ref={drop} role={'box'} displayDirection={displayDirection} alignItems={alignItems} background={background} style={{ background: background }} >
            {children}
            <Styled onClick={() => {
                setSectionToEdit({ section: name, page: pageName })
                setSectionDialog(!openSectionDialog)
            }}><EditIcon style={{ color: 'rgb(73 72 72)' }} /></Styled>
        </StyledDroppableContainer>
        {
            openSectionDialog === true && name === sectionToEdit.section && <div style={{ color: 'lightgrey', display: 'flex', alignItems: 'center' }}>
                <Icon iconName={<ViewColumnRoundedIcon />} onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { displayDirection: 'column' })} />
                <Icon iconName={<TableRowsRoundedIcon />} onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { displayDirection: 'row' })} />
                {displayDirection === 'column' && <>
                    <Icon iconName={<FormatAlignLeftIcon />} onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { alignItems: 'flex-start' })} />
                    <Icon iconName={<FormatAlignCenterIcon />} onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { alignItems: 'center' })} />
                    <Icon iconName={<FormatAlignRightIcon />} onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { alignItems: 'flex-end' })} />
                </>}
                {displayDirection === "row" && <>
                    <Icon iconName={<AlignVerticalTopIcon />} onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { alignItems: 'flex-start' })} />
                    <Icon iconName={<VerticalAlignCenter />} onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { alignItems: 'center' })} />
                    <Icon iconName={<AlignVerticalBottom />} onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { alignItems: 'flex-end' })} />
                </>
                }
                <Icon iconName={<FormatColorFillIcon />} onClick={() => setOpenColorPicker(!openColorPicker)} />
                <AddCustomPicker openPicker={openColorPicker} color={pickerColor} width={'220px'} onChangeComplete={(color) => {
                    setPickerColor(color.hex)
                    handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { background: pickerColor })
                }} />
            </div>
        }
    </>
}

export default DropZone

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