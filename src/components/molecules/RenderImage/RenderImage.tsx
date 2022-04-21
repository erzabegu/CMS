import React, { useEffect, useState } from 'react'
import { Icon, Image, Input } from 'reader/atoms'
import styled from 'styled-components';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { RenderImageWrapper, StyledEditBox } from './styled';

interface Props {
    item: any;
    handleUpdate?(passedItem: any): void;
}

const RenderImage = ({ item, handleUpdate }: Props) => {

    const hiddenFileInput = React.useRef<HTMLInputElement>(null)
    const [edit, setEdit] = useState<boolean>(false)
    const [height, setHeight] = useState<number>(100)
    const [width, setWidth] = useState<number>(100)

    const handleClick = (e: any) => {
        hiddenFileInput.current.click();
    };

    //refactor qitu me qit funksionin jasht
    const imageHandler = (e: any) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                handleUpdate({ ...item, src: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };


    return <RenderImageWrapper>
        {!item.src ? <><Icon iconName={<UploadFileIcon />} onClick={handleClick} />
            <Input
                ref={hiddenFileInput}
                type="file"
                display={"none"}
                accept={"image/png, image/jpeg"}
                onChange={imageHandler} />
        </> : <Image src={item.src} height={item.height ? item.height : height} width={item.width ? item.width : width} onClick={() => setEdit(!edit)} />}

        {edit && <StyledEditBox>
            <Input
                type="number"
                max={500}
                min={10}
                width={'40px'}
                margin={'2px'}
                value={item.height ? item.height : height}
                onChange={(e) => {
                    setHeight(Number(e.target.value))
                    handleUpdate({ ...item, height: height })
                }} />
            <Input
                type="number"
                max={500}
                min={10}
                width={'40px'}
                margin={'2px'}
                value={width}
                onChange={(e) => {
                    setWidth(Number(e.target.value))
                    handleUpdate({ ...item, width: width })
                }} />
        </StyledEditBox>
        }
    </RenderImageWrapper>
}

export default RenderImage
