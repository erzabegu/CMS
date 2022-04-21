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
    AlignVerticalTopIcon
} from "../../assets/icons/icons";

import { AddCustomPicker } from '../AddCustomPicker';
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

    return <>{openDialog && <EditSectionSettings>
        <Icon
            iconName={<ViewColumnRoundedIcon />}
            onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { displayDirection: 'column' })} />
        <Icon
            iconName={<TableRowsRoundedIcon />}
            onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { displayDirection: 'row' })} />

        {displayDirection === 'column' ? <>
            <Icon iconName={<FormatAlignLeftIcon />} onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { alignItems: 'flex-start' })} />
            <Icon iconName={<FormatAlignCenterIcon />} onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { alignItems: 'center' })} />
            <Icon iconName={<FormatAlignRightIcon />} onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { alignItems: 'flex-end' })} />
        </> : <>
            <Icon iconName={<AlignVerticalTopIcon />} onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { alignItems: 'flex-start' })} />
            <Icon iconName={<VerticalAlignCenter />} onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { alignItems: 'center' })} />
            <Icon iconName={<AlignVerticalBottom />} onClick={() => handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { alignItems: 'flex-end' })} />
        </>
        }
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
