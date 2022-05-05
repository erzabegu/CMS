import { useState } from 'react'
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
    AlignVerticalTopIcon,
    MarginIcon,
    PaddingIcon
} from "reader/icons";
import { AddCustomPicker } from '../AddCustomPicker';
import { SectionSize } from '../SectionSize';
import { EditSectionSettings } from './styled';

interface Props {
    openDialog: boolean;
    displayDirection?: any;
    sectionToEdit: any;
    handleNewFeatures(name: any, pageName: any, feature: {}): void;
}

const EditSectionDialog = ({ openDialog, displayDirection, handleNewFeatures, sectionToEdit }: Props) => {
    const [openColorPicker, setOpenColorPicker] = useState<boolean>(false);
    const [pickerColor, setPickerColor] = useState<string>('#f6f4f4')
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [feature, setFeature] = useState<string>('')

    return <>{openDialog && <EditSectionSettings>
        <Icon
            iconName={<ViewColumnRoundedIcon />}
            onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { displayDirection: 'column' })} />
        <Icon
            iconName={<TableRowsRoundedIcon />}
            onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { displayDirection: 'row' })} />
        {displayDirection === 'column' ? <>
            <Icon
                iconName={<FormatAlignLeftIcon />}
                onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { alignItems: 'flex-start' })} />
            <Icon
                iconName={<FormatAlignCenterIcon />}
                onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { alignItems: 'center' })} />
            <Icon
                iconName={<FormatAlignRightIcon />}
                onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { alignItems: 'flex-end' })} />
        </> : <>
            <Icon
                iconName={<AlignVerticalTopIcon />}
                onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { alignItems: 'flex-start' })} />
            <Icon
                iconName={<VerticalAlignCenter />}
                onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { alignItems: 'center' })} />
            <Icon
                iconName={<AlignVerticalBottom />}
                onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { alignItems: 'flex-end' })} />
        </>
        }
        <Icon iconName={<MarginIcon />} onClick={() => {
            setOpenModal(!openModal)
            setFeature('margin')
        }} />
        <Icon iconName={<PaddingIcon />} onClick={() => {
            setOpenModal(!openModal)
            setFeature('padding')
        }} />
        <SectionSize
            openModal={openModal}
            setModal={setOpenModal}
            feature={feature}
            handleNewFeatures={handleNewFeatures}
            section={sectionToEdit.section}
            page={sectionToEdit.page} />
        <Icon
            iconName={<FormatColorFillIcon />}
            onClick={() => setOpenColorPicker(!openColorPicker)} />
        <AddCustomPicker
            openPicker={openColorPicker}
            color={pickerColor}
            width={'220px'}
            onChangeComplete={(color) => {
                setPickerColor(color.hex)
                handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { background: color.hex })
            }} />
    </EditSectionSettings>}</>
}


export default EditSectionDialog
