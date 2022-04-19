import React, { useState } from 'react'
import { Input, TextArea } from 'reader/atoms'
import styled from 'styled-components';
import FormatBoldRoundedIcon from '@mui/icons-material/FormatBoldRounded';
import FormatItalicRoundedIcon from '@mui/icons-material/FormatItalicRounded';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import { AddCustomPicker } from '../AddCustomPicker';
import ColorizeIcon from '@mui/icons-material/Colorize';

interface Props {
    item: any;
    handleUpdate?(passedItem: any): void;
}
const RenderText = ({ item, handleUpdate }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [fontStyle, setFontStyle] = useState<boolean>(true)
    const [fontWeight, setFontWeight] = useState<boolean>(true)
    const [openColorPicker, setOpenColorPicker] = useState<boolean>(false)
    const [openPicker, setOpenPicker] = useState<boolean>(false)
    const [itemColor, setItemColor] = useState<string>("");
    const [itemBackground, setItemBackground] = useState<string>("");

    return <div style={{ padding: '5px', position: "relative" }}>
        <TextArea
            onClick={() => setEdit(!edit)}
            defaultValue={item.itemName}
            placeholder={item.placeholder}
            style={{
                width: 200,
                fontSize: item.fontSize,
                fontWeight: item.fontWeight,
                fontStyle: item.fontStyle,
                color: item.color,
                backgroundColor: item.backgroundColor,
                maxWidth: '800px',
                outline: 'none',
                border: 'none',
                borderRadius: '7px',
                padding: '10px',
            }}
        />
        {edit && <StyledEdit>
            <FormatBoldRoundedIcon
                style={{ backgroundColor: !fontWeight && 'lightgrey' }}
                onClick={() => {
                    setFontWeight(!fontWeight)
                    handleUpdate({ ...item, fontWeight: fontWeight ? 'bold' : '300' })
                }}

            />
            <FormatItalicRoundedIcon
                style={{ backgroundColor: !fontStyle && 'lightgrey' }}
                onClick={() => {
                    setFontStyle(!fontStyle)
                    handleUpdate({ ...item, fontStyle: fontStyle ? 'italic' : 'normal' })
                }}
            />
            <FormatColorFillIcon onClick={() => {
                setOpenColorPicker(!openColorPicker)
                setOpenPicker(false)
            }} />
            <AddCustomPicker openPicker={openColorPicker} color={item.color} width={'200px'} onChangeComplete={(color) => {
                setItemColor(color.hex)
                itemColor && handleUpdate({ ...item, color: itemColor ? itemColor : 'black' })
            }} />
            <ColorizeIcon onClick={() => {
                setOpenPicker(!openPicker)
                setOpenColorPicker(false)
            }} />
            <AddCustomPicker openPicker={openPicker} color={item.color} width={'200px'} onChangeComplete={(color) => {
                setItemBackground(color.hex)
                handleUpdate({ ...item, backgroundColor: itemBackground ? itemBackground : 'white' })
            }} />

        </StyledEdit>
        }
    </div>
}

export default RenderText


const StyledEdit = styled.div`
    display: flex;
    position: absolute;
    // top: -27px;
    // left: 10px;
    // outline: 1px solid lightgrey;
    // outline-radius: 3px;
    padding: 2px 2px;
`