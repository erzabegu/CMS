import React, { useState } from 'react'
import { Input } from 'reader/atoms'
import styled from 'styled-components';
import FormatBoldRoundedIcon from '@mui/icons-material/FormatBoldRounded';
import FormatItalicRoundedIcon from '@mui/icons-material/FormatItalicRounded';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';

interface Props {
    item: any;
    handleUpdate?(passedItem: any): void;
}
const RenderText = ({ item, handleUpdate }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [fontStyle, setFontStyle] = useState<boolean>(true)
    const [fontWeight, setFontWeight] = useState<boolean>(true)

    return <div style={{ padding: '5px', position: "relative" }}>
        <Input
            type={"text"}
            defaultValue={item.itemName}
            onClick={() => setEdit(true)}
            padding={'10px'}
            color={item.color}
            fontWeight={item.fontWeight}
            fontStyle={item.fontStyle}
        />
        {edit && <StyledEdit>
            <span onClick={() => setEdit(false)}>X</span>
            <FormatBoldRoundedIcon
                style={{ backgroundColor: !fontWeight && 'lightgrey' }}
                onClick={() => {
                    setFontWeight(!fontWeight)
                    handleUpdate({ ...item, fontWeight: fontWeight ? 'bold' : '300' })
                }}

            />
            <FormatItalicRoundedIcon onClick={() => {
                setFontStyle(!fontStyle)
                handleUpdate({ ...item, fontStyle: fontStyle ? 'italic' : 'normal' })
            }}
            />
            <FormatColorFillIcon />
        </StyledEdit>
        }
    </div>
}

export default RenderText


const StyledEdit = styled.div`
    position: absolute;
    top: -20px;
    left: 10px;
    outline: 1px solid lightgrey;
    outline-radius: 3px;
`