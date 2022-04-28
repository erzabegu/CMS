import { useState } from 'react'
import { Icon, Input } from "reader/atoms";
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
} from "reader/icons";
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
    const [margin, setMargin] = useState<number>(5)
    const [padding, setPadding] = useState<number>(5)

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
        <span style={{ margin: '2px' }}>
            <Input type="number"
                value={margin}
                onChange={(e) => {
                    setMargin(Number(e.target.value))
                    handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { margin: Number(e.target.value) })
                }}
                width={'50px'}
            /></span>
        <span style={{ margin: '2px' }}>
            <Input type="number"
                value={padding}
                onChange={(e) => {
                    setPadding(Number(e.target.value))
                    handleNewFeatures(sectionToEdit.section, sectionToEdit.page, { padding: Number(e.target.value) })
                }}
                width={'50px'}
            /></span>
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
