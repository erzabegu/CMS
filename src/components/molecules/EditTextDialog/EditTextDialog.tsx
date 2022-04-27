import React, { useEffect, useState } from 'react'
import { Icon } from 'reader/atoms'
import { ColorizeIcon, FormatBoldRoundedIcon, FormatColorFillIcon, FormatItalicRoundedIcon } from 'src/components/icons/icons'
import styled from 'styled-components';
import { AddCustomPicker } from '../AddCustomPicker';

interface Props {
    edit?: boolean;
    item?: any;
    handleUpdate?(passedItem: any): void;
}

const EditTextDialog = ({ edit, item, handleUpdate }: Props) => {
    const [fontWeight, setFontWeight] = useState<boolean>(true)
    const [fontStyle, setFontStyle] = useState<boolean>(true)
    const [openColorPicker, setOpenColorPicker] = useState<boolean>(false)
    const [openPicker, setOpenPicker] = useState<boolean>(false)
    const [itemColor, setItemColor] = useState<string>("");

    return <>
        {edit && <StyledEdit>
            <Icon iconName={<FormatBoldRoundedIcon />}
                backgroundColor={!fontWeight && 'lightgrey'}
                onClick={() => {
                    setFontWeight(!fontWeight)
                    handleUpdate({ ...item, fontWeight: fontWeight ? 'bold' : '300' })
                }}
            />
            <Icon iconName={<FormatItalicRoundedIcon />}
                backgroundColor={!fontStyle && 'lightgrey'}
                onClick={() => {
                    setFontStyle(!fontStyle)
                    handleUpdate({ ...item, fontStyle: fontStyle ? 'italic' : 'normal' })
                }}
            />
            <Icon iconName={<FormatColorFillIcon />}
                onClick={() => {
                    setOpenColorPicker(!openColorPicker)
                    setOpenPicker(false)
                }} />
            <AddCustomPicker openPicker={openColorPicker}
                color={item.color}
                width={'200px'}
                onChangeComplete={(color) => {
                    setItemColor(color.hex)
                    handleUpdate({ ...item, color: itemColor ? itemColor : 'black' })
                }} />
            <Icon iconName={<ColorizeIcon />}
                onClick={() => {
                    setOpenPicker(!openPicker)
                    setOpenColorPicker(false)
                }} />
            <AddCustomPicker
                openPicker={openPicker}
                color={item.color}
                width={'200px'}
                onChangeComplete={(color) => {
                    handleUpdate({ ...item, backgroundColor: color.hex ? color.hex : 'white' })
                }} />

        </StyledEdit>
        }
    </>

}

export default EditTextDialog


const StyledEdit = styled.div`
    display: flex;
    position: absolute;
    padding: 2px 2px;
`