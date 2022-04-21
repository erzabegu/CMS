import React, { useEffect, useState } from 'react';
import { Input } from 'reader/atoms';
import { StyledEditBox } from './styled';

interface Props {
    edit: boolean;
    item: any;
    handleUpdate?(passedItem: any): void;
}

const EditImageDialog = ({ edit, item, handleUpdate }: Props) => {

    const [height, setHeight] = useState<number>(100)
    const [width, setWidth] = useState<number>(100)

    return <>{edit && <StyledEditBox>
        <Input
            type={"number"}
            max={500}
            min={10}
            width={'40px'}
            margin={'2px'}
            value={height}
            onChange={(e) => {
                setHeight(Number(e.target.value))
                handleUpdate({ ...item, height: e.target.value })
            }} />
        <Input
            type={"number"}
            max={500}
            min={10}
            width={'40px'}
            margin={'2px'}
            value={width}
            onChange={(e) => {
                setWidth(Number(e.target.value))
                handleUpdate({ ...item, width: e.target.value })
            }} />
    </StyledEditBox>
    }</>
}



export default EditImageDialog