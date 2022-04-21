import React, { useState } from 'react'
import { TextArea } from 'reader/atoms'
import styled from 'styled-components';
import { EditTextDialog } from '../EditTextDialog';

interface Props {
    item: any;
    handleUpdate?(passedItem: any): void;
}

const RenderText = ({ item, handleUpdate }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);

    return <div style={{ padding: '5px', position: "relative" }}>
        <TextArea
            placeholder={item.placeholder}
            defaultValue={item.itemName}
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
            onClick={() => setEdit(!edit)}
        />
        <EditTextDialog edit={edit} item={item} handleUpdate={handleUpdate} />
    </div>
}

export default RenderText
